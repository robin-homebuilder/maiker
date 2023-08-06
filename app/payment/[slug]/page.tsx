import PaymentElement_Container from "@/components/Stripe/PaymentElement";
import { createPaymentIntent } from "@/services/stripeServices";

export default async function Payment({ params }: { params: { slug: string }}) {
  const { slug } = params;

  const paymentIntent = await createPaymentIntent(650);
  
  return (
    <>
      <section className='bg-accent py-[80px]'>
        <div className='max-w-[1250px] mx-auto'>
          <h1 className='text-primary font-[800] text-center mb-10'>Payment</h1>
          <div className='flex gap-x-10'>
            <div className='w-8/12'>
              <h2 className='text-tertiary font-[800] text-[25px] mb-[30px]'>Enter Payment Information</h2>
              <PaymentElement_Container clientSecret={paymentIntent}/>
            </div>
            <div className='w-4/12'>
              <div className='w-[390px] border border-primary rounded-[20px] overflow-hidden bg-white'>
                <span className='h-[26px] bg-primary block'></span>
                <div className="p-5">
                  <h2 className="text-dark text-center text-[32px]">Project Budget</h2>
                  <p className="text-dark text-center">Verify that your architect plans are within your budget.  </p>
                </div>
                <div className="p-5 bg-accent">
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
