import Link from "next/link";
import Image from "next/image";

import { FaPhone, FaEnvelope, FaChevronRight } from "react-icons/fa"

import { NavigationLinks, NavigationLinksSecond } from "@/libs/navigationLinks";
import { SocialMediaLinks } from "@/libs/socialMediaLinks";

import RequstCallBackForm from "./RequstCallBackForm";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" id="footer">
      <div className="h-full sm:h-[482px] w-full relative">
        <div className="absolute h-full">
          <span className="bg-[#00000080] absolute w-full h-full" />
          <Image src={`${process.env.APP_S3_BUCKET}/assets/Home-Renovations.png`} width={4000} height={2000} priority={true} alt="Maiker House Project Footer Logo" className="object-cover h-full"/>
        </div>
        <div className="max-w-[1250px] mx-auto items-center py-[30px] sm:py-[100px] relative z-10">
          <div className="flex flex-wrap sm:flex-nowrap gap-x-[30px] px-5 sm:px-0">
            <div className="w-full sm:w-4/12 mb-[30px] sm:mb-0">
              <h1 className="font-[800] mb-10 text-[38px] text-center">Request a Call Back</h1>
              <p className="text-center leading-[31px] sm:leading-[1.5rem] text-[16px]">Lets start the process! Reach out for a call back to discuss your project and visit your site or home.</p>
            </div>
            <div className="w-full sm:w-8/12">
              <RequstCallBackForm />
            </div>
          </div>
        </div>
      </div>
      <div className="h-full sm:h-[325px] w-full bg-secondary py-5 sm:py-[50px] z-10 relative px-5 sm:px-0">
        <div className="max-w-[1250px] mx-auto items-center">
          <div className="w-full flex flex-wrap sm:flex-nowrap justify-between items-center">
            <div className="flex gap-x-0 sm:gap-x-[100px] justify-between sm:justify-start w-full sm:w-auto mb-4 sm:mb-0">
              {NavigationLinks.map((item, index) => (
                <Link href={item.link} key={index} className="text-white font-[400] text-[17px]">
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex gap-x-2.5 w-full sm:w-auto justify-between">
              {NavigationLinksSecond.map((item, index) => (
                <Link href={item.link} key={index}>
                  <button type="button" className="bg-white text-secondary px-5 font-[600] rounded-[20px] h-[42px] flex items-center gap-x-0 sm:gap-x-2 shadow-mainShadow">
                    {item.name} <FaChevronRight />
                  </button>
                </Link>
              ))}
            </div>
          </div>
          <hr className="my-4 sm:my-7"/>
          <div className="w-full flex flex-wrap sm:flex-nowrap justify-between">
            <div className="w-full sm:w-[246px] mb-8 sm:mb-0">
              <div className="w-[128px] h-[63px] relative mb-5">
                <Image src="/Maiker-Construction-Logo-White.svg" fill={true} alt="Maiker Construction Logo"/>
              </div>
              <div className="flex flex-row justify-start align-middle gap-x-2 text-white">
                {SocialMediaLinks.map((item, index) => (
                  <Link href={item.link} target="_blank" key={index}>
                    <span className="w-[25px] h-[25px] bg-white rounded-full flex justify-center items-center">
                      {<item.icon color="#205375" size="13"/>}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-full sm:w-[246px] mb-8 sm:mb-0">
              <h3 className="font-[700] text-[18px]">Contact</h3>
              <div className="mt-5">
                <div className="flex gap-x-1 items-center mb-4"> 
                  <span className="w-[25px] h-[25px] bg-white rounded-full flex justify-center items-center">
                    <FaPhone color="#205375" size="12" style={{ transform: 'scaleX(-1)' }} />
                  </span>
                  <p>(07)3705 1421</p>
                </div>
                <div className="flex gap-x-1 items-center"> 
                  <span className="w-[25px] h-[25px] bg-white rounded-full flex justify-center items-center">
                    <FaEnvelope color="#205375" size="12"/>
                  </span>
                  <a href="mailto:admin@maiker.com.au">
                    <p>admin@maiker.com.au</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-[333px] mb-5 sm:mb-0">
              <h3 className="font-[700] text-[18px]">Business</h3>
              <div className="mt-5">
                <p className="mb-5">Avecco Pty Ltd t/a Maiker Constructions</p>
                <p>ABN:36 123 456 789 QBCC: 123456</p>
              </div>
            </div>
            <div className="w-[246px] flex justify-start sm:justify-end">
              <div className="w-[150px] h-[94px] relative">
                <Image src="/MBA_ProudMember.svg" width={240} height={94} alt="Master Builders Queensland - Proud Member"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}