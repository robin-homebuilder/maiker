import React, { useState } from 'react';
import { LoadScript } from '@react-google-maps/api';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import { MailAddressProps } from "@/types";

interface GoogleMapProps {
  setFormValues: React.Dispatch<React.SetStateAction<MailAddressProps>>;
  formValues: MailAddressProps,
  handleSelectChange?: (selectedOption: any) => void;
}

const AutoCompletePlace: React.FC<GoogleMapProps> = ({ setFormValues, formValues, handleSelectChange }) => {
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
        setFormValues({
          ...formValues,
          address: "",
          address_line_1: "",
          address_line_2: "",
          suburb: "",
          postcode: ""
        });
        
        const place = australiaResults[0];
        
        let addressLine1 = '';
        let addressLine2 = '';
      
        const addressLine1Component = place.address_components.find(
          (component) => component.types.includes('subpremise')
        );
        
        const addressLine2ComponentStreetNumber = place.address_components.find(
          (component) => component.types.includes('street_number')
        );

        const suburbComponent = place.address_components.find(
          (component) => component.types.includes('locality')
        );

        const addressLine2ComponentStreet = place.address_components.find(
          (component) => component.types.includes('route')
        );
        
        const stateComponent = place.address_components.find(
          (component) => component.types.includes('administrative_area_level_1')
        );

        const postcodeComponent = place.address_components.find(
          (component) => component.types.includes('postal_code')
        );

        if(addressLine1Component){
          const checkUnit = addressLine1Component.long_name.includes("Unit");
          if(checkUnit){
            addressLine1 = addressLine1Component.long_name;
          } else{
            addressLine1 = `Unit ${addressLine1Component.long_name}`;
          }
        }

        addressLine2 = `${addressLine2ComponentStreetNumber?.long_name ? `${addressLine2ComponentStreetNumber.long_name} ` : ""}${addressLine2ComponentStreet?.long_name || ""}`;

        if(addressLine1){
          setFormValues((prevFormValues) => ({
            ...prevFormValues,
            address_line_1: addressLine1
          }));

          setFormValues((prevFormValues) => ({
            ...prevFormValues,
            address_line_2: addressLine2
          }));
        } else{
          setFormValues((prevFormValues) => ({
            ...prevFormValues,
            address_line_1: addressLine2
          }));
        }

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

        if(stateComponent){
          if(handleSelectChange){
            handleSelectChange({value: stateComponent.long_name, label: stateComponent.short_name});
          }
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
            <input {...getInputProps({ placeholder: 'Start Typing address' })} className="border border-tertiary rounded-[20px] h-[42px] w-full z-20 relative"/>
            <div className="absolute top-[28px] w-[99%] bg-white border border-tertiary rounded-bl-[20px] rounded-br-[20px] overflow-hidden z-10">
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
