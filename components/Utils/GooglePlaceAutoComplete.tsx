import React, { useState } from 'react';
import { LoadScript } from '@react-google-maps/api';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import { MailAddressProps } from "@/types";

interface GoogleMapProps {
  setFormValues: React.Dispatch<React.SetStateAction<MailAddressProps>>;
  formValues: MailAddressProps
}

const AutoCompletePlace: React.FC<GoogleMapProps> = ({ setFormValues, formValues }) => {
  const [ address, setAddress ] = useState<string>(formValues?.address || "");

  const handleSelect = async (selectedAddress: string) => {
    try {
      const results = await geocodeByAddress(selectedAddress);
      
      const australiaResults = results.filter((result) => {
        const countryComponent = result.address_components.find(
          (component) => component.types.includes('country')
        );
        return countryComponent && countryComponent.short_name === 'AU';
      });

      if (australiaResults.length > 0) {
        const place = australiaResults[0];
        
        const suburbComponent = place.address_components.find(
          (component) => component.types.includes('locality')
        );

        if (suburbComponent) {
          setFormValues((prevFormValues) => ({
            ...prevFormValues,
            suburb: suburbComponent.long_name
          }));
        } else {
          setFormValues((prevFormValues) => ({
            ...prevFormValues,
            suburb: ""
          }));
        }
        
        const addressLine1Component = place.address_components.find(
          (component) => component.types.includes('street_number')
        );
        
        const establishmentComponent = place.address_components.find(
          (component) => component.types.includes('establishment')
        );

        const routeComponent = place.address_components.find(
          (component) => component.types.includes('route')
        );
        
        const administrativeComponent = place.address_components.find(
          (component) => component.types.includes('administrative_area_level_2')
        );
        
        let addressLine1 = '';
  
        addressLine1 = `${addressLine1Component?.long_name ? `${addressLine1Component?.long_name} ` : ""}${establishmentComponent?.long_name ? `${establishmentComponent?.long_name} ` : ""}${ routeComponent?.long_name ? `${routeComponent?.long_name} ` : ""}${administrativeComponent?.long_name ? `${administrativeComponent?.long_name}` : ""}`;

        setFormValues((prevFormValues) => ({
          ...prevFormValues,
          address_line_1: addressLine1
        }));

        const postcodeComponent = place.address_components.find(
          (component) => component.types.includes('postal_code')
        );

        if (postcodeComponent) {
          setFormValues((prevFormValues) => ({
            ...prevFormValues,
            postcode: postcodeComponent.long_name
          }));
        } else {
          setFormValues((prevFormValues) => ({
            ...prevFormValues,
            postcode: ""
          }));
        }

        setFormValues((prevFormValues) => ({
          ...prevFormValues,
          address: selectedAddress
        }));

        setAddress(selectedAddress);
      } else {
        setFormValues((prevFormValues) => ({
          ...prevFormValues,
          address: ""
        }));
        setAddress('');
      }
    } catch (error) {
      console.error('Error selecting address:', error);
    }
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API!} libraries={['places']}>
      <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect} searchOptions={{ componentRestrictions: {country: ['au']}}}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="relative flex justify-center">
            <input {...getInputProps({ placeholder: 'Start Typing address' })} className="border border-tertiary rounded-[20px] h-[42px] w-full z-10 relative"/>
            <div className="absolute top-[28px] w-[99%] bg-white border border-tertiary rounded-bl-[20px] rounded-br-[20px] overflow-hidden">
              {loading ? <div>Loading...</div> : null}

              {suggestions.map((suggestion, index) => {
                const style = {
                  backgroundColor: suggestion.active ? '#41b6e6' : '#fff',
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })} key={index} className={`text-dark p-2.5 ${index == 0 && "pt-5"}`}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </LoadScript>
  );
};

export default AutoCompletePlace;
