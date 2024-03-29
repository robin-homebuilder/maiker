import Image from "next/image";
import Link from "next/link";

import ScrollButtonHome from "@/components/Utils/ScrollButtonHome";
import { formatLocation } from "@/libs/formatLocationSlug";

export default function HomeRaising_Location({ params }: { params: { location: string }}) {
  const { location } = params;
  const formattedLocation = formatLocation(location);
  
  return (
    <>
      <section className="h-full sm:h-[570px] overflow-hidden relative bg-pageHead">
        <div className="z-10 relative max-w-[1250px] mx-auto mt-[60px] sm:mt-5 flex pt-[230px] sm:pt-0">
          <div className="w-full sm:w-[600px] px-5 sm:px-0">
            <h1 className="font-[800] mb-5 text-[25px] sm:text-[38px]">High quality home raise and build under builder located in <span className="capitalize">{formattedLocation}</span></h1>
            <p className="font-[500] text-[16px] sm:text-[18px] mb-5">Maiker Constructions designs and builds custom home renovation projects in <span className="capitalize">{formattedLocation}</span>. We specialize in timber construction and the modernization of character homes.</p>
            <ScrollButtonHome targetSectionId="footer"/>
            <div className="w-full mb-10 sm:mb-0">
              <Image src="/Home_MBA_ProudMember.webp" width={516} height={136} alt="Master Builders Queensland - Proud Member" className="w-full sm:w-auto h-auto"/>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[960px] h-auto sm:h-[490px] absolute top-[60px] sm:top-[40px] -right-[60px] sm:-right-[200px] pt-5 sm:pt-0">
          <Image src={`${process.env.APP_S3_BUCKET}/assets/Home-Raising-Banner.webp`} width={960} height={490} alt="Home Renovation Banner" className="w-auto object-cover"/>
        </div>
      </section>
      <main>
        <section className="py-5 sm:py-[60px] max-w-[1250px] mx-auto">
          <div className="flex flex-wrap justify-center px-5 sm:px-0">
            <h2 className="text-primary font-[800] text-center mb-[30px] text-[25px] sm:text-[38px] w-3/4">
              Maiker Constructions Is Your Best Choice for Home Raising and Build Under in <span className="capitalize">{formattedLocation}</span>
            </h2>
          </div>
          <div className='flex flex-wrap sm:flex-nowrap gap-x-10'>
            <div className='w-full sm:w-1/2'>
              <Image src={`${process.env.APP_S3_BUCKET}/assets/Best-Choice-Home-Raising.webp`} width={600} height={735} alt="Best Choice for Home Renovation" className="object-cover h-[250px] sm:h-[735px]"/>
            </div>
            <div className='w-full sm:w-1/2 px-5 sm:px-0 pt-5 sm:pt-0'>
              <p className='text-dark mb-5 w-full text-[16px]'>
                House Raising has become a standard practice in the suburbs of Brisbane. As I traverse the areas that Maiker Construction services, it's common to see home renovations being lifted on every other street. This practice offers an excellent solution for increasing interior space and improving outdoor usability, all while preserving the unique charm of a Queenslander Home.
              </p>
              <p className='text-dark mb-5 w-full text-[16px]'>
                Elevating a home provides numerous advantages, one of which is a considerable boost in usable space. When you lift a house, you open up the possibility for extra floors or even a basement, offering new areas for bedrooms, home offices, kitchens, and entertainment spaces. Moreover, this process enhances the functionality of your outdoor area. The act of raising a house usually entails reconfiguring the yard, resulting in a more seamless blend between indoor and outdoor living spaces. This transformation can lead to enhanced views, an influx of natural light, and easier access to outdoor amenities. Maiker Constructions specialize in raising home design and works with many architects and structural engineers who’s expertise is renovations of existing homes including house raising.
              </p>
              <Link href="/articles/the-process-of-designing-a-home" target="_blank" className="underline text-warning text-[16px] block">
                The Process for Designing a Home
              </Link>
              <Link href="/articles/everything-you-need-to-know-about-house-raising" target="_blank" className="underline text-warning text-[16px] mb-5 block">
                Everything you need to know about House Raising
              </Link>
              <h3 className="text-[18px] text-tertiary font-[600] mb-5">Further Help and Questions</h3>
              <p className='text-dark mb-5 w-full text-[16px]'>
                Should you require further details on home renovation, feel free to reach out to us. You can request a callback by filling out the form at the bottom of the page or request a site inspection by filling out the questionnaire in our article <Link href="/articles/could-we-be-your-perfect-home-builder" target="_blank" className="text-warning underline">Could We Be Your Perfect Home Builder?</Link> 
              </p>
              <p className='text-dark mb-5 w-full text-[16px]'>
                We're excited about the prospect of collaborating with you on your home renovation and house-raising project.
              </p>
            </div>
          </div>
        </section>
        <section className="py-0 sm:py-[80px] bg-accent">
          <div className="max-w-[1250px] mx-auto px-5 sm:px-0">
            <h2 className="text-primary font-[800] text-center mb-[30px] text-[25px] sm:text-[38px] pt-5 sm:pt-0">
              Home Raising Project Types
            </h2>
            <p className="text-center text-dark text-[16px] mb-[30px]">
              At Maiker Constructions, we have a strong partnership with architects and home designers to deliver exceptional renovation projects for our clients. In addition, we offer in-house design services for smaller projects. Our expertise extends to various construction methods such as brick veneer, timber, fibre cement, and architect finishes. We pride ourselves on specializing in timber construction and bringing a modern touch to character homes.
            </p>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap h-full sm:h-[438px] gap-x-1">
            <div className="relative w-full h-[283px] sm:w-1/4 sm:h-auto">
              <h2 className="text-[25px] font-[800] rotate-0 sm:-rotate-90 absolute top-[unset] sm:top-full left-0 w-full sm:w-[438px] text-center origin-top-left z-10 bottom-[10px] sm:bottom-0">House Raising & Build Under</h2>
              <div className="w-full h-full relative">
                <div className="w-full h-full absolute bg-[#0000004d] z-[5]"></div>
                <Image src={`${process.env.APP_S3_BUCKET}/assets/House-Raising.webp`} alt="Home Renovations" className="object-cover" fill={true}/>
              </div>
            </div>
            <div className="relative w-full h-[283px] sm:w-1/4 sm:h-auto">
              <h2 className="text-[25px] font-[800] rotate-0 sm:-rotate-90 absolute top-[unset] sm:top-full left-0 w-full sm:w-[438px] text-center origin-top-left z-10 bottom-[10px] sm:bottom-0">Contemporary Queenslander&rsquo;s</h2>
              <div className="w-full h-full relative">
                <div className="w-full h-full absolute bg-[#0000004d] z-[5]"></div>
                <Image src={`${process.env.APP_S3_BUCKET}/assets/Contemporary-Queenslanders.webp`} alt="Contemporary Queenslander's" className="object-cover" fill={true}/>
              </div>
            </div>
            <div className="relative w-full h-[283px] sm:w-1/4 sm:h-auto">
              <h2 className="text-[25px] font-[800] rotate-0 sm:-rotate-90 absolute top-[unset] sm:top-full left-0 w-full sm:w-[438px] text-center origin-top-left z-10 bottom-[10px] sm:bottom-0">Home Additions</h2>
              <div className="w-full h-full relative">
                <div className="w-full h-full absolute bg-[#0000004d] z-[5]"></div>
                <Image src={`${process.env.APP_S3_BUCKET}/assets/Home-Additions.webp`} alt="Home Extensions & Additions" className="object-cover" fill={true}/>
              </div>
            </div>
            <div className="relative w-full h-[283px] sm:w-1/4 sm:h-auto">
              <h2 className="text-[25px] font-[800] rotate-0 sm:-rotate-90 absolute top-[unset] sm:top-full left-0 w-full sm:w-[438px] text-center origin-top-left z-10 bottom-[10px] sm:bottom-0">Character & Heritage Renovations</h2>
              <div className="w-full h-full relative">
                <div className="w-full h-full absolute bg-[#0000004d] z-[5]"></div>
                <Image src={`${process.env.APP_S3_BUCKET}/assets/Character-Heritage-Renovation.webp`} alt="Kitchens & Bathrooms" className="object-cover" fill={true}/>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5 sm:py-[60px] max-w-[1250px] mx-auto">
          <div className="flex flex-wrap justify-center px-5 sm:px-0">
            <h2 className="text-primary font-[800] text-center mb-[30px] text-[25px] sm:text-[38px]">
              Discover Why Maiker Constructions Is Your Best Choice
            </h2>
            <p className="text-center text-dark text-[16px] mb-[30px] w-full sm:w-4/5">
              Maiker Constructions recognise that every project is unique, requiring client specific solutions to deliver not only thoughtful and innovative spaces, but responsive, practical construction in a process we endeavour to make as stress-free as possible. 
            </p>
          </div>
          <div className='flex flex-wrap sm:flex-nowrap gap-x-10'>
            <div className='w-full sm:w-8/12'>
              <Image src={`${process.env.APP_S3_BUCKET}/assets/Discover-Maiker-Construction.webp`} width={820} height={767} alt="Discover Maiker Constructions" className="object-cover h-[250px] sm:h-[767px]"/>
            </div>
            <div className='w-full sm:w-3/12 px-5 sm:px-0'>
              <div className="mb-2 flex flex-wrap justify-center mt-10 sm:mt-0">
                <h2 className='text-tertiary font-[700] mb-2 text-center text-[24px]'>25 Years Experience</h2>
                <p className='text-dark mb-5 font-[500] text-center w-full sm:w-[85%] text-[16px]'>
                  25 years' expertise in project management and the residential design and construction of renovations and additions home construction projects in Brisbane, Queensland.
                </p>
              </div>
              <div className="mb-2 flex flex-wrap justify-center">
                <h2 className='text-tertiary font-[700] mb-2 text-center text-[24px]'>Design & Construction</h2>
                <p className='text-dark mb-5 font-[500] text-center w-full sm:w-[85%] text-[16px]'>
                  All inclusive design and construction services offering seamless integration and cost-effectiveness ensuring the vision of the project is executed efficiently and creatively.
                </p>
              </div>
              <div className="mb-2 flex flex-wrap justify-center">
                <h2 className='text-tertiary font-[700] mb-2 text-center text-[24px]'>Quality Homes</h2>
                <p className='text-dark mb-5 font-[500] text-center w-full sm:w-[85%] text-[16px]'>
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
        <section className="py-5 sm:py-[60px] bg-accent">
          <div className="max-w-[1250px] mx-auto px-0">
            <div className="flex flex-wrap justify-center mb-10 px-5 sm:px-0">
              <h2 className="text-primary font-[800] text-center text-[25px] sm:text-[38px] w-full mb-10">
                Where We Service
              </h2>
              <p className="text-center text-dark text-[16px] mb-0 sm:mb-[30px]">
                Maiker Constructions builds in the below areas of the Brisbane and the South East section of Queensland.
              </p>
            </div>
            <div className="w-full h-[319px] sm:h-[600px] relative">
              <Image src={`${process.env.APP_S3_BUCKET}/assets/Where-We-Service.webp`} fill={true} alt="Where We Service" className="object-cover shadow-secondShadow"/>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}