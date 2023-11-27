import { Col, Row } from "antd";
import Image from "next/image";
import React, { Children } from "react";

interface TextWithImageProps {
  children?: any;
  order?: Boolean;
  imgUrl?: string;
  radius?: Boolean;
  margin?: Boolean;
}

const TextWithImage: React.FC<TextWithImageProps> = ({
  children,
  order,
  imgUrl,
  radius,
  margin,
}) => {
  const backgroundStyle = {
    backgroundImage: `url(${imgUrl})`,
  };
  return (
    <div >
      <div className="mt-2 justify-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4">
        <div className="pr-10 md:pr-0 order-1">
          <Image
            width={1100}
            height={600}
            src="/assets/imgs/diet1.png"
            alt="img"
          />
        </div>
        <div className="height order-2 p-10  flex flex-col justify-center items-center  bg-bgGray">
          <div className="my-4">
            <h2 className=" w-full my-2 text-base md:text-2xl font-montserrat font-semibold uppercase">
              Macro Density
            </h2>
            <p className="w-4/5 text-sm md:text-lg font-light font-montserrat">
              Stick to you macros and hit your goals. Search by how much
              protein, carbs, or fat you want in each serving. Now, it&apos;s
              easy to stay on track with low-carb meal planning and more.
            </p>
          </div>
          <div className="my-4">
          <h2 className=" w-full my-2 text-base md:text-2xl font-montserrat font-semibold uppercase">
              Meal Type
            </h2>
            <p className="w-4/5 text-sm md:text-lg font-light font-montserrat">
              Plan every meal with ease. Sort your search by breakfast, lunch,
              and dinner. You can meal prep healthy, delicious food for every
              time of day.
            </p>
          </div>
          <div className="my-4">
          <h2 className=" w-full my-2 text-base md:text-2xl font-montserrat font-semibold uppercase">
              Ingredients
            </h2>
            <p className="w-4/5  text-sm md:text-lg font-light font-montserrat">
              Have a bunch of tomatoes? Craving some beef? Fitting more greens
              in your diet? Easily find recipes with specific ingredients that
              you want.
            </p>
          </div>
        </div>

        {/* 2nd  */}
        <div className="height order-4 md:order-3 -mt-10 p-10  flex flex-col justify-center items-center   bg-bgGray">
          <div className="my-2 lg:my-4">
          <h2 className=" w-full my-2 text-base md:text-2xl font-montserrat font-semibold uppercase">
              Special Diets
            </h2>
            <p className="w-4/5  text-sm md:text-lg font-light font-montserrat">
              Dietary restrictions and preferences are no problem with
              6DayMeals. Choose meals that are kosher, gluten-free, vegan, and
              more.
            </p>
          </div>
          <div className="my-4">
          <h2 className=" w-full my-2 text-base md:text-2xl font-montserrat font-semibold uppercase">
              User Ratings
            </h2>
            <p className="w-4/5  text-sm md:text-lg font-light font-montserrat">
              Meal planning should inspire and delight you. Look through recipes
              that users love and find your new favorite flavors.
            </p>
          </div>
          <div className="flex justify-start w-full my-4">
            <button className="bg-ternary rounded-btnRadius text-sm font-montserrat w-80 md:w-auto font-bold  md:px-14 py-4 text-textWhite">
              Join the waitlist
            </button>
          </div>
        </div>
        <div className="pl-10 md:pl-0 order-3 md:order-4 border-3 -mt-10">
          <Image
            width={1100}
            height={600}
            src="/assets/imgs/diet2.png"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default TextWithImage;
