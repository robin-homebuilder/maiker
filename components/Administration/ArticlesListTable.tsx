"use client"

import Link from "next/link";

import { useState } from "react";

import { AdministrationArticlesProps } from "@/types";

import { convertDate } from "@/libs/convertDate";

import { getAdministrationArticlesSearch } from "@/services/administration/articleServices";

interface PageProps {
  articles: AdministrationArticlesProps[]
}

export default function ArticlesListTable({ articles } : PageProps) {
  const [ articleList, setArticleList ] = useState<AdministrationArticlesProps[]>(articles);
  
  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const searchArticles = await getAdministrationArticlesSearch(value);

    setArticleList(searchArticles);
  }

  return (
    <>
      <div className="mb-6">
        <p className="text-[16px] text-portalText font-[600] mb-3">Search For Article</p>
        <input type="text" placeholder="Article Name" className="h-[42px] w-[771px] rounded-[20px] border border-portalText shadow-mainShadow" onChange={handleSearch}/>
      </div>
      <div className="mb-6">
        <p className="text-[16px] text-portalText font-[600] mb-3">Add New Articles</p>
        <a href="/administration/articles/add">
          <button type="button" className="w-[200px] h-[42px] bg-portalBG rounded-[20px] shadow-mainShadow text-[16px] font-[600]">Add Article</button>
        </a>
      </div>
      <div className="mb-6">
        <p className="text-[16px] text-portalText font-[600] mb-3">Article List</p>
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
            {articleList.map((article,index) => (
              <tr key={index}>
                <td className="py-2">{article.title}</td>
                <td className="py-2">{article.author}</td>
                <td className="py-2">{convertDate(article.issued_date)}</td>
                <td className="py-2 text-center">
                  <a href={`articles/edit/${article._id}`}>
                    <button type="button" className="bg-warning w-[120px] h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow">Edit</button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
