import { Col, Row } from 'antd'
import Image from 'next/image';
import React from 'react'

interface ImageSideBySideProps{
    data:{
        imgUrl1: string,
        imgUrl2: string,
    }
}
const ImageSideBySide: React.FC<ImageSideBySideProps> = ({ data }) => {
    
  return (
    <div>
      <div className="justify-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <div data-aos="fade-right" className='mt-0 md:-mt-20 md:-mt-24 pr-10 md:pr-0'>
           <Image  width={1200} height={240} src={data.imgUrl1} alt='img' />
        </div>
        <div data-aos="fade-left" className='flex justify-end pl-10 md:pl-0'>
           <Image  width={1200} height={240} src={data.imgUrl2} alt='img' />
        </div>
      </div>
    </div>
  )
}

export default ImageSideBySide
