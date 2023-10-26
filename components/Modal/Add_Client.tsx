"use client"

import { Fragment, useEffect, useState } from 'react'

import { FaSpinner } from 'react-icons/fa';

import Select from 'react-select';

import { Dialog, Transition } from '@headlessui/react';

import { ClientDataProps } from '@/types';

import { createClient } from '@/services/administration/clientServices';

import { ClientTypeOptions } from '@/libs/selectOptions';

interface ClientProps {
  isOpen: boolean;
  closeModal: () => void;
  refreshClientList: () => void;
}

export default function Add_Client({ isOpen, closeModal, refreshClientList } : ClientProps) {
  const [ client, setClient ] = useState<ClientDataProps>({
    _id: "",
    type: "individual_owner",
    first_name: "",
    last_name: "",
    company_name: "",
    trustee_name: "",
    trust_name: "",
    site_address: "",
    phone: "",
    email: "",
  });
  
  const [ selectValue, setSelectValue ] = useState<object | undefined>({ value: "individual_owner", label: "Individual Owner"});

  const [ showPanel, setShowPanel ] = useState(true);
  const [ loading, setLoading ] = useState<boolean>(false);

  useEffect( () => {
    if(isOpen) {
      setShowPanel(true)
      setSelectValue({ value: "individual_owner", label: "Individual Owner"});
      setClient({
        _id: "",
        type: "individual_owner",
        first_name: "",
        last_name: "",
        company_name: "",
        trustee_name: "",
        trust_name: "",
        site_address: "",
        phone: "",
        email: "",
      });
    }

  }, [isOpen])

  const closeTheModal = () => {
    closeModal();
  }
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setClient((prevClientData) => ({
      ...prevClientData,
      [name]: value
    }));
  };

  const handleSelectChange = (selectedOption: any) => {
    setSelectValue(selectedOption);
    setClient((prevData) => ({...prevData,  type: selectedOption.value}));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setLoading(true);
    
    await createClient({ data: client });

    refreshClientList();
    setLoading(false);
    closeModal();
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-[100]' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-70' />
        </Transition.Child>
        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center text-center top-[-100vw] static w-full h-full'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-out duration-300'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='relative w-[525px] h-auto overflow-y-auto transform rounded-[20px] bg-white text-left shadow-xl transition-all text-dark border border-[#7D7D7D] p-[30px]'>
                <div className={`absolute top-0 left-0 w-full h-full bg-[#ffffff96] justify-center items-center z-[21] text-tertiary text-[70px] ${loading ? "flex" : "hidden"}`}><FaSpinner className="animate-spin"/></div>
                <h3 className="text-[#1C7FCD] text-[25px] font-[800] mb-[25px]">Add Client</h3>
                <form className="flex flex-wrap gap-y-[25px]" autoComplete="off" onSubmit={onSubmit}>
                  <div className="w-full">
                    <Select
                      options={ClientTypeOptions}
                      value={selectValue}
                      onChange={handleSelectChange}
                      placeholder="Client Type"
                      isSearchable={false}
                      required
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          borderColor: state.isFocused ? "#358AC3" : "#358AC3",
                          width: "100%",
                          height: "42px",
                          borderRadius: "20px",
                          color: "black",
                          paddingLeft: "20px",
                          outline: "none",
                          ":hover": {
                            borderColor: "#358AC3"
                          },
                          borderWidth: state.isFocused ? "1px" : "1px",
                        }),
                        option: (provided, state) => ({
                          ...provided,
                          width: "100%",
                          color: state.isSelected ? 'white' : "black",
                          backgroundColor: state.isSelected ? '#358AC3' : 'white',
                          ":hover": {
                            backgroundColor: "lightgray"
                          }
                        }),
                        menu: (provided) => ({
                          ...provided,
                          width: "100%",
                          marginTop: "0px",
                        }),
                        valueContainer: (provided) => ({
                          ...provided,
                          paddingLeft: '0px',
                        }),
                        dropdownIndicator: (provided) => ({
                          ...provided,
                          color: 'black',
                        }),
                      }}
                    />
                  </div>
                  {(() => {
                    switch (client.type) {
                      case "individual_owner":
                        return (
                          <div className="flex gap-x-5 w-full">
                            <input 
                              type="text" 
                              name="first_name" 
                              placeholder="First Name"
                              className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-full"
                              value={client?.first_name ?? ""}
                              onChange={handleInputChange}
                              required
                            />
                            <input 
                              type="text" 
                              name="last_name" 
                              placeholder="Last Name"
                              className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-full"
                              value={client?.last_name ?? ""}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        );
                      case "company_owner":
                        return (
                          <>
                            <div className="flex gap-x-5 w-full">
                              <input 
                                type="text" 
                                name="company_name" 
                                placeholder="Company Name"
                                className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-full"
                                value={client?.company_name ?? ""}
                                onChange={handleInputChange}
                                required
                              />
                              <input 
                                type="text" 
                                name="abn" 
                                placeholder="ABN"
                                className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-full"
                                value={client?.abn ?? ""}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div className="flex gap-x-5 w-full">
                              <input 
                                type="text" 
                                name="first_name" 
                                placeholder="Contact First Name"
                                className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-full"
                                value={client?.first_name ?? ""}
                                onChange={handleInputChange}
                                required
                              />
                              <input 
                                type="text" 
                                name="last_name" 
                                placeholder="Contact Last Name"
                                className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-full"
                                value={client?.last_name ?? ""}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                          </>
                        );
                        case "trust_owner":
                          return (
                            <>
                              <input 
                                type="text" 
                                name="trustee_name" 
                                placeholder="Trustee Name"
                                className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-full"
                                value={client?.trustee_name ?? ""}
                                onChange={handleInputChange}
                                required
                              />
                              <div className="flex gap-x-5 w-full">
                                <input 
                                  type="text" 
                                  name="trust_name" 
                                  placeholder="Trust Name"
                                  className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-full"
                                  value={client?.trust_name ?? ""}
                                  onChange={handleInputChange}
                                  required
                                />
                                <input 
                                  type="text" 
                                  name="abn" 
                                  placeholder="ABN"
                                  className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-full"
                                  value={client?.abn ?? ""}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="flex gap-x-5 w-full">
                                <input 
                                  type="text" 
                                  name="first_name" 
                                  placeholder="First Name"
                                  className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-full"
                                  value={client?.first_name ?? ""}
                                  onChange={handleInputChange}
                                  required
                                />
                                <input 
                                  type="text" 
                                  name="last_name" 
                                  placeholder="Last Name"
                                  className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-full"
                                  value={client?.last_name ?? ""}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                            </>
                          );
                      default:
                        return null;
                    }
                  })()}
                  <div className="flex gap-x-5 w-full">
                    <input 
                      type="text" 
                      name="phone" 
                      placeholder="Phone Number"
                      className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-full"
                      value={client?.phone ?? ""}
                      onChange={handleInputChange}
                      required
                    />
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Email"
                      className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-full"
                      value={client?.email ?? ""}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <input 
                    type="text" 
                    name="site_address" 
                    placeholder="Mailing Address"
                    className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-full"
                    value={client?.site_address ?? ""}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="flex justify-end gap-x-2.5 w-full">
                    <button type="button" className="text-warning border border-warning rounded-[20px] text-[16px] shadow-mainShadow font-[600] w-[120px] h-[42px]" onClick={closeTheModal}>Cancel</button>
                    <button type="submit" className="text-white bg-warning rounded-[20px] text-[16px] shadow-mainShadow font-[600] w-[120px] h-[42px]">Save</button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
