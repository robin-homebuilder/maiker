"use client"

import { Fragment, useEffect, useState } from 'react'

import { FaSpinner } from 'react-icons/fa';

import { Dialog, Transition } from '@headlessui/react';

import { UserCredentialsProps } from '@/types';

import { getUserCredentialByID, saveUserCredential } from '@/services/authenticationServices';

interface ClientProps {
  isOpen: boolean;
  closeModal: () => void;
  userID: string
}

export default function Manage_Credential({ isOpen, closeModal, userID } : ClientProps) {
  const [ credentials, setCredentials ] = useState<UserCredentialsProps>({
    _id: "",
    user_pass: ""
  });

  const [ showPanel, setShowPanel ] = useState(true);
  const [ loading, setLoading ] = useState<boolean>(true);
  const [ generatingPassword, setGeneratingPassword ] = useState<boolean>(false);
  
  useEffect( () => {
    if(isOpen) {
      setShowPanel(true);

      setLoading(true);

      setGeneratingPassword(false);

      setCredentials({
        _id: userID,
        user_pass: ""
      });

      fetchCredential(userID);

      setLoading(false);
    }

  }, [isOpen, userID]);

  const fetchCredential = async (id: string) => {
    const data = await getUserCredentialByID(id);

    setCredentials(data);
  }

  const closeTheModal = () => {
    closeModal();
  }
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCredentials((prevClientData) => ({
      ...prevClientData,
      [name]: value
    }));
  };

  const generatePassword = () => {
    setGeneratingPassword(true);

    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let password = "";
    
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }

    setTimeout(() => {
      setCredentials((prevClientData) => ({
        ...prevClientData,
        user_pass: password
      }));

      setGeneratingPassword(false)
    }, 500);
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    await saveUserCredential({ data: credentials });
    
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
                <div className={`absolute top-0 left-0 w-full h-full bg-[#ffffff96] justify-center items-center text-tertiary text-[70px] ${loading ? "flex" : "hidden"}`}><FaSpinner className="animate-spin"/></div>
                <h3 className="text-[#1C7FCD] text-[25px] font-[800] mb-[25px]">Change Password</h3>
                <form className="flex flex-wrap gap-y-[25px]" autoComplete="off" onSubmit={onSubmit}>
                  <div className="w-full flex gap-x-2">
                    <input 
                      type="text" 
                      name="user_pass" 
                      placeholder="Password"
                      className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-[60%]"
                      value={credentials?.user_pass ?? ""}
                      onChange={handleInputChange}
                      required
                    />
                    <button 
                      type="button" 
                      className="w-[40%] h-[42px] bg-portalText rounded-[20px] text-white flex justify-center items-center" 
                      onClick={generatePassword}
                    >
                      {generatingPassword ? (<FaSpinner className="animate-spin"/>) : "Generate Password"}
                    </button>
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
