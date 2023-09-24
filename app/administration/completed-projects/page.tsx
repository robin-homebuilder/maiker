import CompletedProject from "@/components/Administration/CompletedProjects";

const test = [
  { name: 'Project 1' },
  { name: 'Project 2' },
  { name: 'Project 3' },
  { name: 'Project 4' },
  { name: 'Project 5' },
  { name: 'Project 6' }
]

export default async function CompletedProjects() {
  
  return (
    <>
      <section className='pl-[335px] pt-[113px] min-h-[1074px]'>
        <div className="p-[50px] pr-0 max-w-[1300px]">
          <h2 className='text-dark font-[800] text-[25px] mb-5'>Completed Projects</h2>
          <CompletedProject projects={test}/>
        </div>
      </section>
    </>
  )
}
