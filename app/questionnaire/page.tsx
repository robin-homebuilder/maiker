import QuestionnaireForm from '@/components/Questionnaire/QuestionnaireForm'

export default function About() {
  return (
    <>
      <section className='bg-accent py-[60px] sm:py-[40px]'>
        <div className='max-w-[1250px] mx-auto'>
          <div className='px-5 sm:px-0 pt-5 sm:pt-0'>
            <h1 className='text-primary font-[800] text-center mb-10'>Maiker Constructions - Questionnaire</h1>
          </div>
          <div className="px-5 sm:px-0">
            <QuestionnaireForm />
          </div>
        </div>
      </section>
    </>
  )
}