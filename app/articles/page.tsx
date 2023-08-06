import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

const ArticlesList = [
  {
    title: "How to build a home.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Ut enim ad minim veniam, quis nostrud exercitation.Ut enim ad minim veniam, quis nostrud exercitation.",
    image: "/Contemporary-Queenslanders.svg"
  },
  {
    title: "How to build a home.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    image: "/Contemporary-Queenslanders.svg"
  },
  {
    title: "How to build a home.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    image: "/Contemporary-Queenslanders.svg"
  }
]

export default function Articles() {
  return (
    <>
      <section className='bg-accent py-[80px]'>
        <div className='max-w-[1250px] mx-auto'>
          <h1 className='text-primary font-[800] text-center mb-10 text-[38px]'>Articles and Inspiration</h1>
        </div>
      </section>
      <section className="max-w-[1250px] mx-auto py-[60px]">
        <div className="flex gap-10">
          {ArticlesList.map((item, index) => (
            <div className="w-[390px] h-[513px] border border-primary rounded-[20px] overflow-hidden">
              <div className="w-full h-[290px] relative">
                <Image src={item.image} fill={true} alt="How to build a home" className="object-cover"/>
              </div>
              <div className="px-[30px] py-5">
                <h2 className="text-tertiary text-[24px] font-[800] text-center">{item.title}</h2>
                <p className="text-dark text-[16px] text-center line-clamp-4 mb-2">{item.description}</p>
                <button type="button" className="bg-tertiary h-10 rounded-[5px] px-[15px] flex items-center justify-center font-[500] text-[15px]">View Article <FaChevronRight/></button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
