const test = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {}
]

export default function ClientPortal_ProjectPhotosList() {
  return (
    <>
      <div className="mb-[25px]">
        <div className="flex flex-wrap gap-4">
          {test.map((item,index) => (
            <div className="w-[273px] h-[272px] bg-[#D9D9D9] relative" key={index}>
              <p className="absolute bottom-2 right-2 text-dark text-[12px]">12/3/2023</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
