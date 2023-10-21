"use client"

import { Fragment, useEffect, useRef, useState } from 'react'

import { Dialog, Transition } from '@headlessui/react';

import MyDatePicker from '@/components/Utils/DatePicker';
import 'react-day-picker/dist/style.css';

import { EditPracticalCompletionProps } from '@/types';

import { convertDateFormat } from '@/libs/convertDate';

import { updatePracticalCompletion } from '@/services/clientAdministration/contractAdministrationServices';

interface ClientProps {
  isOpen: boolean;
  closeModal: () => void;
  practicalCompletion: EditPracticalCompletionProps;
  refreshPracticalCompletion: () => void;
}

export default function Edit_RevisedPracticalCompletion({ isOpen, closeModal, practicalCompletion, refreshPracticalCompletion } : ClientProps) {
  const [ showPanel, setShowPanel ] = useState(true);
  const [ loading, setLoading ] = useState<boolean>(false);

  const [ showDatePicker, setShowDatePicker ] = useState<boolean>(false);
  const [ selectedDate, setSelectedDate ] = useState<string>("");

  const [ showDatePickerRevised, setShowDatePickerRevised ] = useState<boolean>(false);
  const [ selectedDateRevised, setSelectedDateRevised ] = useState<string>("");

  const dateRef = useRef<HTMLDivElement | null>(null);
  const dateRefRevised = useRef<HTMLDivElement | null>(null);

  const [ formData, setFormData ] = useState<EditPracticalCompletionProps>({
    _id: ""
  });

  useEffect( () => {
    if(isOpen) {
      setShowPanel(true)

      setLoading(false);

      setShowDatePicker(false);
      setShowDatePickerRevised(false);

      const orig = convertDateFormat(practicalCompletion.original_practical_completion!);
      const revised = convertDateFormat(practicalCompletion.revised_practical_completion!);
      
      setSelectedDate(orig || "");
      setSelectedDateRevised(revised || "");

      setFormData({
        _id: practicalCompletion._id,
        approved_extension_of_time: practicalCompletion.approved_extension_of_time || "",
        original_practical_completion: practicalCompletion.original_practical_completion || undefined,
        revised_practical_completion: practicalCompletion.revised_practical_completion || undefined
      })
    }

  }, [isOpen, practicalCompletion])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dateRef.current && !dateRef.current.contains(event.target as Node)) {
        setShowDatePicker(false);
      }

      if (dateRefRevised.current && !dateRefRevised.current.contains(event.target as Node)) {
        setShowDatePickerRevised(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClearDate = () => {
    setSelectedDate("");

    setFormData((prevFormValues) => ({
      ...prevFormValues,
      original_practical_completion: undefined
    }));
  }

  const handleClearDateRevised = () => {
    setSelectedDateRevised("");

    setFormData((prevFormValues) => ({
      ...prevFormValues,
      revised_practical_completion: undefined
    }));
  }

  const handleChangeHide = () => {

  }

  const handleSelectDate = (data: string) => {
    setSelectedDate(data);

    setFormData((prevFormValues) => ({
      ...prevFormValues,
      original_practical_completion: new Date(data)
    }));
  }

  const handleSelectDateRevised = (data: string) => {
    setSelectedDateRevised(data);

    setFormData((prevFormValues) => ({
      ...prevFormValues,
      revised_practical_completion: new Date(data)
    }));
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const closeTheModal = () => {
    closeModal();
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setLoading(true);

    await updatePracticalCompletion({ data: formData });

    refreshPracticalCompletion();
    
    closeModal();
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-[100]' onClose={() => {}} static>
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
              <Dialog.Panel className='relative w-[525px] h-auto transform rounded-[20px] bg-white text-left shadow-xl transition-all text-dark border border-[#7D7D7D] p-[30px]'>
                <h3 className="text-[#1C7FCD] text-[25px] font-[800] mb-[25px]">Edit Revised Practical Completion</h3>
                <form className="flex flex-wrap gap-y-[25px]" autoComplete="off" onSubmit={onSubmit}>
                  <div className="w-full relative" ref={dateRef}>
                    <input type="text" className="h-[42px] w-full rounded-[20px] absolute border border-portalText shadow-mainShadow text-left opacity-0" value={selectedDate} required onChange={handleChangeHide}/>
                    <button type="button" className={`h-[42px] w-full rounded-[20px] border border-portalText shadow-mainShadow relative z-10 text-left px-5 ${selectedDate ? "text-dark" : "text-[#888]"}`} onClick={() => setShowDatePicker(!showDatePicker)}>
                      {selectedDate ? selectedDate : "Original Practical Completion"}
                    </button>
                    {selectedDate && 
                      <div className="absolute top-[10px] right-[5px] z-20">
                        <button type="button" className="w-5 h-5 rounded-full text-tertiary border border-tertiary flex justify-center items-center" onClick={handleClearDate}>x</button>
                      </div>
                    }
                    {showDatePicker && (
                      <div className="border border-tertiary rounded-[10px] absolute top-[42px] left-0 w-full h-auto z-[29] bg-white">
                        <MyDatePicker handleSelectDate={handleSelectDate} selectedDate={formData.original_practical_completion!}/>
                      </div>
                    )}
                  </div>
                  <input 
                    type="number" 
                    name="approved_extension_of_time" 
                    placeholder="Approved Extensions of Time"
                    className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow no-spinners w-full"
                    value={formData.approved_extension_of_time!}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="w-full relative" ref={dateRefRevised}>
                    <input type="text" className="h-[42px] w-full rounded-[20px] absolute border border-portalText shadow-mainShadow text-left opacity-0" value={selectedDateRevised} required onChange={handleChangeHide}/>
                    <button type="button" className={`h-[42px] w-full rounded-[20px] border border-portalText shadow-mainShadow relative z-10 text-left px-5 ${selectedDateRevised ? "text-dark" : "text-[#888]"}`} onClick={() => setShowDatePickerRevised(!showDatePickerRevised)}>
                      {selectedDateRevised ? selectedDateRevised : "Revised Practical Completion"}
                    </button>
                    {selectedDateRevised && 
                      <div className="absolute top-[10px] right-[5px] z-20">
                        <button type="button" className="w-5 h-5 rounded-full text-tertiary border border-tertiary flex justify-center items-center" onClick={handleClearDateRevised}>x</button>
                      </div>
                    }
                    {showDatePickerRevised && (
                      <div className="border border-tertiary rounded-[10px] absolute top-[42px] left-0 w-full h-auto z-[29] bg-white">
                        <MyDatePicker handleSelectDate={handleSelectDateRevised} selectedDate={formData.revised_practical_completion!}/>
                      </div>
                    )}
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
