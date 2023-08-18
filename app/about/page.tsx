import Image from 'next/image'

export default function About() {
  return (
    <>
      <section className='bg-accent py-[80px]'>
        <div className='max-w-[1250px] mx-auto'>
          <div className='px-5 sm:px-0'>
            <h1 className='text-primary font-[800] text-center mb-10'>About Maiker Construction&rsquo;s</h1>
            <p className='text-dark text-center mb-10 text-[16px]'>
              Maiker Constructions recognise that every project is unique, requiring client specific solutions to deliver not only thoughtful and innovative spaces, but responsive, practical construction in a process we endeavour to make as stress-free as possible. 
            </p>
          </div>
          <div className='flex flex-wrap sm:flex-nowrap gap-x-10'>
            <div className='w-full sm:w-1/2 mb-5 sm:mb-0'>
              <Image src={`${process.env.APP_S3_BUCKET}/assets/About-Maiker-Construction.jpg`} width={605} height={426} alt="About Maiker Constructions"/>
            </div>
            <div className='w-full sm:w-1/2 px-5 sm:px-0 text-center'>
              <h2 className='text-tertiary font-[700] mb-5 text-[23px] sm:text-[21px]'>Discover Why Maiker Constructions Is Your Best Choice</h2>
              <p className='text-dark mb-5 font-[500]  text-[16px]'>
                Maiker Constructions is a renovations and additions builder in Southeast Queensland. With over 20 years in design, construction and project management of complex domestic and commercial projects, Maiker Construction has the capability to deliver any project type including difficult sites.
              </p>
              <p className='text-dark mb-5 font-[500]  text-[16px]'>
                Maiker Constructions has an in-house team of carpenters and project management to deliver your project successfully. Maiker Constructions enjoys working with timber construction but has experience and capability for any construction type.
              </p>
              <p className='text-dark mb-5 font-[500]  text-[16px]'>
                Maiker Constructions works on general renovations and additions projects including living and bedrooms, bathrooms, kitchens, carports, garages, pergolas, lift and raise, demolition and sloping and complex lots.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='py-[70px]'>
        <div className='max-w-[1250px] mx-auto'>
          <div className='flex flex-wrap sm:flex-nowrap gap-x-10'>
            <div className='w-full sm:w-1/2 px-5 sm:px-0'>
              <div className='mb-5'>
                <h2 className='text-primary text-[32px] font-[800] mb-3'>Meet the Managers</h2>
                <p className='text-dark'>Meet the managers of Maiker Construction, Jeremy Verhey and Xavier Williams who bring over 40 years in residential construction.</p>
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
            <div className='w-full sm:w-1/2'>
              <div className="bg-gray-400 w-full h-full">

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
