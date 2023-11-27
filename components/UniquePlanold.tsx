import React from "react";
import Heading from "./common/heading";
import { FeatureHeading, MealData, UniqueData, UniqueHeading } from ".";
import ImageCard from "./common/ImageCard";
import { Col, Row } from "antd";

const UniquePlan = () => {
  return (
    <div className=" overflow-x-hidden  m-auto">
      <div className="-mt-12 mb-4 border-r-[1px]  flex w-1/2 h-[150px] justify-start   items-start"></div>
      <Heading data={UniqueHeading}>
        <h4 className="my-4 text-md md:text-lg uppercase">
          Your Individualized Plan is Based On
        </h4>
      </Heading>
      <div className=" centerLine mt-4 border-r-[1px]  flex w-1/2 h-[275px] justify-start absolute right-0 left-0 items-start"></div>
      <div className="py-6 relative containers mx-auto">
        <div className="px-4 justify-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-2">
          {UniqueData.map((item) => (
            <div key={item.title}>
              <ImageCard data={item} />
            </div>
          ))}
        </div>
        <div className="my-4  border-r-[1px] border-primary flex w-1/2 h-[20px] md:h-[0px] justify-start items-start"></div>
        <div className=" text-center">
        <button className='bg-bgbtn rounded-lg text-sm font-montserrat font-bold w-80 md:px-10 py-4 text-textWhite'>
            Join the Waitlist
          </button>
        </div>
      </div>
    
    </div>
  );
};

export default UniquePlan;
