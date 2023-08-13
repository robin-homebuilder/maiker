import Link from "next/link";
import Image from "next/image";

import { FaPhone, FaEnvelope, FaChevronRight } from "react-icons/fa"

import { NavigationLinks, NavigationLinksSecond } from "@/libs/navigationLinks";
import { SocialMediaLinks } from "@/libs/socialMediaLinks";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" id="footer">
      <Image src={`${process.env.APP_S3_BUCKET}/assets/Home-Renovations.png`} width={4000} height={2000} priority={true} alt="Maiker House Project Footer Logo" className="mb-5 absolute top-[-200px]"/>
      <div className="h-[482px] w-full py-[100px] z-10 relative bg-[#00000080]">
        <div className="max-w-[1250px] mx-auto items-center h-[42px]">
          <div className="flex gap-x-10">
            <div className="w-4/12">
              <h1 className="font-[800] mb-10">Request a Call Back</h1>
              <p className="text-center leading-[1.5rem]">Lets start the process! Reach out for a call back to discuss your project and visit your site or home.</p>
            </div>
            <div className="w-8/12">
              <form className="w-full flex flex-col gap-y-[30px]">
                <input type="text" placeholder="Name" className="w-full h-[45px] rounded-[20px]"/>
                <input type="text" placeholder="Email" className="w-full h-[45px] rounded-[20px]"/>
                <input type="text" placeholder="Phone" className="w-full h-[45px] rounded-[20px]"/>
                <div className="flex justify-center">
                  <button type="submit" className="text-dark bg-white rounded-[20px] w-[200px] flex items-center justify-center font-[600] h-[45px]">
                    Request Call Back <FaChevronRight />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[325px] w-full bg-secondary py-[50px] z-10 relative">
        <div className="max-w-[1250px] mx-auto items-center h-[42px]">
          <div className="w-full flex justify-between items-center">
            <div className="flex gap-x-[100px]">
              {NavigationLinks.map((item, index) => (
                <Link href={item.link} key={index} className="text-white font-[400] text-[17px]">
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex gap-x-2.5">
              {NavigationLinksSecond.map((item, index) => (
                <Link href={item.link} key={index}>
                  <button type="button" className="bg-white text-secondary px-5 font-[600] rounded-[20px] h-[42px] flex items-center gap-x-2 shadow-mainShadow">
                    {item.name} <FaChevronRight />
                  </button>
                </Link>
              ))}
            </div>
          </div>
          <hr className="my-7"/>
          <div className="w-full flex justify-between">
            <div className="w-[246px]">
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
            <div className="w-[246px]">
              <h3 className="font-[700] text-[18px]">Contact</h3>
              <div className="mt-5">
                <div className="flex gap-x-1 items-center mb-4"> 
                  <span className="w-[25px] h-[25px] bg-white rounded-full flex justify-center items-center">
                    <FaPhone color="#205375" size="12" style={{ transform: 'scaleX(-1)' }} />
                  </span>
                  <p>0404 481 771</p>
                </div>
                <div className="flex gap-x-1 items-center"> 
                  <span className="w-[25px] h-[25px] bg-white rounded-full flex justify-center items-center">
                    <FaEnvelope color="#205375" size="12"/>
                  </span>
                  <p>admin@maiker.com.au</p>
                </div>
              </div>
            </div>
            <div className="w-[333px]">
              <h3 className="font-[700] text-[18px]">Business</h3>
              <div className="mt-5">
                <p className="mb-5">Avecco Pty Ltd t/a Maiker Constructions</p>
                <p>ABN:36 123 456 789 QBCC: 123456</p>
              </div>
            </div>
            <div className="w-[246px] flex justify-end">
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