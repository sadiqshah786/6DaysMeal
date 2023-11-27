import Image from 'next/image'
import React from 'react'



interface ImageCardProps{
  data:{
    title?: string,
    imgUrl: string,
    description?: string
  }
}
const ImageCard: React.FC<ImageCardProps> = ({ data }) => {
  return (
    <div className='imgCard px-4 my-2 md:my-4  m-auto  text-center md:text-left block md:flex gap-4 items-center '>
        <div className='justify-center flex md:justify-start'>
        <Image className='rounded-full' width={83} height={83} src={data.imgUrl} alt='img' />
        </div>
     <div>
     <h4 className='my-4 uppercase text-lg md:text-xl font-semibold font-montserrat'>{data.title}</h4>
     <div className='w-100 md:w-[78%]'> <p className='text-md md:text-lg font-montserrat font-light '>
    {data.description}
      </p>
      </div>
     </div>
    </div>
  )
}

export default ImageCard
