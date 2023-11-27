import {Benefit, HomeHero, LandingPageAbout, LandingPageHero, MealPlan, MealPlaningImgs, PlanHeading, landingPlanImgs } from '@/components'
import About from '@/components/About'
import Benefits from '@/components/Benefits'
import FeatureLove from '@/components/FeatureLove'
import FilterMeal from '@/components/FilterMeal'
import Hero from '@/components/Hero'
import UniquePlan from '@/components/UniquePlan'
import ImageSideBySide from '@/components/common/ImageSideBySide'
import Heading from '@/components/common/heading'
import React from 'react'

const LandingPage = () => {
  return (
   <>
    <Hero data={LandingPageHero} />
    <About data={LandingPageAbout} >
      <p className='px-8 w-5/6 m-auto text-sm md:text-lg'>6DayMeal offers convenient features that other meal-planning software doesn&apos;t. Experience the difference and make meal prep fun again. Sign up for the waitlist and get <span className='relative'>Benefit
      <span className='line'></span>
      </span>  when the app launches.</p>
    </About>
    <ImageSideBySide data={landingPlanImgs}/>
   <FilterMeal/>
    <UniquePlan/>
    <FeatureLove/>
    <Benefits data={Benefit}/>
    
   </>
  )
}

export default LandingPage
