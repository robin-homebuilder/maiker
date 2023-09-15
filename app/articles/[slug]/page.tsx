import Link from "next/link";
import Image from "next/image";

import { FaFacebookF, FaEnvelope, FaFacebookMessenger, FaChevronRight} from 'react-icons/fa';

import { convertDate } from "@/libs/convertDate";
import { getArticleBySlug } from "@/services/articleServices";

import parse from 'html-react-parser';

import ScrollButtonHome from "@/components/Utils/ScrollButtonHome";

export default async function Article({ params }: { params: { slug: string }}) {
  const { slug } = params;
  
  const response = await getArticleBySlug({ slug: slug});
  
  const articleData = response.articleData;
  const otherLinks = response.otherLinks;
  
  return (
    <>
      <section className="max-w-[1250px] mx-auto py-[60px]">
        {articleData.banner &&
          <Image src={`${process.env.APP_S3_BUCKET}/${articleData.banner}`} width={900} height={300} alt={articleData.title} className="object-cover block sm:hidden h-[215px]"/>
        }
        <div className="gap-10 px-5 sm:px-0 mb-5 sm:mb-0 pt-5 sm:pt-0">
          <h1 className="text-[25px] sm:text-[38px] text-primary font-[800]">{articleData.title}</h1>
          <p className="text-[#686868] text-[18px] sm:text-[20px] mb-2">{articleData.sub_title}</p>
          <p className="text-warning text-[15px] sm:text-[16px] italic">{articleData.author} - {convertDate(articleData.createdAt)}</p>
        </div>
        <hr className="border-tertiary mt-2.5 pb-5 hidden sm:block"/>
        <div className="flex flex-wrap sm:flex-nowrap gap-x-5 flex-col-reverse sm:flex-row">
          <div className={`${articleData.with_sidebar ? "w-full sm:w-[74%]" : "w-full"} text-dark content`}>
            {parse(articleData.content)}
          </div>
          {articleData.with_sidebar &&
            <div className="w-full sm:w-[26%] border-l border-[#E3E3E3] self-start pl-5 pr-5 sm:pr-0">
              <div className="mb-4 sm:mb-10">
                <p className="text-tertiary font-[600] text-[18px]">Share Article</p>
                <hr className="border-tertiary py-0 mt-1 mb-2"/>
                <div className="flex gap-x-2.5">
                  <Link href={""} target="_blank" aria-label="fb">
                    <span className="w-[42px] h-[42px] bg-tertiary rounded-full flex justify-center items-center">
                      <FaFacebookF color="#ffffff" size="20"/>
                    </span>
                  </Link>
                  <Link href={""} target="_blank" aria-label="fb">
                    <span className="w-[42px] h-[42px] bg-tertiary rounded-full flex justify-center items-center">
                      <FaFacebookMessenger color="#ffffff" size="20"/>
                    </span>
                  </Link>
                  <Link href={""} target="_blank" aria-label="fb">
                    <span className="w-[42px] h-[42px] bg-tertiary rounded-full flex justify-center items-center">
                      <FaEnvelope color="#ffffff" size="20"/>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="mb-4 sm:mb-10">
                <p className="text-tertiary font-[600] text-[18px]">Article Links</p>
                <hr className="border-tertiary py-0 my-1"/>
                {otherLinks.length > 0 &&
                  otherLinks.map((item, index) => (
                    <Link href={`/articles/${item.slug}`} className="text-tertiary text-[16px] font-[500] mb-2.5 block">
                      {item.title}
                    </Link>
                  ))
                }
              </div>
              <div className="mb-4 sm:mb-10">
                <p className="text-tertiary font-[600] text-[18px]">External Links</p>
                <hr className="border-tertiary py-0 my-1"/>
                {articleData.external_links.length > 0 &&
                  articleData.external_links.map((item, index) => (
                    <a href={item.url} target="_blank" className="text-tertiary text-[16px] font-[500] mb-2.5 block">
                      {item.title}
                    </a>
                  ))
                }
                <hr className="border-tertiary py-0 my-1 block sm:hidden"/>
              </div>
              <div className="w-full h-[238px] relative hidden sm:block">
                <Image src="/Article-CallBack.webp" alt="Article Callback" width={300} height={239} className="absolute top-0 left-0 object-cover"/>
                <div className="absolute top-0 left-0 w-full h-full bg-[#00000080]"></div>
                <div className="flex flex-wrap justify-center items-center px-3 z-10 mt-5 pt-5 relative">
                  <p className="text-white text-[18px] font-[800] text-center mb-5">Request a Call Back</p>
                  <p className="text-white text-[16px] text-center mb-5">Lets start the process! Reach out for a call back to discuss your project and visit your site or home.</p>
                  <ScrollButtonHome targetSectionId="footer"/>
                </div>
              </div>
            </div>
          }
        </div>
      </section>
    </>
  )
}
