'use client'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
// const montserrat = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
// title: '6 Day Meals',
// description: 'Introducing 6DayMeals. This revolutionary, AI-powered app takes the stress out of meal planning. Craft delicious, healthy meals that help you meet your goals.',
// }

export default function RootLayout({
  
  children,
}: {
  children: React.ReactNode
}) {
  
  useEffect(() => {
    AOS.init({
      offset: 200, 
      duration: 800, 
      easing: 'ease-in-out',
      once: true  
    });
 }, [])
  return (
    <html lang="en">
      <body className='font-montserrat font-medium'>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
