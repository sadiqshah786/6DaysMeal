import Image from 'next/image'
import React from 'react'


interface CircleWithTextProps {
    data: {
      title?: string;
    };
  }
  const CircleWithText: React.FC<CircleWithTextProps> = ({data }) => {
  return (
    <div data-aos="fade-right" className='overflow-x-hidden  my-4 customize flex items-center justify-center w-[310px] h-[310px] text-center rounded-full border-[1px] '>
      <div className=''>
        <h4 className='font-montserrat font-semibold px-6 m-auto text-white text-base md:text-lg '>
            {data.title}
      </h4></div>
    </div>
  )
}

export default CircleWithText
