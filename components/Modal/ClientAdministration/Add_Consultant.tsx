"use client"

import { Fragment, useEffect, useRef, useState } from 'react'

import { FaSpinner } from 'react-icons/fa';

import { Dialog, Transition } from '@headlessui/react';

import { addConsultantAccess, searchConsultantByIDNumber } from '@/services/clientAdministration/consultantAccessServices';

import { ClientConsultantAccessProps } from '@/types';

interface ClientProps {
  isOpen: boolean;
  closeModal: () => void;
  clientID: string;
  refreshList: () => void;
}

export default function Add_Consultant({ isOpen, closeModal, clientID, refreshList } : ClientProps) {
  const [ showPanel, setShowPanel ] = useState(true);
  const [ loading, setLoading ] = useState<boolean>(false);

  const [ searchedConsultants, setSearchedConsultants ] = useState<ClientConsultantAccessProps[]>([]);

  const [ selectedIDNumber, setSelectedIDNumber ] = useState<string>("");
  const [ selectedDataText, setSelectedDataText ] = useState<string>("");
  
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect( () => {
    if(isOpen) {
      setShowPanel(true)

      setLoading(false);

      setSelectedIDNumber("");

      setSelectedDataText("");
    }

  }, [isOpen])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSearchedConsultants([]);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const closeTheModal = () => {
    closeModal();
  }

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    
    const searchedID = await searchConsultantByIDNumber(value, clientID);
    
    setSearchedConsultants(searchedID);
  }

  const handleBlur = () => {
    setSearchedConsultants([]);
  }

  const handleFocus = async () => {
    const value = inputRef.current?.value;

    const searchedID = await searchConsultantByIDNumber(value!, clientID);

    setSearchedConsultants(searchedID);
  }

  const handleSelectResult = (id: string, data: string) => {
    setSelectedIDNumber(id);
    setSelectedDataText(data);
    setSearchedConsultants([]);

    if(inputRef.current){
      inputRef.current.value = ""
    }
  }

  const handleRemoveSelected = () => {
    setSelectedIDNumber("");
    setSelectedDataText("");
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    await addConsultantAccess(selectedIDNumber, clientID);

    refreshList();

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
              <Dialog.Panel className='relative w-[525px] h-[250px] transform rounded-[20px] bg-white text-left shadow-xl transition-all text-dark border border-[#7D7D7D] p-[30px]'>
                <div className={`absolute top-0 left-0 w-full h-full bg-[#ffffff96] justify-center items-center z-[12] rounded-[20px] text-tertiary text-[70px] ${loading ? "flex" : "hidden"}`}><FaSpinner className="animate-spin"/></div>
                <h3 className="text-[#1C7FCD] text-[25px] font-[800] mb-[25px]">Add Consultant</h3>
                <form className="flex flex-wrap gap-y-[25px] relative" autoComplete="off" onSubmit={onSubmit}>
                  {selectedIDNumber &&
                    <>
                      <input 
                        type="text" 
                        name="selected_data" 
                        className="border border-tertiary rounded-[20px] w-full h-[42px] shadow-mainShadow absolute z-[11] top-0 left-0 bg-white"
                        value={selectedDataText}
                        disabled
                      />
                      <button 
                        type="button" 
                        className="w-5 h-5 absolute top-2 right-2 rounded-full font-[600] text-tertiary border border-tertiary flex justify-center items-center z-[12]"
                        onClick={handleRemoveSelected}
                      >
                        x
                      </button>
                    </>
                  }
                  <div className="w-full" ref={dropdownRef}>
                    <input 
                      type="text" 
                      name="consultant_id" 
                      placeholder="Consultant ID"
                      className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-full z-10 relative"
                      onChange={handleSearch}
                      onFocus={handleFocus}
                      // onBlur={handleBlur}
                      ref={inputRef}
                    />
                    {searchedConsultants.length > 0 &&
                      <div className="absolute top-[22px] left-0 w-full border border-tertiary bg-white rounded-b-[20px] overflow-hidden">
                        <div className="flex flex-wrap max-h-[220px] overflow-y-auto">
                          {searchedConsultants.map((item, index) => (
                            <button 
                              type="button" 
                              className={`${index == 0 ? "pt-[30px]" : ""} w-full text-left px-5 py-2 hover:bg-gray-300`} 
                              key={index}
                              onClick={() => handleSelectResult(item._id, `ID: ${item.id_number} || Name: ${item.name}`)}
                            >
                              ID: {item.id_number} || Name: {item.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    }
                  </div>
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
