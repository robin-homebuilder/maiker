import Image from 'next/image'
import Link from 'next/link'

import ScrollButton from '@/components/Utils/ScrollButton'

export default function Quote() {
  return (
    <>
      <section className='bg-accent py-[80px]'>
        <div className='max-w-[1250px] mx-auto'>
          <h1 className='text-primary font-[800] text-center mb-5'>Quote My Home</h1>
          <h2 className='text-tertiary font-[800] text-center mb-5'>Suitable for Architect Plans not Prepared by Maiker Constructions</h2>
          <p className='text-dark text-center mb-10'>
            Whether your plans are in the concept phase or are detailed ready for construction, we can support your costing journey.
          </p>
          <div className='flex gap-x-10 mb-[60px]'>
            <div className='w-1/2'>
              <Image src="/Project-Budget.svg" width={605} height={426} alt="Project Budget"/>
            </div>
            <div className='w-1/2 px-10'>
              <h2 className='text-tertiary font-[700] text-center mb-5'>Project Budget</h2>
              <h2 className='text-warning italic font-[500] text-center mb-5'>Is your architect designed home within budget?</h2>
              <p className='text-dark mb-5 text-center font-[500]'>
                Is your architect or building designer home within budget? A common issue we come across is that the plans a client has commissioned with an architect or building designer are over budget.  
              </p>
              <p className='text-dark mb-5 text-center font-[500]'>
                Here at Maiker Constructions we provide project budgeting during the conceptual design phase that provides clients with clarity on the real construction cost of their project.  
              </p>
              <div className='flex justify-center'>
                <ScrollButton targetSectionId="select-package" />
              </div>
            </div>
          </div>
          <div className='flex gap-x-10'>
            <div className='w-1/2 px-[50px]'>
              <h2 className='text-tertiary font-[700] text-center mb-5'>Project Quotation</h2>
              <h2 className='text-warning italic font-[500] text-center mb-5'>Do you have Architect plans ready to build?</h2>
              <p className='text-dark mb-5 text-center font-[500]'>
                Are your designs ready and you&rsquo;re ready to build?  Our project quotation service provides a complete quotation of your project ready for contract.  This service typically takes 10 business days and we can have you on your journey to building your new home.
              </p>
              <div className='flex justify-center'>
                <ScrollButton targetSectionId="select-package" />
              </div>
            </div>
            <div className='w-1/2'>
              <Image src="/Project-Quotation.svg" width={605} height={426} alt="Project Quotation"/>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[60px] max-w-[1250px] mx-auto scroll-mt-[115px]" id="select-package">
        <div className="flex flex-wrap justify-center">
          <h2 className="text-primary font-[800] text-center mb-5 text-[38px]">
            Select Package
          </h2>
          <p className="text-center text-dark text-[16px] mb-[30px] w-4/5">
            Whether your plans are in the concept phase or are detailed ready for construction, we can support your costing journey.
          </p>
        </div>
        <div className='flex justify-between'>
          <div className='w-[604px] h-[643px] rounded-[20px] border border-primary overflow-hidden'>
            <span className='block bg-primary h-[26px] w-full'></span>
            <div className='p-5'>
              <h3 className='text-dark text-center text-[32px]'>Project Budget</h3>
              <p className='text-dark text-center text-[16px]'>Verify that your architect plans are within your budget.</p>
            </div>
            <div className='bg-accent p-5'>
              <p className='text-warning text-center font-[600] italic'>Great for working with Architects during the concept phase.</p>
              <h3 className='text-dark font-[800] text-[45px] text-center'>$650.00</h3>
              <p className='text-dark font-[300] text-center text-[16px]'>(Inc GST)</p>
            </div>
            <div className='p-5'>
              <ul className='text-dark list-disc pl-5 text-[16px] space-y-4'>
                <li>Cost Plan to verify project is within your budget.</li>
                <li>Includes initial budget and 1 round of changes.</li>
                <li>Suitable for pricing Architect Concept Plans.</li>
                <li>Completed in 7 business days.</li>
              </ul>
              <hr className='my-5 border-t-2'/>
              <p className='text-warning text-center italic font-[700] mb-5 px-[60px]'>Note: A project budget is not suitable for a building contract (Refer project quotation).</p>
              <div className='flex justify-center'>
                <Link href="/payment/project-budget">
                  <button type="button" className='bg-warning w-[200px] h-[42px] text-[600] rounded-[20px] shadow-mainShadow text-[16px]'>Select</button>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-[604px] h-[643px] rounded-[20px] border border-primary overflow-hidden'>
            <span className='block bg-primary h-[26px] w-full'></span>
            <div className='p-5'>
              <h3 className='text-dark text-center text-[32px]'>Project Quotation</h3>
              <p className='text-dark text-center text-[16px]'>Quote your Architect Plans ready for contract and construction.</p>
            </div>
            <div className='bg-accent p-5'>
              <p className='text-warning text-center font-[600] italic'>Project quotation on your completed architect plans.</p>
              <h3 className='text-dark font-[800] text-[45px] text-center'>$1,200.00</h3>
              <p className='text-dark font-[300] text-center text-[16px]'>(Inc GST)</p>
            </div>
            <div className='p-5'>
              <ul className='text-dark list-disc pl-5 text-[16px] space-y-4'>
                <li>Full Project Quotation ready for Contract and Construction.</li>
                <li>Includes initial quotation and 1 round of changes.</li>
                <li>Suitable for pricing Architect Detailed Plans.</li>
                <li>Completed in 10 business days. </li>
              </ul>
              <hr className='my-5 border-t-2'/>
              <p className='text-warning text-center italic font-[700] mb-5'>Note:  A project quotation is suitable for a building contract. Excludes Soil Test and Contour and Feature Survey (By architect).</p>
              <div className='flex justify-center'>
                <Link href="/payment/project-quotation">
                  <button type="button" className='bg-warning w-[200px] h-[42px] text-[600] rounded-[20px] shadow-mainShadow text-[16px]'>Select</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
