import React from "react";
import Heading from "./common/heading";
import { FeatureHeading, MealData, UniqueData, UniqueHeading } from ".";
import ImageCard from "./common/ImageCard";
import { Col, Row } from "antd";

const UniquePlan = () => {
  return (
  <>
    <div className="lines -top-20  border-r-[1px]  flex w-1/2 h-[120px] justify-start items-start"></div>
    <div className="mt-4 md:mt-36 m-auto">
      {/* <div classNamlge="-mt-12 mb-4 border-r-[1px]  flex w-1/2 h-[150px] justify-start   items-start"></div> */}
      <Heading data={UniqueHeading}>
        <h4 className="my-4 text-md md:text-2xl uppercase">
          Your Individualized Plan is Based On
        </h4>
      </Heading>
      <div className=" centerLine mt-4 border-r-[1px]  flex w-1/2 h-[300px] 2xl:h-[365px] justify-start absolute right-0 left-0 items-start"></div>
      <div className="py-6 relative container mx-auto 2xl:w-[80%] m-auto">
        <div className="px-4 justify-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          {UniqueData.map((item) => (
            <div key={item.title}>
              <ImageCard data={item} />
            </div>
          ))}
        </div>
        <div className="my-4  border-r-[1px] border-primary flex w-1/2 h-[20px] md:h-[0px] justify-start items-start"></div>
        <div className=" text-center">
        <button className="bg-bgbtn rounded-btnRadius w-80 md:w-auto text-sm font-montserrat font-bold  md:px-14 py-4 text-textWhite">
            Join the Waitlist
          </button>
        </div>
      </div>
    
    </div>
  </>
  );
};

export default UniquePlan;
