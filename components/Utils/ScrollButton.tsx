"use client"

import { FaChevronRight } from "react-icons/fa";

export default function ScrollButton({ targetSectionId } : { targetSectionId : string}) {

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const targetSection = document.getElementById(targetSectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button type="button" className='bg-warning w-[200px] h-[42px] flex items-center justify-center rounded-[20px] text-[16px] shadow-mainShadow' onClick={(e) => handleClick(e)}>Start <FaChevronRight/></button>
  )
}