import Link from "next/link";
import Image from "next/image";

import { FaChevronRight } from "react-icons/fa";

import { getArticles } from "@/services/articleServices";

const ArticlesList = [
  {
    title: "How to build a home.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Ut enim ad minim veniam, quis nostrud exercitation.Ut enim ad minim veniam, quis nostrud exercitation.",
    image: "/Contemporary-Queenslanders.svg"
  },
  {
    title: "How to build a home.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    image: "/Contemporary-Queenslanders.svg"
  },
  {
    title: "How to build a home.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    image: "/Contemporary-Queenslanders.svg"
  }
]

export default async function Articles() {
  const articles = await getArticles();
  
  return (
    <>
      <section className='bg-accent pt-[80px] pb-10'>
        <div className='max-w-[1250px] mx-auto'>
          <h1 className='text-primary font-[800] text-center'>Articles and Inspiration</h1>
        </div>
      </section>
      <section className="max-w-[1250px] mx-auto py-[60px]">
        <div className="flex flex-wrap gap-10 px-5 sm:px-0">
          {articles.map((item, index) => (
            <div className="w-full sm:w-[390px] h-[580px] border border-primary rounded-[20px] overflow-hidden shadow-secondShadow" key={index}>
              <div className="w-full h-[290px] relative">
                <Image src={`${process.env.APP_S3_BUCKET}/${item.image}`} fill={true} alt="How to build a home" className="object-cover"/>
              </div>
              <div className="px-[30px] py-5 h-[290px] relative">
                <h2 className="text-tertiary text-[24px] font-[800] line-clamp-3 text-center mb-4">{item.title}</h2>
                <p className="text-dark text-[16px] text-center line-clamp-3 mb-2 h-[75px]">{item.sub_title}</p>
                <div className="flex justify-center absolute left-0 bottom-5 w-full">
                  <Link href={`/articles/${item.slug}`}>
                    <button type="button" className="bg-warning h-10 rounded-[20px] px-[15px] flex items-center justify-center font-[500] text-[15px] w-[180px] shadow-mainShadow">View Article&nbsp;&nbsp;&nbsp;&nbsp;<FaChevronRight/></button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
