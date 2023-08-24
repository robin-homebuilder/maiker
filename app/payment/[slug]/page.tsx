import PaymentForm from "@/components/Payment/PaymentForm";
import { getPackageBySlug } from "@/services/packageServices";

export default async function Payment({ params }: { params: { slug: string }}) {
  const { slug } = params;

  const packageData = await getPackageBySlug({ slug: slug});
  
  return (
    <>
      <section className='bg-accent py-[80px] px-5 sm:px-0'>
        <div className='max-w-[1250px] mx-auto'>
          <h1 className='text-primary font-[800] text-center mb-10'>Payment Form</h1>
          <div className='flex flex-wrap sm:flex-nowrap gap-x-10 flex-col-reverse sm:flex-row'>
            <div className='w-full sm:w-8/12'>
              <PaymentForm price={packageData.price} slug={slug}/>
            </div>
            <div className='w-full sm:w-4/12 mb-5 sm:mb-0'>
              <h2 className='text-tertiary font-[800] text-[25px] mb-4 sm:mb-[30px]'>Selected Package</h2>
              <div className='w-full sm:w-[390px] border border-primary rounded-[20px] overflow-hidden bg-white'>
                <span className='h-[26px] bg-primary block'></span>
                <div className="p-5">
                  <h2 className="text-dark text-center text-[32px]">{packageData.title}</h2>
                  <p className="text-dark text-center">{packageData.sub_title}</p>
                </div>
                <div className="p-5 bg-accent">
                  <p className='text-warning text-center font-[600] italic'>{packageData.short_description}</p>
                  <h3 className='text-dark font-[800] text-[45px] text-center'>${packageData.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</h3>
                  <p className='text-dark font-[300] text-center text-[16px]'>(Inc GST)</p>
                </div>
                <div className='p-5'>
                  <ul className='text-dark list-disc pl-5 text-[16px] space-y-4'>
                    {packageData.inclusions.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <hr className='my-5 border-t-2'/>
                  {packageData.note &&
                    <p className='text-warning text-center italic font-[700] mb-5'>Note: {packageData.note}</p>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
