import React from "react";
import Heading from "./common/heading";
import {
  PlanHeading,
  CustomizedPlanText,
  MealPlaningImgs,
} from ".";
import ImageSideBySide from "./common/ImageSideBySide";
import CircleWithText from "./common/CircleWithText";

const CustomizedPlan = () => {
  const backgroundStyle = {
    backgroundImage: `url("assets/imgs/customizedPlanbg.png")`, // Use the provided bgImg URL
  };

  return (
    <div className="">
      <ImageSideBySide data={MealPlaningImgs} />
      <div
        className="-mt-24 w-full  bg-cover  bg-center bg-center"
        style={backgroundStyle}
      >
        <div className="border-r-[1px] border-[#dddddd3b] flex w-1/2 h-[150px] justify-start items-start"></div>
        <div className="my-8">
          <Heading className="text-white" data={PlanHeading} isWidth>
          <h4 className="my-4 text-lg md:text-2xl font-medium uppercase text-white">
              Your meal plan is based on
            </h4>
          </Heading>
        </div>
        <div className="border-r-[1px] border-[#dddddd3b]  flex w-1/2 h-[60px] justify-start items-start"></div>
        <div className=" w-100 xl:w-2/3 2xl:w-[75%] container mx-auto -mt-4">
          <div className="px-4 justify-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {CustomizedPlanText.map((item) => {
              return (
                <div className="flex justify-center" key={item.title}>
                  <CircleWithText data={item} />
                </div>
              );
            })}
          </div>
          <div className="-mt-4 border-r-[1px] border-[#dddddd3b]  flex w-1/2 h-[100px] justify-start items-start"></div>
          <div data-aos="fade-down" className="py-4">
            <h2 className="w-3/4 m-auto text-center text-lg font-medium md:text-subheading text-white">
              Want to eat more protein on lifting days? You got it.
            </h2>
            <div className="my-4  border-r-[1px] border-lineColor flex w-1/2 h-[20px] md:h-[0px] justify-start items-start"></div>
            <div className="text-center py-4">
              <button className="bg-ternary rounded-lg text-sm font-montserrat font-bold w-80 md:px-10 py-4 text-textWhite">
                Get your Custom Meal Plan
              </button>
            </div>
          </div>
          <div className="border-r-[1px] border-[#dddddd3b] flex w-1/2 h-[100px] justify-start items-start"></div>
        </div>
      </div>
    </div>
  );
};

export default CustomizedPlan;
