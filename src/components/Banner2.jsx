import React from "react";
import Banner from "./Banner"; 

const Banner2 = () => {
  return (
    <Banner
      imageSrc="./3.webp" 
      title="  Your Health, Our Priority-Stay Strong & Fit"
      description="  A healthy lifestyle starts with the right mindset. Join us and take the first step toward a stronger and happier you!
"
      buttonText="Learn More"
    />
  );
};

export default React.memo(Banner2);
