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
  intialImage: string;
  showImage: string;
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
        width={width}
        height={height}
        priority
        className={`absolute opacity-${
          isHovering ? 0 : 100
        } transition-opacity duration-500 ease-in-out ${
          rounded ? "rounded-[1rem]" : ""
        }`}
      />
      <Image
        src={showImage}
        alt="Actual image of Joris"
        width={width}
        height={height}
        priority
        className={`opacity-${
          isHovering ? 100 : 0
        } transition-opacity duration-500 ease-in-out ${
          rounded ? "rounded-[1rem]" : ""
        }`}
      />
    </div>
  );
};

export default HoverImage;
