import Link from "next/link";

import { AdministrationArticlesProps } from "@/types";

import { convertDate } from "@/libs/convertDate";

interface PageProps {
  articles: AdministrationArticlesProps[]
}

export default function ArticlesListTable({ articles } : PageProps) {
  
  return (
    <>
      <table className="w-full">
        <thead className="bg-[#F8F7F7] text-left text-[#7D7D7D] font-[600] border-b border-[#7D7D7D]">
          <tr>
            <th className="py-2 pl-5 w-6/12">Article</th>
            <th className="py-2 w-3/12">Author</th>
            <th className="py-2 w-2/12">Date</th>
            <th className="py-2 w-1/12 text-center">Edit</th>
          </tr>
        </thead>
        <tbody className="text-portalText py-2">
          {articles.map((article,index) => (
            <tr key={index}>
              <td className="py-2">{article.title}</td>
              <td className="py-2">{article.author}</td>
              <td className="py-2">{convertDate(article.createdAt)}</td>
              <td className="py-2 text-center">
                <Link href={`/administration/articles/edit/${article._id}`}>
                  <button type="button" className="bg-warning w-[120px] h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow">Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
