"use client"

import Image from 'next/image'

export default function About() {
  return (
    <>
      <section className='bg-accent py-[80px]'>
        <div className='max-w-[1250px] mx-auto'>
          <h1 className='text-primary font-[800] text-center mb-10'>About Maiker Construction&rsquo;s</h1>
          <p className='text-dark text-center mb-10'>
            Maiker Constructions recognise that every project is unique, requiring client specific solutions to deliver not only thoughtful and innovative spaces, but responsive, practical construction in a process we endeavour to make as stress-free as possible. 
          </p>
          <div className='flex gap-x-10'>
            <div className='w-1/2'>
              <Image src="/About-Maiker-Construction.svg" width={605} height={426} alt="About Maiker Constructions" className="transition-opacity opacity-0 duretion-[2s]" onLoadingComplete={(image) => image.classList.remove("opacity-0")}/>
            </div>
            <div className='w-1/2'>
              <h2 className='text-tertiary font-[700] mb-5'>Discover Why Maiker Constructions Is Your Best Choice</h2>
              <p className='text-dark mb-5 font-[500]'>
                Maiker Constructions is a renovations and additions builder in Southeast Queensland. With over 20 years in design, construction and project management of complex domestic and commercial projects, Maiker Construction has the capability to deliver any project type including difficult sites.
              </p>
              <p className='text-dark mb-5 font-[500]'>
                Maiker Constructions has an in-house team of carpenters and project management to deliver your project successfully. Maiker Constructions enjoys working with timber construction but has experience and capability for any construction type an materials.
              </p>
              <p className='text-dark mb-5 font-[500]'>
                Maiker Constructions works on general renovations and additions projects including living and bedrooms, bathrooms, kitchens, carports, garages, pergolas, lift and raise, demolition and sloping and complex lots.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='py-[70px]'>
        <div className='max-w-[1250px] mx-auto'>
          <div className='flex gap-x-10'>
            <div className='w-1/2'>
              <div className='mb-5'>
                <h2 className='text-primary text-[32px] font-[800] mb-3'>Meet the Managers</h2>
                <p className='text-dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco..</p>
              </div>
              <div className='mb-5'>
                <h2 className='text-tertiary font-[800] text-[25px] mb-3'>Jeremy Verhey</h2>
                <p className='text-dark'>
                  Jeremy Verhey is the general manager of Maiker Constructions and has 20 years experience in Carpentry, home design, development and project management.  
                </p>
              </div>
              <div>
                <h2 className='text-tertiary font-[800] text-[25px] mb-3'>Xavier Williams</h2>
                <p className='text-dark'>
                  Xavier Williams is the construction manager of Maiker Constructions and has 20 years experience in Carpentry and residential housing construction. 
                </p>
              </div>
            </div>
            <div className='w-1/2'>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
