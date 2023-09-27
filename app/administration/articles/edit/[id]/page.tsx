import { getAdministrationArticleByID } from "@/services/administration/articleServices";
import ArticleEditForm from "@/components/Administration/ArticleEditForm";

export default async function Edit_Articles({ params }: { params: { id: string }}) {
  const { id } = params;

  const article = await getAdministrationArticleByID(id);
  
  return (
    <>
      <section className='pl-[335px] pt-[113px] min-h-[1074px]'>
        <div className="p-[50px] pr-0 max-w-[1200px]">
          <h2 className='text-dark font-[800] text-[25px] mb-5'>Edit Article</h2>
          <ArticleEditForm article={article} />
        </div>
      </section>
    </>
  )
}
