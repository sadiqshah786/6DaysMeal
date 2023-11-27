'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { NavLinks } from '.'
import Link from 'next/link'
import { Button, Drawer, Radio, Space } from 'antd';
import type { DrawerProps } from 'antd/es/drawer';
import type { RadioChangeEvent } from 'antd/es/radio';

  
const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className='overflow-x-hidden  z-9999 absolute top-0 w-full bg-bgLight py-6 w-100'>
      <ul className='desktop-nav items-center gap-14 justify-center'>
        {
          NavLinks.map((item,index)=>{
            return(
              !item.src ? <li key={index} className='cursor-pointer text-sm font-medium text-textWhite'>{item.text}</li> :
              <li className='cursor-pointer px-10'><Link href="/"><Image height={39} width={100} src="/assets/imgs/logo.png" alt="logo"/></Link></li>
            )
          })
        }
      </ul>
      <div className='mobile-nav justify-between items-center px-6    '>
      <Image height={39} width={100} src="/assets/imgs/logo.png" alt="logo"/>
      <div className="drawer">
      <Image onClick={showDrawer} height={16} width={16} src="/assets/imgs/burgerIcon.png" alt="logo"/>
      <Drawer  placement="right" onClose={onClose} open={open}>
      <Image height={39} width={100} src="/assets/imgs/logo.png" alt="logo"/>
      <ul >
        {
          NavLinks.map((item,index)=>{
            return(
              <li key={index} className='text-lg cursor-pointer '>{item.text}</li> 
            )
          })
        }
      </ul>
      </Drawer>
      </div>
      </div>
    </div>
  )
}

export default Header
