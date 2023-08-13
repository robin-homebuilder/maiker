import Image from "next/image";
import Link from "next/link";

import { FaChevronRight } from "react-icons/fa";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import Past_Projects from "@/components/Utils/ProjectsCard";
import ScrollButtonHome from "@/components/Utils/ScrollButtonHome";

export default function Home() {
  return (
    <>
      <Navbar page="home" />
      <section className="h-[900px] overflow-hidden relative">
        <Image src={`${process.env.APP_S3_BUCKET}/assets/Home-Renovations.png`} fill={true} alt="Maiker House Project Footer Logo" className="absolute top-0 object-cover h-[inherit]"/>
        <div className="z-10 relative max-w-[1250px] mx-auto mt-[200px]">
          <div className="w-[600px]">
            <h1 className="font-[800] mb-10 text-[38px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, set.</h1>
            <p className="font-[500] text-[18px] mb-10">Lorem ipsum dolor sit amet, consectetur do adipiscing elit, sed, consectetur do adipiscing elit, sed.</p>
            <ScrollButtonHome targetSectionId="footer"/>
            <div className="w-[150px] h-[94px] relative">
              <Image src="/MBA_ProudMember.svg" fill={true} alt="Master Builders Queensland - Proud Member"/>
            </div>
          </div>
        </div>
      </section>
      <main>
        <section className="py-[60px] max-w-[1250px] mx-auto">
          <div className="flex flex-wrap justify-center">
            <h2 className="text-primary font-[800] text-center mb-[30px] text-[38px]">
              Discover Why Maiker Constructions Is Your Best Choice
            </h2>
            <p className="text-center text-dark text-[16px] mb-[30px] w-4/5">
              Maiker Constructions recognise that every project is unique, requiring client specific solutions to deliver not only thoughtful and innovative spaces, but responsive, practical construction in a process we endeavour to make as stress-free as possible. 
            </p>
          </div>
          <div className='flex gap-x-10'>
            <div className='w-8/12'>
              <Image src={`${process.env.APP_S3_BUCKET}/assets/Discover-Maiker-Construction.jpg`} width={820} height={767} alt="Discover Maiker Constructions" className="object-cover h-[767px]"/>
            </div>
            <div className='w-3/12'>
              <div className="mb-10 flex flex-wrap justify-center">
                <h2 className='text-tertiary font-[700] mb-2 text-center'>25 Years Experience</h2>
                <p className='text-dark mb-5 font-[500] text-center w-[85%]'>
                  25 years' expertise in project management and the residential design and construction of renovations and additions home construction projects in Brisbane, Queensland.
                </p>
              </div>
              <div className="mb-10 flex flex-wrap justify-center">
                <h2 className='text-tertiary font-[700] mb-2 text-center'>Design & Construction</h2>
                <p className='text-dark mb-5 font-[500] text-center w-[85%]'>
                  All inclusive design and construction services offering seamless integration and cost-effectiveness ensuring the vision of the project is executed efficiently and creatively.
                </p>
              </div>
              <div className="mb-10 flex flex-wrap justify-center">
                <h2 className='text-tertiary font-[700] mb-2 text-center'>Quality Homes</h2>
                <p className='text-dark mb-5 font-[500] text-center w-[85%]'>
                  Our construction services deliver exceptional quality combining skilled craftsmanship, premium materials, and attention to detail to ensure aesthetically pleasing results.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-[150px] h-[94px] relative">
                  <Image src="/MBA_ProudMember_Blue.svg" width={149} height={94} alt="Master Builders Queensland - Proud Member"/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-[80px] bg-accent">
          <div className="max-w-[1250px] mx-auto">
            <h2 className="text-primary font-[800] text-center mb-[30px] text-[38px]">
              Project Types
            </h2>
            <p className="text-center text-dark text-[16px] mb-[30px]">
              Maker Constructions designs and builds home renovations and additions projects.  We specialize in timber construction and modernizing character homes including providing a complete landscape and hardscape soluctions.
            </p>
          </div>
          <div className="flex h-[438px] gap-x-1">
            <div className="relative w-1/5">
              <h2 className="text-[25px] font-[800] -rotate-90 absolute top-full left-0 w-[438px] text-center origin-top-left z-10">Home Renovations</h2>
              <div className="w-full h-full relative">
                <div className="w-full h-full absolute bg-[#0000004d] z-[5]"></div>
                <Image src={`${process.env.APP_S3_BUCKET}/assets/Home-Renovations.png`} alt="Home Renovations" className="object-cover" fill={true}/>
              </div>
            </div>
            <div className="relative w-1/5">
              <h2 className="text-[25px] font-[800] -rotate-90 absolute top-full left-0 w-[438px] text-center origin-top-left z-10">Home Extensions & Additions</h2>
              <div className="w-full h-full relative">
                <div className="w-full h-full absolute bg-[#0000004d] z-[5]"></div>
                <Image src={`${process.env.APP_S3_BUCKET}/assets/Home-Extensions-and-Additions.jpg`} alt="Home Extensions & Additions" className="object-cover" fill={true}/>
              </div>
            </div>
            <div className="relative w-1/5">
              <h2 className="text-[25px] font-[800] -rotate-90 absolute top-full left-0 w-[438px] text-center origin-top-left z-10">Contemporary Queenslander&rsquo;s</h2>
              <div className="w-full h-full relative">
                <div className="w-full h-full absolute bg-[#0000004d] z-[5]"></div>
                <Image src={`${process.env.APP_S3_BUCKET}/assets/Contemporary-Queenslanders.jpg`} alt="Contemporary Queenslander's" className="object-cover" fill={true}/>
              </div>
            </div>
            <div className="relative w-1/5">
              <h2 className="text-[25px] font-[800] -rotate-90 absolute top-full left-0 w-[438px] text-center origin-top-left z-10">Kitchens & Bathrooms</h2>
              <div className="w-full h-full relative">
                <div className="w-full h-full absolute bg-[#0000004d] z-[5]"></div>
                <Image src={`${process.env.APP_S3_BUCKET}/assets/Kitchens-and-Bathrooms.jpg`} alt="Kitchens & Bathrooms" className="object-cover" fill={true}/>
              </div>
            </div>
            <div className="relative w-1/5">
              <h2 className="text-[25px] font-[800] -rotate-90 absolute top-full left-0 w-[438px] text-center origin-top-left z-10">Landscapes & Hardscapes</h2>
              <div className="w-full h-full relative">
                <div className="w-full h-full absolute bg-[#0000004d] z-[5]"></div>
                <Image src={`${process.env.APP_S3_BUCKET}/assets/Landscapes-and-Hardscapes.png`} alt="Landscapes & Hardscapes" className="object-cover" fill={true}/>
              </div>
            </div>
          </div>
        </section>
        <section className="py-[60px] max-w-[1250px] mx-auto">
          <div className="flex flex-wrap justify-center">
            <h2 className="text-primary font-[800] text-center mb-5 text-[38px] w-full">
              Services
            </h2>
            <h3 className="text-tertiary font-[800] text-center mb-5 text-[25px]">
              All Inclusive Home Design and Construction
            </h3>
            <p className="text-center text-dark text-[16px] mb-[30px]">
              Maiker Constructions provides an all inclusive service and single point of contact.  We manage the design process, approvals and construction of your new home.  We even work with your architect or home designer. 
            </p>
          </div>
          <div className="flex mb-10">
            <div className="w-1/2">
              <Image src={`${process.env.APP_S3_BUCKET}/assets/Full-Design-and-Construction-Service.jpg`} width={620} height={391} alt="Full Design and Construction Service" className="object-cover w-auto"/>
            </div>
            <div className="w-1/2 px-[50px] flex flex-col justify-center items-center">
              <h3 className="text-tertiary font-[800] text-[25px] text-center mb-5">Full Design & Construction Service</h3>
              <p className="text-dark text-center mb-5">All inclusive design and construction services offering seamless integration and cost-effectiveness ensuring the vision of the project is executed efficiently and creatively.</p>
              <Link href="/design">
                <button className="bg-warning w-[200px] h-[42px] rounded-[20px] flex justify-center items-center text-[16px] font-[500]">
                  Design My Home <FaChevronRight />
                </button>
              </Link>
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 px-[50px] flex flex-col justify-center items-center">
              <h3 className="text-tertiary font-[800] text-[25px] text-center mb-5">Quote Your Architect’s Plans</h3>
              <p className="text-dark text-center mb-5">We work with your architect or building designer.  Let Maiker Constructions provide costing and support for your project during the design phase to ensure your project is on budget.</p>
              <Link href="/quote">
                <button className="bg-warning w-[200px] h-[42px] rounded-[20px] flex justify-center items-center text-[16px] font-[500]">
                  Quote My Plans <FaChevronRight />
                </button>
              </Link>
            </div>
            <div className="w-1/2">
              <Image src={`${process.env.APP_S3_BUCKET}/assets/Quote-My-Plans.jpg`} width={620} height={391} alt="Quote Your Architect's Plans" className="object-cover w-auto"/>
            </div>
          </div>
        </section>
        <section className="py-[60px] bg-accent">
          <div className="max-w-[1250px] mx-auto">
            <h2 className="text-primary font-[800] text-center mb-[30px] text-[38px]">
              Past Projects
            </h2>
            <Past_Projects />
            <div className="flex justify-end">
              <Link href="/projects" className="text-warning text-[20px] font-[500] flex items-center">
                More Projects <FaChevronRight />
              </Link>
            </div>
          </div>
        </section>
        <section className="py-[60px] max-w-[1250px] mx-auto">
          <div className="flex flex-wrap justify-center mb-10">
            <h2 className="text-primary font-[800] text-center text-[38px] w-full mb-10">
              Where We Service
            </h2>
            <p className="text-center text-dark text-[16px] mb-[30px]">
              Maiker Constructions builds in the below areas of the Brisbane and the South East section of Queensland.
            </p>
          </div>
          <div className="w-full h-[600px] relative">
            <Image src={`${process.env.APP_S3_BUCKET}/assets/Where-We-Service.png`} fill={true} alt="Where We Service" className="object-cover shadow-secondShadow"/>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}