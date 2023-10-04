"use client"

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from 'next/navigation';

import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";

import { TfiClose } from "react-icons/tfi";

import 'react-day-picker/dist/style.css';
import MyDatePicker from "@/components/Utils/DatePicker";

import { AdministrationArticleProps } from "@/types";

import { createAdministrationArticle } from "@/services/administration/articleServices";

export default function Add_Articles() {
  const Editor = useMemo(() => dynamic(() => import("../../../../components/Utils/Editor"), { ssr: false }), []);

  const router = useRouter();

  const imageRef = useRef<HTMLInputElement | null>(null);
  const bannerRef = useRef<HTMLInputElement | null>(null);

  const [ imagePreviewUrl, setImagePreviewUrl ] = useState<string | null>(null);
  const [ imageName, setImageName ] = useState<string | null>(null);

  const [ bannerPreviewUrl, setBannerPreviewUrl ] = useState<string | null>(null);
  const [ bannerName, setBannerName ] = useState<string | null>(null);

  const [ showDatePicker, setShowDatePicker ] = useState<boolean>(false);
  const [ selectedDate, setSelectedDate ] = useState<string>("");
  const dateRef = useRef<HTMLDivElement | null>(null);

  const [ showSidebar, setShowSidebar ] = useState<boolean>(false);

  const [ formData, setFormData ] = useState<AdministrationArticleProps>({
    title: "",
    sub_title: "",
    author: "",
    content: "",
    company: "",
    image: "",
    banner: "",
    imageFile: undefined,
    bannerFile: undefined,
    with_sidebar: false,
    external_links: []
  })

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dateRef.current && !dateRef.current.contains(event.target as Node)) {
        setShowDatePicker(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) {
      return;
    }

    setFormData((prevFormValues) => ({
      ...prevFormValues,
      imageFile: selectedFile
    }));

    setImageName(selectedFile.name);

    const imageUrl = URL.createObjectURL(selectedFile);
    setImagePreviewUrl(imageUrl);
  };
  
  const handleFileBannerUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) {
      return;
    }

    setFormData((prevFormValues) => ({
      ...prevFormValues,
      bannerFile: selectedFile
    }));

    setBannerName(selectedFile.name);

    const imageUrl = URL.createObjectURL(selectedFile);
    setBannerPreviewUrl(imageUrl);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormValues) => ({
      ...prevFormValues,
      [name]: value
    }));
  };

  const handleSelectDate = (data: string) => {
    setSelectedDate(data);

    setFormData((prevFormValues) => ({
      ...prevFormValues,
      issued_date: new Date(data)
    }));
  }

  const handleClearDate = () => {
    setSelectedDate("");
  }

  const handleChangeHide = () => {

  }

  const handleCloseImage = () => {
    setFormData((prevFormValues) => ({
      ...prevFormValues,
      imageFile: undefined
    }));
    
    setImageName("");
    setImagePreviewUrl("");
    
    if (imageRef.current) {
      imageRef.current.value = '';
    }
  }

  const handleCloseBanner = () => {
    setFormData((prevFormValues) => ({
      ...prevFormValues,
      bannerFile: undefined
    }));

    setBannerName("");
    setBannerPreviewUrl("");
    
    if (bannerRef.current) {
      bannerRef.current.value = '';
    }
  }
  
  const handleEditorChange = (data: string) => {
    setFormData((prevFormValues) => ({
      ...prevFormValues,
      content: data
    }));
  }

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checkboxValue = e.target.value;

    if (e.target.checked) {
      setFormData((prevFormValues) => ({
        ...prevFormValues,
        with_sidebar: true
      }));

      setShowSidebar(true)
    } else {
      setFormData((prevFormValues) => ({
        ...prevFormValues,
        with_sidebar: false
      }));

      setShowSidebar(false)
    }
  };

  const handleAddExternalLinks = () =>{
    const newLink = {
      title: "",
      url: ""
    }

    setFormData((prevData) => ({
      ...prevData, 
      external_links: [...prevData.external_links, newLink]
    }))
  }

  const handleRemoveLink = (indexToRemove: number) => {
    setFormData((prevData) => ({
      ...prevData, 
      external_links: prevData.external_links.filter((_, index) => index !== indexToRemove)
    }))
  }

  const handleInputLinkChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevData) => {
      const updatedLinks = [...prevData.external_links];
      updatedLinks[index] = {
        ...updatedLinks[index],
        [name]: value
      }
  
      return {
        ...prevData,
        external_links: updatedLinks,
      };
    });
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    await createAdministrationArticle({ data: formData });

    router.push("/administration/articles");
  }

  return (
    <>
      <section className='pl-[335px] pt-[113px] min-h-[1074px]'>
        <div className="p-[50px] pr-0 max-w-[1200px]">
          <h2 className='text-dark font-[800] text-[25px] mb-5'>Add Article</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-6 w-[771px]">
              <input 
                type="text" 
                name="title"
                placeholder="Article Name" 
                className="h-[42px] w-full rounded-[20px] border border-portalText shadow-mainShadow"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-6 w-[771px]">
              <input 
                type="text" 
                name="sub_title"
                placeholder="Sub Title" 
                className="h-[42px] w-full rounded-[20px] border border-portalText shadow-mainShadow"
                value={formData.sub_title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex gap-x-2.5 mb-6 w-[771px]">
              <input 
                type="text" 
                name="author"
                placeholder="Author" 
                className="h-[42px] w-1/2 rounded-[20px] border border-portalText shadow-mainShadow"
                onChange={handleInputChange} 
                value={formData.author}
                required
              />
              <input 
                type="text" 
                name="company"
                placeholder="Company" 
                className="h-[42px] w-1/2 rounded-[20px] border border-portalText shadow-mainShadow"
                onChange={handleInputChange} 
                value={formData.company}
              />
              <div className="w-[550px] relative" ref={dateRef}>
                <input type="text" className="h-[42px] w-full rounded-[20px] absolute border border-portalText shadow-mainShadow text-left opacity-0" value={selectedDate} required onChange={handleChangeHide}/>
                <button type="button" className={`h-[42px] w-full rounded-[20px] border border-portalText shadow-mainShadow relative z-10 text-left px-5 ${selectedDate ? "text-dark" : "text-[#888]"}`} onClick={() => setShowDatePicker(!showDatePicker)}>
                  {selectedDate ? selectedDate : "Issue Date"}
                </button>
                {selectedDate && 
                  <div className="absolute top-[10px] right-[5px] z-20">
                    <button type="button" className="w-5 h-5 rounded-full text-tertiary border border-tertiary flex justify-center items-center" onClick={handleClearDate}>x</button>
                  </div>
                }
                {showDatePicker && (
                  <div className="border border-tertiary rounded-[10px] absolute top-[42px] left-0 w-full h-auto z-[29] bg-white">
                    <MyDatePicker handleSelectDate={handleSelectDate} selectedDate={formData.issued_date!}/>
                  </div>
                )}
              </div>
            </div>
            <div className="mb-6 w-[771px]">
              <div className="flex justify-start items-center gap-x-2.5 w-full">
                <input type="checkbox" className="custom-checkbox" id="side_bar" onChange={handleCheckboxChange} checked={showSidebar}/>
                <label htmlFor="side_bar" className="text-tertiary cursor-pointer">Show SideBar</label>
              </div>
            </div>
            {showSidebar && 
              <div className="mb-6 w-[771px]">
                <button type="button" className="w-[200px] h-[42px] bg-portalText rounded-[20px] shadow-mainShadow font-[600] mb-2.5" onClick={handleAddExternalLinks}>Add External Links</button>
                {formData.external_links.map((item,index) => (
                  <div className="mb-2.5" key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-dark">&nbsp;</p>
                      <button type="button" className='text-dark text-[17px]' onClick={() => handleRemoveLink(index)}><TfiClose /></button>
                    </div>
                    <div className="flex gap-x-5">
                      <input 
                        type="text" 
                        name="title"
                        placeholder="Link Title" 
                        className="h-[42px] w-full rounded-[20px] border border-portalText shadow-mainShadow mb-1"
                        value={item.title}
                        onChange={handleInputLinkChange(index)}
                        required
                      />
                      <input 
                        type="text" 
                        name="url"
                        placeholder="Link URL" 
                        className="h-[42px] w-full rounded-[20px] border border-portalText shadow-mainShadow"
                        value={item.url}
                        onChange={handleInputLinkChange(index)}
                        required
                      />
                    </div>
                  </div>
                ))}
              </div>
            }
            <hr className="w-[771px] border-portalText mb-6"/>
            <div className="mb-6 w-[771px]">
              <div className="flex relative w-3/4">
                <input 
                  type="text" 
                  name="image_name" 
                  placeholder="Add Image"
                  className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-full"
                  disabled
                  value={imageName || ""}
                />
                <div className="w-[166px] rounded-r-[20px] h-[42px] bg-portalText absolute right-0 flex justify-center items-center">
                  <span className="text-white">Browse Computer</span>
                  <input 
                    type="file" 
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    required
                    onChange={handleFileUpload}
                    ref={imageRef}
                  />
                </div>
              </div>
              {imagePreviewUrl && 
                <div className="w-[390px] h-[290px] mt-5 relative">
                  <button type="button" className="w-5 h-5 absolute top-2 right-2 rounded-full font-[600] text-white border border-white flex justify-center items-center z-[1]" onClick={handleCloseImage}>x</button>
                  <Image src={imagePreviewUrl} alt="" fill={true} className="object-cover"/>
                </div>
              }
            </div>
            <div className="mb-10 w-[771px]">
              <div className="flex relative w-3/4">
                <input 
                  type="text" 
                  name="banner_image" 
                  placeholder="Add Banner for Mobile"
                  className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-full"
                  disabled
                  value={bannerName || ""}
                />
                <div className="w-[166px] rounded-r-[20px] h-[42px] bg-portalText absolute right-0 flex justify-center items-center">
                  <span className="text-white">Browse Computer</span>
                  <input 
                    type="file" 
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    required
                    onChange={handleFileBannerUpload}
                    ref={bannerRef}
                  />
                </div>
              </div>
              {bannerPreviewUrl && 
                <div className="w-[400px] h-[215px] mt-5 relative">
                  <button type="button" className="w-5 h-5 absolute top-2 right-2 rounded-full font-[600] text-white border border-white flex justify-center items-center z-[1]" onClick={handleCloseBanner}>x</button>
                  <Image src={bannerPreviewUrl} alt="" fill={true} className="object-cover"/>
                </div>
              }
            </div>
            <div className="mb-6">
              <p className="text-[16px] text-portalText font-[600] mb-3">Write Article</p>
              <div className="h-full relative z-10">
                <Editor            
                  value={""}
                  onChange={(value) => handleEditorChange(value)}
                />
              </div>
            </div>
            <div className="flex justify-end gap-x-2.5 w-full">
              <Link href="/administration/articles">
                <button type="button" className="text-warning border border-warning rounded-[20px] text-[16px] shadow-mainShadow font-[600] w-[120px] h-[42px]">Cancel</button>
              </Link>
              <button type="submit" className="text-white bg-warning rounded-[20px] text-[16px] shadow-mainShadow font-[600] w-[120px] h-[42px]">Publish</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
