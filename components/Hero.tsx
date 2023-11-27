import { Image } from 'antd';
import React from 'react';

interface HeroProps {
  data: {
    title1?: string;
    title2?: string;
    bgImg?: string;
    bg?: boolean;
  }
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const backgroundStyle = {
    backgroundImage: `url(${data.bgImg})`, // Use the provided bgImg URL
  };

  const defaultBackgroundClass = !data.bg ? "hero-section" : "mob-section";

  return (
   
   <div className={`overflow-x-hidden ${defaultBackgroundClass} -mt-[0px] sm:-mt-[0px] md:-mt-[50px] lg:-mt-[50px] xl:-mt-[50px]  h-[325px] sm:h-[325px] md:h-[500px] xl:h-[900px] bg-center bg-top w-full flex items-center bg-cover`} style={backgroundStyle}>
      <div data-aos="fade-up" className="mx-auto text-center">
        <h1 className="text-[30px] md:text-mainHeading text-textWhite leading-[39px] md:leading-mainLeading font-montserrat font-bold">
          {data.title1}
          <br />
          {data.title2}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
