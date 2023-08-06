import ImageCard from "@/components/Utils/ImageCard";

export default function Projects() {
  return (
    <>
      <section className='bg-accent py-[80px]'>
        <div className='max-w-[1250px] mx-auto'>
          <h1 className='text-primary font-[800] text-center mb-10'>Complete Projects</h1>
          <div className='flex flex-wrap justify-evenly gap-y-5'>
            <ImageCard imageURL="/Full-Design-and-Construction-Service.svg"/>
          </div>
        </div>
      </section>
    </>
  )
}
