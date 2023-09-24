"use client"

import Link from "next/link";
import dynamic from "next/dynamic";

export default function Edit_Articles() {
  const Editor = dynamic(() => import("../../../../../components/Utils/Editor"), { ssr: false });
  
  return (
    <>
      <section className='pl-[335px] pt-[113px] min-h-[1074px]'>
        <div className="p-[50px] pr-0 max-w-[1200px]">
          <h2 className='text-dark font-[800] text-[25px] mb-5'>Edit Article</h2>
          <form>
            <div className="mb-6 w-[771px]">
              <input type="text" placeholder="Article Name" className="h-[42px] w-full rounded-[20px] border border-portalText shadow-mainShadow"/>
            </div>
            <div className="flex gap-x-2.5 mb-6 w-[771px]">
              <input type="text" placeholder="Author" className="h-[42px] w-1/2 rounded-[20px] border border-portalText shadow-mainShadow"/>
              <input type="text" placeholder="Issue Date" className="h-[42px] w-1/2 rounded-[20px] border border-portalText shadow-mainShadow"/>
            </div>
            <div className="mb-10 w-[771px]">
              <div className="flex relative w-1/2">
                <input 
                  type="text" 
                  name="postcode" 
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
              <p className="text-[16px] text-portalText font-[600] mb-3">Write Article</p>
              <div className="h-full relative z-10">
                <Editor            
                  value={"Foo"}
                  onChange={(v) => console.log(v)}
                />
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
        </div>
      </section>
    </>
  )
}
