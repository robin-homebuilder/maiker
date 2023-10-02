"use client"

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

import { useState, useMemo, useEffect, useRef } from "react";

import { AdministrationArticleProps } from "@/types";

import MyDatePicker from "../Utils/DatePicker";

import 'react-day-picker/dist/style.css';

interface PageProps {
  article: AdministrationArticleProps
}

export default function ArticleEditForm({ article } : PageProps) {
  const Editor = useMemo(() => dynamic(() => import("../../components/Utils/Editor"), { ssr: false }), []);

  const [ showDatePicker, setShowDatePicker ] = useState<boolean>(false);
  const [ selectedDate, setSelectedDate ] = useState<string>("");
  const dateRef = useRef<HTMLDivElement | null>(null);

  const [ uploadedImageFiles, setUploadedImageFiles ] = useState<File | null>();
  const [ imagePreviewUrl, setImagePreviewUrl ] = useState<string | null>(null);
  const [ imageName, setImageName ] = useState<string | null>(null);

  const [ uploadedBannerFiles, setUploadedBannerFiles ] = useState<File | null>();
  const [ bannerPreviewUrl, setBannerPreviewUrl ] = useState<string | null>(null);
  const [ bannerName, setBannerName ] = useState<string | null>(null);

  const [ formData, setFormData ] = useState<AdministrationArticleProps>({
    title: article.title,
    sub_title: article.sub_title,
    author: article.author,
    content: article.content,
    createdAt: article.createdAt,
    company: article.company
  })

  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormValues) => ({
      ...prevFormValues,
      [name]: value
    }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) {
      return;
    }

    setUploadedImageFiles(selectedFile);
    setImageName(selectedFile.name);

    const imageUrl = URL.createObjectURL(selectedFile);
    setImagePreviewUrl(imageUrl);
  };
  
  const handleFileBannerUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) {
      return;
    }

    setUploadedBannerFiles(selectedFile);
    setBannerName(selectedFile.name);

    const imageUrl = URL.createObjectURL(selectedFile);
    setBannerPreviewUrl(imageUrl);
  };

  const handleSelectDate = (data: string) => {
    setSelectedDate(data);
    setShowDatePicker(false);
  }

  const handleClearDate = () => {
    setSelectedDate("");
  }
  
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(uploadedImageFiles)
  }

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

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="mb-6 w-[771px]">
          <input 
            type="text" 
            name="title"
            placeholder="Article Name" 
            className="h-[42px] w-full rounded-[20px] border border-portalText shadow-mainShadow"
            onChange={handleInputChange} 
            value={formData.title}
          />
        </div>
        <div className="mb-6 w-[771px]">
          <input 
            type="text" 
            name="sub_title"
            placeholder="Sub Title" 
            className="h-[42px] w-full rounded-[20px] border border-portalText shadow-mainShadow"
            onChange={handleInputChange} 
            value={formData.sub_title}
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
          />
          <input 
            type="text" 
            name="author"
            placeholder="Company" 
            className="h-[42px] w-1/2 rounded-[20px] border border-portalText shadow-mainShadow"
            onChange={handleInputChange} 
            value={formData.company}
          />
          <div className="w-[550px] relative" ref={dateRef}>
            <button type="button" className={`h-[42px] w-full rounded-[20px] border border-portalText shadow-mainShadow z-10 text-left px-5 ${selectedDate ? "text-dark" : "text-[#888]"}`} onClick={() => setShowDatePicker(!showDatePicker)}>
              {selectedDate ? selectedDate : "Issue Date"}
            </button>
            {selectedDate && 
              <div className="absolute top-[10px] right-[5px]">
                <button type="button" className="w-5 h-5 rounded-full text-tertiary border border-tertiary flex justify-center items-center" onClick={handleClearDate}>x</button>
              </div>
            }
            {showDatePicker && (
              <div className="border border-tertiary rounded-[10px] absolute top-[42px] left-0 w-full h-auto z-40 bg-white">
                <MyDatePicker handleSelectDate={handleSelectDate}/>
              </div>
            )}
          </div>
        </div>
        <div className="mb-6 w-[771px]">
          <div className="flex relative w-3/4">
            <input 
              type="text" 
              name="postcosde" 
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
                onChange={handleFileUpload}
              />
            </div>
          </div>
          {imagePreviewUrl && 
            <div className="w-[390px] h-[290px] mt-5 relative">
              <Image src={imagePreviewUrl} alt="" fill={true} className="object-cover"/>
            </div>
          }
        </div>
        <div className="mb-10 w-[771px]">
          <div className="flex relative w-3/4">
            <input 
              type="text" 
              name="postcosde" 
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
                onChange={handleFileBannerUpload}
              />
            </div>
          </div>
          {bannerPreviewUrl && 
            <div className="w-[400px] h-[215px] mt-5 relative">
              <Image src={bannerPreviewUrl} alt="" fill={true} className="object-cover"/>
            </div>
          }
        </div>
        <div className="mb-6">
          <p className="text-[16px] text-portalText font-[600]">Write Article</p>
          <div className="h-full relative z-10">=
            <Editor value={formData.content} onChange={(v) => console.log(v)} />
          </div>
        </div>
        <div className="flex justify-end gap-x-2.5 w-full">
          <button type="button" className="text-danger border border-danger rounded-[20px] text-[16px] shadow-mainShadow font-[600] w-[120px] h-[42px]">Delete</button>
          <Link href="/administration/articles">
            <button type="button" className="text-warning border border-warning rounded-[20px] text-[16px] shadow-mainShadow font-[600] w-[120px] h-[42px]">Cancel</button>
          </Link>
          <button type="submit" className="text-white bg-warning rounded-[20px] text-[16px] shadow-mainShadow font-[600] w-[120px] h-[42px]">Publish</button>
        </div>
      </form>
    </>
  )
}
