import React from "react";
import ImageWithText from "./common/ImageWithText";
import { MealData, Mealheading } from "@/components";
import { Col, Row } from "antd";
import Heading from "./common/heading";

const MealDiet = () => {
  return (
    <div className="overflow-hidden ">
      <Heading data={Mealheading}>
        <h4 className="my-4 text-lg md:text-2xl font-medium uppercase">SEARCH FOR RECIPES BASED ON</h4>
      </Heading>
      {/* <div className='w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[90%] 2xl:w-[85%] m-auto my-10'> */}
      <div className="relative">
        <div
          data-aos="fade-up"
          className="-mt-12 border-r-[1px] border-transparent flex w-1/2 h-[590px] md:h-[550px] justify-start items-start absolute"
        ></div>
        <div className="my-20 container mx-auto 2xl:w-[80%]">
          <div className="px-4 justify-center grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {MealData.map((item) => (
              <div key={item.title}>
                <ImageWithText data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDiet;
