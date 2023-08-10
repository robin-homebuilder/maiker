import PaymentElement_Container from "@/components/Stripe/PaymentElement";
import { getPackageBySlug } from "@/services/packageServices";
import { createPaymentIntent } from "@/services/stripeServices";
import { PackageProps } from "@/types";

export default async function Payment({ params }: { params: { slug: string }}) {
  const { slug } = params;

  const packageData = await getPackageBySlug({ slug: slug});
  
  return (
    <>
      <section className='bg-accent py-[80px]'>
        <div className='max-w-[1250px] mx-auto'>
          <h1 className='text-primary font-[800] text-center mb-10'>Payment</h1>
          <div className='flex gap-x-10'>
            <div className='w-8/12'>
              <h2 className='text-tertiary font-[800] text-[25px] mb-[30px]'>Enter Payment Information</h2>
              <PaymentElement_Container price={packageData.price}/>
            </div>
            <div className='w-4/12'>
              <div className='w-[390px] border border-primary rounded-[20px] overflow-hidden bg-white'>
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
                  <div className='flex justify-center'>
                    <button type="button" className='border border-warning text-warning font-[500] w-[200px] h-[42px] text-[600] rounded-[20px] shadow-mainShadow text-[16px]'>Selected</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
