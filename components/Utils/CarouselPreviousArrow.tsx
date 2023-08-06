import Image from "next/image"

const CarouselPreviousArrow = ({ onClick }: any) => {
  return (
    <>
      <div className='absolute left-0 top-0 h-full w-[30px] flex items-center justify-center z-10'>
        <button type='button' onClick={onClick}>
          <Image
            src='/previous-button.svg'
            alt='previous'
            width={20}
            height={20}
            className='object-cover'
          />
        </button>
      </div>
    </>
  )
}

export default CarouselPreviousArrow;