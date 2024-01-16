"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

const HoverImage = ({
  intialImage,
  showImage,
}: {
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
        sizes="100vw"
        priority
        className={`absolute opacity-${
          isHovering ? 0 : 100
        } transition-opacity duration-500 ease-in-out`}
      />
      <Image
        src={showImage}
        alt="Actual image of Joris"
        sizes="100vw"
        priority
        className={`opacity-${
          isHovering ? 100 : 0
        } transition-opacity duration-500 ease-in-out`}
      />
    </div>
  );
};

export default HoverImage;
