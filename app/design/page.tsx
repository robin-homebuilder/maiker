import Image from 'next/image'
import { FaChevronRight } from 'react-icons/fa'

export default function Design() {
  return (
    <>
      <section className='bg-accent py-[80px]'>
        <div className='max-w-[1250px] mx-auto'>
          <h1 className='text-primary font-[800] text-center mb-5'>Design My Home</h1>
          <h2 className='text-tertiary font-[800] text-center mb-5'>Home Design and Quotation Turn Key Service</h2>
          <p className='text-dark text-center mb-10 px-10 mx-10'>
            Are you looking for a builder that can manage the whole design and construction process?  1 point of contact and a business that manages all the items that will bring your home to life?
          </p>
          <div className='flex gap-x-10'>
            <div className='w-1/2 px-[50px]'>
              <h2 className='text-tertiary font-[700] text-center mb-5'>Design My Home</h2>
              <h2 className='text-warning italic font-[500] text-center mb-5'>A complete design and quotation service</h2>
              <p className='text-dark mb-5 text-center font-[500] px-10'>
                Maiker Constructions provides a full turn key design and construction service. The first step of this process is the conceptual design and project costing of your home to ensure your project is on budget. 
              </p>
              <p className='text-dark mb-5 text-center font-[500] px-10'>The second step is detailed design of your home and a full project quotation.</p>
              <p className='text-dark mb-5 text-center font-[500] px-10'>Maiker Constructions provides everything required for your project to be ready for contract and ready to build.</p>
              <div className='flex justify-center'>
                <button type="button" className='bg-warning w-[200px] h-[42px] flex items-center justify-center rounded-[20px] text-[16px] shadow-mainShadow'>Start <FaChevronRight/></button>
              </div>
            </div>
            <div className='w-1/2'>
              <Image src="/Design-My-Home.svg" width={605} height={426} alt="Design My Home"/>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[60px] max-w-[1250px] mx-auto">
        <div className="flex flex-wrap justify-center">
          <h2 className="text-primary font-[800] text-center mb-5 text-[38px]">
            Select Package
          </h2>
        </div>
        <div className='flex justify-start'>
          <div className='w-[604px] h-[523px] rounded-[20px] border border-primary overflow-hidden'>
            <span className='block bg-primary h-[26px] w-full'></span>
            <div className='p-5'>
              <h3 className='text-dark text-center text-[32px]'>Home Design and Quotation</h3>
              <p className='text-dark text-center text-[16px]'>Work with Maiker to get the Home you want in your budget.</p>
            </div>
            <div className='bg-accent p-5'>
              <p className='text-warning text-center font-[600] italic'>Turn Key Design and Construct Package</p>
              <h3 className='text-dark font-[800] text-[45px] text-center'>$3,200.00</h3>
              <p className='text-dark font-[300] text-center text-[16px]'>(Inc GST)</p>
            </div>
            <div className='p-5'>
              <ul className='text-dark list-disc pl-5 text-[16px] space-y-4'>
                <li>Concept Home Design and Project Budget.</li>
                <li>Detailed Home Design and Project Quotation.</li>
                <li>Soil Test and Foundation Design (Required for a building contract).</li>
              </ul>
              <hr className='my-5 border-t-2'/>
              <div className='flex justify-center'>
                <button type="button" className='bg-warning w-[200px] h-[42px] text-[600] rounded-[20px] shadow-mainShadow text-[16px]'>Select</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
