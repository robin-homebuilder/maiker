import Image from "next/image"

const CarouselNextArrow = ({ onClick }: any) => {
  return (
    <>
      <div className='absolute right-0 top-0 h-full w-[30px] flex items-center justify-center z-10'>
        <button type='button' onClick={onClick}>
          <Image
            src='/next-button.svg'
            alt='next'
            width={20}
            height={20}
            className='object-cover'
          />
        </button>
      </div>
    </>
  )
}

export default CarouselNextArrow;