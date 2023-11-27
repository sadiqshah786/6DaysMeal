import Image from 'next/image'
import React from 'react'


interface ImageWithTextProps {
    data: {
      title?: string;
      imgUrl?: any; 
    };
    children?:any;
  }
  const ImageWithText: React.FC<ImageWithTextProps> = ({data,children }) => {
  return (
    <div data-aos="fade-right" className=' text-center  my-4 imgText text-center'>
      <div className='flex justify-center text-center'>
      <Image className='rounded-full' width={320} height={320} src={data.imgUrl} alt='img' />
        </div>
      <div className='text-center '><h4 className='font-semibold mt-12 text-sm sm:text-sm md:text-base xl:text-lg 2xl:text-md uppercase'>
      {data.title}
      </h4></div>
      <div>{children}</div>
    </div>
  )
}

export default ImageWithText
