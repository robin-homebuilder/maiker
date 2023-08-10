"use client"

import Image from "next/image";
import Link from "next/link"

import { useEffect, useState } from 'react';

import { FaPhone, FaEnvelope, FaInstagram, FaFacebookF, FaPinterest, FaLinkedinIn, FaYoutube, FaRegUser, FaChevronRight } from "react-icons/fa"

import { NavigationLinks, NavigationLinksSecond } from "@/libs/navigationLinks";
import { SocialMediaLinks } from "@/libs/socialMediaLinks";

interface PageProps {
  page: string,
}

export default function Navbar( { page } : PageProps ) {
  const [ scrolledPastSection, setScrolledPastSection ] = useState(false);

  const handleScroll = () => {
    const sectionHeight = 800;
    if (window.scrollY > sectionHeight) {
      setScrolledPastSection(true);
    } else {
      setScrolledPastSection(false);
    }
  };

  useEffect(() => {
    handleScroll(); 

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <>
      <div className={`hidden sm:block top-0 z-20 ${(page == "home" && !scrolledPastSection) ? "bg-transparent fixed w-full" : "sticky bg-white shadow-mainShadow"}`}>
        <div className={`${(page == "home" && !scrolledPastSection) ? "bg-[#00000066]" : "bg-primary"} top-0 z-10 h-[35px]`}>
          <div className="max-w-[1250px] mx-auto flex justify-between items-center h-full">
            <div className="flex gap-x-5">
              <div className="flex gap-x-1 items-center"> 
                <span className="w-[25px] h-[25px] bg-white rounded-full flex justify-center items-center">
                  <FaPhone color={`${(page == "home" && !scrolledPastSection) ? "#000000" : "#205375"}`} size="12" style={{ transform: 'scaleX(-1)' }} />
                </span>
                <p>0404 481 771</p>
              </div>
              <div className="flex gap-x-1 items-center"> 
                <span className="w-[25px] h-[25px] bg-white rounded-full flex justify-center items-center">
                  <FaEnvelope color={`${(page == "home" && !scrolledPastSection) ? "#000000" : "#205375"}`} size="12"/>
                </span>
                <p>admin@maiker.com.au</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-x-4 h-full">
              <div className="flex flex-row justify-center align-middle gap-x-2 text-white">
                {SocialMediaLinks.map((item, index) => (
                  <Link href={item.link} target="_blank" key={index}>
                    <span className="w-[25px] h-[25px] bg-white rounded-full flex justify-center items-center">
                      {<item.icon color={`${(page == "home" && !scrolledPastSection) ? "#000000" : "#205375"}`} size="13"/>}
                    </span>
                  </Link>
                ))}
              </div>
              <div className={`${(page == "home" && !scrolledPastSection) ? "bg-[#000000b3]" : "bg-tertiary"} h-full`}>
                <Link href="/auth/login">
                  <button type="button" className="flex gap-x-1 px-2 items-center h-full">
                    <FaRegUser size="13"/>
                    <p className="text-[14px]">Login</p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1250px] mx-auto flex justify-between items-center h-[80px]">
          <div className="flex items-center">
            <Link href="/">
            <div className="w-[128px] h-[63px] relative">
              {(page == "home" && !scrolledPastSection) ?
                <Image src="/Maiker-Construction-Logo-White.svg" fill={true} alt="Maiker Construction Logo"/>
              :
                <Image src="/Maiker-Construction-Logo-Blue.svg" fill={true} alt="Maiker Construction Logo"/>
              }
            </div>
            </Link>
          </div>
          <nav className="flex gap-x-10 items-center">
            <div className="flex gap-x-10">
              {NavigationLinks.map((item, index) => (
                <Link href={item.link} key={index} className={`${(page == "home" && !scrolledPastSection) ? "text-white" : "text-dark"} font-[500]`}>
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex gap-x-2.5">
              {NavigationLinksSecond.map((item, index) => (
                <Link href={item.link} key={index}>
                  <button type="button" className={`${(page == "home" && !scrolledPastSection) ? "bg-white text-dark" : " bg-tertiary shadow-mainShadow"} px-5 rounded-[20px] h-8 flex items-center font-[600] gap-x-2`}>
                    {item.name} <FaChevronRight />
                  </button>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}