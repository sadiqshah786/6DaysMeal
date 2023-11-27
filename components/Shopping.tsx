import React from "react";
import Heading from "./common/heading";
import {
  CustomizedPlanText,
  PlanHeading,
  ReasonHeading,
  ShoppingImg,
  Shoppingheading,
  dietImgs,
} from ".";
import TextWithImage from "./common/TextWithImage";
import CircleWithText from "./common/CircleWithText";
import Image from "next/image";

const Shopping = () => {
  const data = {
    imgUrl1: "/assets/imgs/shopping.png",
    imgUrl2: "/assets/imgs/diet2.png",
  };
  return (
    <div className="">
      {/* overflow-x-hidden  */}
      <div
        data-aos="fade-down"
        className=" border-r-[1px]    flex w-1/2 h-[80px] md:h-[150px] justify-start items-start"
      ></div>
      <div data-aos="fade-up" className="heading mt-4">
        <Heading data={Shoppingheading} isTop />
      </div>
      <div
        data-aos="fade-up"
        className="mt-4 border-r-[1px]  flex w-1/2 h-[50px] md:h-[150px] justify-start items-start"
      ></div>

      <div className="justify-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
        <div data-aos="fade-right" className="mt-0 md:-mt-20 pr-10 md:pr-0">
          <Image width={1200} height={548} src={data.imgUrl1} alt="img" />
        </div>
        <div
          data-aos="fade-left"
          className="mt-0 lg:mt-0 xl:mt-16 rounded-bl-[60px] bg-[#F5F5F5] z-[999] flex flex-col h-[500px] md:h-[600px] lg:h-[550px] justify-start items-center py-16 lg:py-10 px-14 md:px-24 "
        >
          <h2 className=" text-left w-full my-6 md:my-12 text-base md:text-2xl font-montserrat font-semibold uppercase">
            Your Perfect Grocery List is Here
          </h2>
          <p className="my-4 text-left w-full font-medium text-sm md:text-base font-montserrat">
            Once you finalize your meal plan, 6DayMeals generates your <br />
            grocery shopping list. It&apos;s simple to follow, and ensures{" "}
            <br />
            you don&apos;t let a ton of food go to waste.
          </p>
          <p className="w-full text-left my-4 text-base font-montserrat font-bold">
            {" "}
            Your wallet will thank you!
          </p>
          <div className="w-full text-left mt-10">
            <button className="w-full md:w-auto bg-ternary rounded-lg text-sm font-montserrat font-bold px-16 py-4 text-textWhite">
              Try it Today
            </button>
          </div>
        </div>
      </div> 
      


      <div className="shopping relative  md:-mt-20 2xl:-mt-[10rem] w-full bg-secondry">
        <div
          data-aos="fade-down"
          className="border-r-[1px] border-[#dddddd3b]  flex w-1/2 h-[180px] justify-start items-start"
        ></div>
        <div data-aos="fade-up" className="heading mb-10 mt-10">
          <Heading className=" text-white" data={ReasonHeading} isTop isBg></Heading>
        </div>
        {/* <div className="centerLine border-r-[1px] border-[#dddddd3b]  flex w-1/2 h-[100px] absolute bottom-[-25px] left-0 justify-start items-start"></div> */}
        <div
          data-aos="fade-up"
          className="absolute border-r-[1px] border-[#aaaaaa3b]   flex w-1/2 h-[1673px] md:h-[2000px]  lg:h-[1450px] 2xl:h-[1535px] justify-start items-start"
        ></div>
        <div>
          <div className="pt-20 pb-32 justify-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              className="pr-10 md:pr-0 order-1"
            >
              <Image
                width={1100}
                height={600}
                src="/assets/imgs/reason1.png"
                alt="img"
              />
            </div>
            
         
            <div
              data-aos="fade-left"
              className="order-2 pr-24 md:pr-0 order-2 -mt-4 p-10 md:p-20 flex flex-col justify-center items-center   bg-primary"
            >
              <h4 className="w-full text-left text-base md:text-2xl uppercase text-white font-semibold">
              Use Your Leftovers
              </h4>
              <div>
              <p className="w-100 md:w-[60%] lg:w-[80%] text-left text-sm md:text-base font-normal my-6 font-montserrat text-white">
              Tired of wasting food by throwing out leftovers? Make it a
                  thing of the past. 6DayMeals knows how many servings you have
                  leftover from every meal. It uses that information to create a
                  waste-free meal plan.
                </p>
              </div>
            </div>
            {/* 2nd  */}
            <div
              data-aos="fade-left"
              className=" pr-24 md:pr-0 order-4 lg:order-3 -mt-4 p-10 md:p-20 lg:pl-10 flex flex-col justify-center items-center   bg-primary"
            >
              <h4 className="w-full text-left text-base md:text-2xl uppercase text-white font-semibold">
                Add Your Recipes
              </h4>
              <div>
              <p className="w-100 md:w-[60%] lg:w-[80%] text-left text-sm md:text-base font-normal my-6 font-montserrat text-white">
                  You don&apos;t have to give up your favorite recipes to use
                  6DayMeals. If you have a recipe you love, you can add it to
                  the app. It will find the nutrient information for you, and
                  you can include the recipe in your plan anytime.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              className="pl-24 md:pl-0 order-3 lg:order-4 border-3 mt-4 md:-mt-10"
            >
              <Image
                width={1100}
                height={600}
                src="/assets/imgs/recipt.png"
                alt="img"
              />
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              className="pr-10 md:pr-0 order-5 mt-4 md:-mt-4"
            >
              <Image
                width={1100}
                height={600}
                src="/assets/imgs/reason2.png"
                alt="img"
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="500"
              className="order-6 -mt-4 p-10 md:p-24 2xl:p-6 flex flex-col justify-center items-center  bg-primary"
            >
              <h4 className="w-full text-left text-base md:text-2xl uppercase text-white font-semibold">
                Calculate Your Calories
              </h4>
              <div>
              <p className="w-100 md:w-[60%] lg:w-[80%] text-left text-sm md:text-base font-normal my-6 font-montserrat text-white">
                  Everyone needs a different amount of calories. What you need
                  depends on your personal goals, age, weight, and activity
                  levels. Make sure you&apos;re fueling your body correctly with
                  the app&apos;s calorie calculator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Shopping;
