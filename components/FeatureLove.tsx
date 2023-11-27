import React from "react";
import Heading from "./common/heading";
import { FeatureHeading, FeatureLoveData} from ".";
import ImageWithText from "./common/ImageWithText";

const FeatureLove = () => {
  return (
    <div className="overflow-x-hidden lg:overflow-x-visible">
      <div className="my-6 border-r-[1px]  flex w-1/2 h-[80px] md:h-[150px] justify-start items-start"></div>
      <Heading  data={FeatureHeading}>
        <h4 className="my-4 text-2xl uppercase">
          What Makes 6DayMeals Different
        </h4>
      </Heading>
      <div className=" border-r-[1px]  flex w-1/2 h-[80px] justify-start items-start"></div>

      <div className=" w-100 lg:w-[55%] xl:w-[80%] container mx-auto -mt-4">
        <div className="px-4 justify-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {FeatureLoveData.map((item) => (
            <div key={item.title}>
              <ImageWithText data={item}>
                <p className="my-4 text-md font-light font-montserrat w-4/5 m-auto">
                  {item.subtitle}
                </p>
              </ImageWithText>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 border-r-[1px] flex w-1/2 h-[150px] justify-start items-start"></div>
    </div>
  );
};

export default FeatureLove;
