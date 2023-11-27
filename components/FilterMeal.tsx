import React from 'react'
import Heading from './common/heading'
import { DietHeading, MealPlan, dietImgs } from '.'
import TextWithImage from './common/TextWithImage'

const FilterMeal = () => {
  return (
    <div className='relative'>
       <div className="centerLine -top-20 absolute border-r-[1px]  flex w-1/2 h-[200px] justify-start items-start"></div>
      <div>
      <div className="lines -top-20  border-r-[1px]  flex w-1/2 h-[120px] justify-start items-start"></div>
      <div className='md:pt-[10rem] md:pb-[4rem]'>
      <Heading  data={DietHeading}>
      <h4 className='my-4 text-sm md:text-2xl uppercase'>
      Filter Meals By
        </h4>
        </Heading>
      </div>
    <div className="lines -top-20  border-r-[1px]  flex w-1/2 h-[120px] justify-start items-start"></div>
      </div>
      <div className="top-[310px] vLine centerLine border-r-[1px]  flex w-[5px]  h-[1700px] absolute justify-start items-start"></div>
     <TextWithImage/>
    </div>
  )
}

export default FilterMeal
