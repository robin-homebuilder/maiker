import Link from "next/link";

import { getAdministrationArticles } from "@/services/administration/articleServices";

import ArticlesListTable from "@/components/Administration/ArticlesListTable";

export default async function AdministrationArticles() {
  
  const articles = await getAdministrationArticles();
  
  return (
    <>
      <section className='pl-[335px] pt-[113px] min-h-[1074px]'>
        <div className="p-[50px] pr-0 max-w-[1200px]">
          <h2 className='text-dark font-[800] text-[25px] mb-5'>Articles</h2>
          <div className="mb-6">
            <p className="text-[16px] text-portalText font-[600] mb-3">Search For Article</p>
            <input type="text" placeholder="Article Name" className="h-[42px] w-[771px] rounded-[20px] border border-portalText shadow-mainShadow"/>
          </div>
          <div className="mb-6">
            <p className="text-[16px] text-portalText font-[600] mb-3">Add New Articles</p>
            <Link href="/administration/articles/add">
              <button type="button" className="w-[200px] h-[42px] bg-portalBG rounded-[20px] shadow-mainShadow text-[16px] font-[600]">Add Article</button>
            </Link>
          </div>
          <div className="mb-6">
            <p className="text-[16px] text-portalText font-[600] mb-3">Article List</p>
            {/* <ArticlesListTable articles={articles}/> */}
          </div>
        </div>
      </section>
    </>
  )
}
