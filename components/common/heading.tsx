import React from 'react'


interface HeadingProps {
    data: {
      title?: string;
      subtitle?: string;
      btnText?: string;
      isColor?: boolean;
      isLines?: boolean;
      isTop?: boolean;
    };
    children?:any;
    className?: string;
    isTop?: boolean;
    isBg?: boolean;
    isWidth?: boolean;
  }
  const Heading: React.FC<HeadingProps> = ({data,children,className,isTop,isBg,isWidth }) => {
    const titleClass = className && `${className}` ;
  return (
    <div>
      <div className={`overflow-x-hidden  ${data.isColor ? "grayColor" : "whiteColor"} hero w-100  text-center m-auto`}>
      <h1 data-aos="fade-right" className={`${titleClass} desktop text-3xl font-semibold py-4`}>
        {data.title}
      </h1>

      {/* ${isTop && "lineTopShopping" } */}
     
     <div className='relative'>
     <div className={`${data.isTop && "lineTopShopping headingLines"} ${data.isLines ? "whiteLines headingLines" : "headingLines"} mob ${isWidth ? "w-[80%]" : "w-[50%]" } m-auto`}>
      <p data-aos="fade-right" className={`${titleClass} text-[20px] md:text-[40px] ${data.isColor ? "grayColor" : "whiteColor"} font-semibold py-4`}>
        {data.title}
      </p>
      </div>
     </div>
      <div className='px-10 
      text-md md:text-lg'>{children}</div>
      </div>

    </div>
  )
}

export default Heading
