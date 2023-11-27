import React from "react";

interface AboutProps {
  data: {
    title?: string | undefined;
    subtitle?: string | undefined;
    btnText?: string | undefined;
    isSmall?: boolean | undefined;
    isLine?: boolean;
    lineHeight?: string | undefined;
    isWidth?: boolean| undefined;
    isAboutHeading?: boolean
    isTop?: boolean
  };
  children?: any;
  // isTop?: boolean;
  

}

const About: React.FC<AboutProps> = ({ children, data }) => {

   const addClass = (classNames:any)=>{
    if(classNames){
      return "deal";
    }
    else{
      return "meal"
    }
   }
  return (
   
    <div className="overflow-hidden  relative hero w-100  text-center m-auto">
     <div>
     <div
        data-aos="fade-down"
        className={`${data.isLine? "" : "hidden"} mb-6 md:mb-6 border-r-[1px]  flex w-1/2  h-[60px] md:h-[90px] justify-start items-start`}></div>
     <h1 data-aos="fade-right" className=" desktop text-3xl font-semibold py-4">
        {data.title}
      </h1>
      <div className={ `${addClass(data.isAboutHeading) ? "meal" : "deal"} ${data.isTop && "lineTop"} mob ${data.isWidth ? "w-[65%]" : "w-[50%]"} m-auto`}>
      <p data-aos="fade-right" className="text-[20px] md:text-[40px] font-semibold py-4">
        {data.title}
      </p>
      </div>
      <div
        data-aos="fade-up"
        className={`mt-6 border-r-[1px]  flex w-1/2 h-[40px] ${data.lineHeight ? "md:h-[60px]" : "md:h-[120px]"} justify-start items-start`}
      ></div>
      <div className={`${data.isWidth ? "w-[90%] xl:w-[70%] 2xl:[w-70%]" : "w-[90%] md:w-[90%] xl:w-[60%] 2xl:[w-70%]"  } m-auto my-6 md:mt-4`} data-aos="fade-up">
        <p className=" text-base md:text-subheading leading-normal md:leading-subLeading font-medium">
          {data?.subtitle}
        </p>
        <div className="px-10 my-8 text-sm hidden md:block">{children}</div>
        <div className="mt-12 ">
          <button className={`bg-bgbtn rounded-btnRadius text-sm font-montserrat font-semibold ${data.isSmall ? 'w-full md:w-[20%] lg:[30%] ' : 'w-[266px]' }  px-4 py-4 text-textWhite`}>
            {data.btnText}
          </button>
        </div>
        <div className={`my-6 border-r-[1px]  flex w-1/2 ${data.lineHeight ? "h-[100px]" : "h-[120px]"}  justify-start items-start`}></div>
      </div>
     </div>
    </div>
  );
};

export default About;
