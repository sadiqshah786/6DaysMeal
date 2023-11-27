import { HomeAbout, HomeHero, LandingPageHero,  MealPlaning, Mealheading } from '@/components'
import About from '@/components/About'
import CustomizedPlan from '@/components/CustomizedPlan'
import Hero from '@/components/Hero'
import MealDiet from '@/components/MealDiet'
import Shopping from '@/components/Shopping'
import ImageWithText from '@/components/common/ImageWithText'
import Heading from '@/components/common/heading'
import React from 'react'

const  HomePage= () => {
  return (
   <>
    <Hero data={HomeHero}/>
    <div className='relative'>
    <About data={HomeAbout}/>
    </div>
    <MealDiet/>
    <About data={MealPlaning} isTop/>
    <CustomizedPlan/>
   <Shopping/>

   </>
  )
}

export default HomePage