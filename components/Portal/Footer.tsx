import Link from "next/link";
import Image from "next/image";

import { FaPhone, FaEnvelope, FaChevronRight } from "react-icons/fa"

import { NavigationLinks, NavigationLinksSecond } from "@/libs/navigationLinks";
import { SocialMediaLinks } from "@/libs/socialMediaLinks";

export default function PortalFooter() {
  return (
    <footer className="relative pl-[335px] overflow-hidden" id="footer">
      <div className="h-full sm:h-[325px] w-full bg-secondary py-5 sm:py-[50px] z-10 relative px-5 sm:px-0">
        <div className="max-w-[1250px] mx-auto items-center">
          <div className="w-full flex flex-wrap sm:flex-nowrap justify-between items-center">
            <div className="flex flex-wrap sm:flex-nowrap gap-x-5 sm:gap-x-[70px] gap-y-2.5 sm:gap-y-0 justify-between sm:justify-start w-full sm:w-auto mb-4 sm:mb-0">
              {NavigationLinks.map((item, index) => (
                <Link href={item.link} key={index} className={`text-white font-[400] text-[17px] ${item.name == "Services" && "hidden"}`}>
                  {item.name}
                </Link>
              ))}
              <Link href="/privacy-policy" className="text-white font-[400] text-[17px]">
                Privacy Policy
              </Link>
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
                  <Link href={item.link} target="_blank" key={index} aria-label={item.name}>
                    <span className="w-[25px] h-[25px] bg-white rounded-full flex justify-center items-center">
                      {<item.icon color="#205375" size="13"/>}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-full sm:w-[246px] mb-8 sm:mb-0">
              <p className="font-[700] text-[18px]">Contact</p>
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
              <p className="font-[700] text-[18px]">Business</p>
              <div className="mt-5">
                <p className="mb-5">Avecco Pty Ltd t/a Maiker Constructions</p>
                <p>ABN:36 123 456 789 QBCC: <a href="https://www.onlineservices.qbcc.qld.gov.au/OnlineLicenceSearch/VisualElements/ShowDetailResultContent.aspx?LicNO=&licCat=LIC&name=avecco&firstName=&searchType=Contractor&FromPage=SearchContr" target="_blank">1263544</a></p>
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