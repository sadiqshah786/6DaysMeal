import React from 'react';
import Heading from './common/heading';
import { BenifitsData } from '.';

interface BenefitProps {
  data: {
    title?: string;
    bgImg?: string;
    btnText?: string;
  }
}

const Benefits: React.FC<BenefitProps> = ({ data }) => {
  const backgroundStyle = {
    backgroundImage: `url(${data.bgImg})`,
  };

  return (
    <>
    <div className="overflow-hidden  benefits  w-full  flex items-center bg-cover  bg-center bg-top" style={backgroundStyle}>
      <div className='relative hero w-100 xl:w-[100%] text-center m-auto'>
      <div className="border-r-[1px] border-[#aaaaaa78] flex w-1/2 h-[130px] justify-start items-start"></div>
      <div className='desktop'>
      <Heading data={BenifitsData}/>
      </div>
      <div className={`"w-[50%]" } mob  m-auto`}>
      <p data-aos="fade-right" className={`text-[20px] md:text-[40px] text-white font-semibold py-4`}>
        {data.title}
      </p>
      </div>
        <div className='my-14'>
        <button className="bg-ternary rounded-btnRadius w-80 md:w-auto text-sm font-montserrat font-bold  md:px-14 py-4 text-textWhite">
              {data.btnText}
            </button>
        </div>
        <div className='relative'>
        <div className=" border-r-[1px] border-[#aaaaaa78] flex w-1/2 h-[80px] justify-start items-start"></div>
        </div>
      </div>
      </div>
      </>
  );
};

export default Benefits;
