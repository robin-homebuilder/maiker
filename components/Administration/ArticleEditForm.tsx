"use client"

import Link from "next/link";
import dynamic from "next/dynamic";

import { useState, useMemo } from "react";

import { AdministrationArticleProps } from "@/types";

interface PageProps {
  article: AdministrationArticleProps
}

export default function ArticleEditForm({ article } : PageProps) {
  const [ formData, setFormData ] = useState<AdministrationArticleProps>({
    title: article.title,
    sub_title: article.sub_title,
    author: article.author,
    content: article.content,
    createdAt: article.createdAt,
    company: article.company
  })

  const Editor = useMemo(() => dynamic(() => import("../../components/Utils/Editor"), { ssr: false }), []);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormValues) => ({
      ...prevFormValues,
      [name]: value
    }));
  };
  
  return (
    <>
      <form>
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
          <input type="text" placeholder="Issue Date" className="h-[42px] w-1/2 rounded-[20px] border border-portalText shadow-mainShadow"/>
        </div>
        <div className="mb-10 w-[771px]">
          <div className="flex relative w-1/2">
            <input 
              type="text" 
              name="postcosde" 
              placeholder="Add Image"
              className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-full"
              disabled
              required
            />
            <div className="w-[166px] rounded-r-[20px] h-[42px] bg-portalText absolute right-0 flex justify-center items-center">
              <span className="text-white">Browse Computer</span>
              <input type="file" className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"/>
            </div>
          </div>
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
