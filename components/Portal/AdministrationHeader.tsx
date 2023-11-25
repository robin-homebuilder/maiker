"use client"

import Link from "next/link";

import { FaPhone, FaEnvelope, FaRegUser, FaChevronDown, FaCog, FaLock } from "react-icons/fa"

import { NavigationLinks } from "@/libs/navigationLinks";
import { SocialMediaLinks } from "@/libs/socialMediaLinks";
import { useEffect, useRef, useState } from "react";

import { signOut } from "next-auth/react"

import Manage_Credential from "../Modal/Manage_Credential";

interface PageProps {
  userID: string
}

export default function AdministrationHeader({ userID } : PageProps) {
  const [ openCredentialModal, setOpenCredentialModal ] = useState(false);
  
  const [ showDropdown, setShowDropdown ] = useState<boolean>(false);
  const [ showSettings, setShowSettings ] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const settingsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }

    function handleSettingsClickOutside(event: MouseEvent) {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setShowSettings(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('mousedown', handleSettingsClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('mousedown', handleSettingsClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleSettingsDropdown = () => {
    setShowSettings(!showSettings);
  };
  
  const showCredentialModal = async () => {
    setOpenCredentialModal(true);
  }

  return (
    <nav className="pl-[335px] w-full h-auto bg-black fixed z-30">
      <div className="w-full h-[35px] px-[50px] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-80"></div>
        <div className="w-full flex justify-between items-center h-full z-10 relative">
          <div className="flex gap-x-5">
            <div className="flex gap-x-1 items-center"> 
              <span className="w-[25px] h-[25px] bg-white rounded-full flex justify-center items-center">
                <FaPhone color={`#205375`} size="12" style={{ transform: 'scaleX(-1)' }} />
              </span>
              <p>(07)3705 1421</p>
            </div>
            <div className="flex gap-x-1 items-center"> 
              <span className="w-[25px] h-[25px] bg-white rounded-full flex justify-center items-center">
                <FaEnvelope color={`#205375`} size="12"/>
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
                    {<item.icon color={`#205375`} size="13"/>}
                  </span>
                </Link>
              ))}
            </div>
            <div className={`bg-black h-full flex`}>
              <div className="relative" ref={settingsRef}>
                <button type="button" name="login" className="flex gap-x-1 px-2 items-center h-full" onClick={toggleSettingsDropdown}>
                  <FaCog size="13"/>
                  <div className="text-[14px] flex items-center gap-x-1">Settings <div className={`${showSettings && "rotate-[180deg]"}`}><FaChevronDown size={13}/></div></div>
                </button>
                {showSettings && (
                  <div className={`absolute top-full right-0 shadow-[0px_2px_4px_1px_rgba(0,0,0,0.75)] w-[190px] rounded-[5px] mt-2 bg-white`}>
                    <button type="button" className="px-5 py-3 font-[500] text-dark flex items-center gap-x-1.5" onClick={showCredentialModal}><FaLock /> Change Password</button>
                  </div>
                )}
              </div>
              <button type="button" name="login" className="flex gap-x-1 px-2 items-center h-full border-l border-r-primary" onClick={() => signOut()}>
                <FaRegUser size="13"/>
                <p className="text-[14px]">Logout</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 px-[50px] flex justify-between items-center">
        <h1 className="font-[800] text-[25px]">Administration Dashboard</h1>
        <div className="flex gap-x-10">
          {NavigationLinks.map((item, index) => (
            item.link == "" ?
              <div className="relative" key={index} ref={dropdownRef}>
                <button type="button" className={`text-white font-[500] flex justify-center items-center gap-x-1 text-[17px]`} onClick={toggleDropdown}>
                  {item.name} <div className={`${showDropdown && "rotate-[180deg]"}`}><FaChevronDown size={13}/></div>
                </button>
                {showDropdown && (
                  <div className={`absolute top-full -left-5 shadow-[0px_2px_4px_1px_rgba(0,0,0,0.75)] w-[200px] rounded-[20px] mt-2 bg-white`}>
                    {item.dropdownItems?.map((dropdownItem, i) => (
                      <Link href={dropdownItem.link} key={i} className={`block px-5 py-3 font-[500] text-dark`}>
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            :
            <Link href={item.link} key={index} className={`text-white font-[500] text-[17px]`}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <Manage_Credential isOpen={openCredentialModal} closeModal={() => setOpenCredentialModal(false)} userID={userID} />
    </nav>
  )
}