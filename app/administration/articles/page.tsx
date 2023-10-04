import { getAdministrationArticles } from "@/services/administration/articleServices";

import ArticlesListTable from "@/components/Administration/ArticlesListTable";

export default async function AdministrationArticles() {
  const articles = await getAdministrationArticles();
  
  return (
    <>
      <section className='pl-[335px] pt-[113px] min-h-[1074px]'>
        <div className="p-[50px] pr-0 max-w-[1200px]">
          <h2 className='text-dark font-[800] text-[25px] mb-5'>Articles</h2>
          <ArticlesListTable articles={articles}/>
        </div>
      </section>
    </>
  )
}
