"use client"

import Image from "next/image";
import Link from "next/link"

import { useEffect, useState } from 'react';

import { FaPhone, FaEnvelope, FaRegUser, FaChevronRight, FaBars } from "react-icons/fa"
import { CgClose } from "react-icons/cg";

import { NavigationLinks, NavigationLinksSecond } from "@/libs/navigationLinks";
import { SocialMediaLinks } from "@/libs/socialMediaLinks";

interface PageProps {
  page: string,
}

export default function Navbar( { page } : PageProps ) {
  const [ scrolledPastSection, setScrolledPastSection ] = useState(false);
  const [ showHamburger, setShowHamburger ] = useState(false);

  const handleScroll = () => {
    const sectionHeight = 10;
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

  const showHamburgerMenu = () => {
    document.body.classList.add("overflow-hidden");
    setShowHamburger(true);
  }

  const hideHamburgerMenu = () => {
    document.body.classList.remove("overflow-hidden");
    setShowHamburger(false);
  }

  const removeOverflow = () => {
    document.body.classList.remove("overflow-hidden");
  }
  
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
                <p>(07)3705 1421</p>
              </div>
              <div className="flex gap-x-1 items-center"> 
                <span className="w-[25px] h-[25px] bg-white rounded-full flex justify-center items-center">
                  <FaEnvelope color={`${(page == "home" && !scrolledPastSection) ? "#000000" : "#205375"}`} size="12"/>
                </span>
                <a href="mailto:admin@maiker.com.au">
                  <p>admin@maiker.com.au</p>
                </a>
              </div>
            </div>
            <div className="flex flex-row items-center gap-x-4 h-full">
              <div className="flex flex-row justify-center align-middle gap-x-2 text-white">
                {SocialMediaLinks.map((item, index) => (
                  <Link href={item.link} target="_blank" key={index} aria-label={item.name}>
                    <span className="w-[25px] h-[25px] bg-white rounded-full flex justify-center items-center">
                      {<item.icon color={`${(page == "home" && !scrolledPastSection) ? "#000000" : "#205375"}`} size="13"/>}
                    </span>
                  </Link>
                ))}
              </div>
              <div className={`${(page == "home" && !scrolledPastSection) ? "bg-[#000000b3]" : "bg-fore"} h-full`}>
                <Link href="/auth/login">
                  <button type="button" name="login" className="flex gap-x-1 px-2 items-center h-full">
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
                  <button type="button" name={item.name} className={`${(page == "home" && !scrolledPastSection) ? "bg-white text-dark" : " bg-fore shadow-mainShadow"} px-5 rounded-[20px] h-[42px] flex items-center font-[600] gap-x-2`}>
                    {item.name} <FaChevronRight />
                  </button>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
      <div className={`block sm:hidden w-full fixed z-50 ${(page == "home" && !scrolledPastSection) ? "bg-[#00000080]" : "bg-white shadow-mainShadow"} h-[60px]`}>
        <div className="flex justify-between px-5">
          <Link href="/">
            <div className="w-[94px] h-[60px] relative">
              {(page == "home" && !scrolledPastSection) ?
                <Image src="/Maiker-Construction-Logo-White.svg" fill={true} alt="Maiker Construction Logo"/>
              :
                <Image src="/Maiker-Construction-Logo-Blue.svg" fill={true} alt="Maiker Construction Logo"/>
              }
            </div>
          </Link>
          <div className="flex justify-center items-center w-[30px] h-auto">
            <button type="button" aria-label="hamburgerMenu" onClick={showHamburgerMenu} className={`w-full h-fit flex justify-center items-center ${(page == "home" && !scrolledPastSection) ? "text-white" : "text-primary"}`}>
              <FaBars size={25}/>
            </button>
          </div>
        </div>
      </div>
      <div className={`fixed top-0 right-0 h-full z-50 bg-tertiary ${showHamburger ? 'w-full' : 'w-0'} transition-all duration-300 ease-in-out overflow-x-hidden`}>
        <div className="p-5 w-full">
          <button type="button" aria-label="close" className="text-white text-[32px] mb-[30px]" onClick={hideHamburgerMenu}><CgClose /></button>
          <div className="flex flex-wrap justify-center gap-y-[30px]">
            <Link href="/" onClick={removeOverflow}>
              <div className="w-[128px] h-[64px] relative">
                <Image src="/Maiker-Construction-Logo.svg" fill={true} alt="Maiker Construction Logo"/>
              </div>
            </Link>
            <nav className="flex flex-wrap items-center w-[-webkit-fill-available] -mx-5 gap-y-[30px]">
              <div className="flex flex-wrap gap-x-10 w-full border-t border-[#2E719E]">
                {NavigationLinks.map((item, index) => (
                  <Link href={item.link} key={index} className={`text-white text-center font-[500] w-full p-5 text-[17px] border-b border-[#2E719E]`} onClick={removeOverflow}>
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-y-3 gap-x-5 px-5">
                {NavigationLinksSecond.map((item, index) => (
                  <Link href={item.link} key={index}>
                    <button type="button" name={item.name} className={`bg-white text-fore shadow-mainShadow px-5 w-[200px] rounded-[20px] h-[42px] flex items-center text-[16px] font-[600] gap-x-2`} onClick={removeOverflow}>
                      {item.name} <FaChevronRight />
                    </button>
                  </Link>
                ))}
              </div>
            </nav>
            <div className="flex flex-row justify-start align-middle gap-x-4 text-white">
              {SocialMediaLinks.map((item, index) => (
                <Link href={item.link} target="_blank" key={index} aria-label={item.name}>
                  <span className="w-[32px] h-[32px] bg-white rounded-full flex justify-center items-center">
                    {<item.icon color="#205375" size="17"/>}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}