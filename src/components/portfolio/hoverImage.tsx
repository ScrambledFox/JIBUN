"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

const HoverImage = ({
  width,
  height,
  rounded,
  intialImage,
  showImage,
}: {
  width: number;
  height: number;
  rounded?: boolean;
  intialImage: StaticImageData;
  showImage: StaticImageData;
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const onMouseEnter = () => {
    setIsHovering(true);
  };

  const onMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="relative"
    >
      <Image
        src={intialImage}
        alt="AI genereated image of Joris"
        sizes={"100vw"}
        priority
        className={` z-10 absolute peer opacity-100 hover:opacity-0 transition-opacity duration-500 ease-in-out ${
          rounded ? "rounded-[1rem]" : ""
        }`}
      />
      <Image
        src={showImage}
        alt="Actual image of Joris"
        sizes={"100vw"}
        priority
        className={`opacity-0 peer-hover:opacity-100 transition-opacity duration-500 ease-in-out ${
          rounded ? "rounded-[1rem]" : ""
        }`}
      />
    </div>
  );
};

export default HoverImage;
