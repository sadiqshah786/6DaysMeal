import Image from 'next/image'
import React from 'react'
import { FooterLinks } from './index'

const Footer = () => {
  return (
     <>
    <div className='overflow-x-hidden pb-16 text-center  bg-primary '>
    <div className="border-r-[1px] border-[#aaaaaa33] flex w-1/2 h-[40px] justify-start items-start"></div>
     <div className='mb-10 mt-2 py-8 flex justify-center'> <Image height={35} width={87} src="/assets/imgs/logo.png" alt="logo"/></div>
      <ul className='w-3/4 md:w-auto grid md:flex grid-cols-3 py-2 m-auto  px-6 items-center gap-10 justify-center'>
        {
          FooterLinks.map((item,index)=>{
            return(
             <li key={index} className='cursor-pointer text-sm font-medium text-textWhite uppercase' >{item.text}</li> 
            )
          })
        }
      </ul>
    </div>
     </>
  )
}

export default Footer
