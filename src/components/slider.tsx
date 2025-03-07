"use client";

import React, { useEffect, useState } from "react";
import { images } from "./image";
import Image from "next/image";
import Description from "./description";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };

  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    <div className="grid place-items-center max-sm:grid-cols-1 grid-cols-2 w-full mx-auto max-w-5xl shadow-2xl rounded-3xl">
      <div className="w-full flex justify-center items-center gap-4 transition-transform ease-in duration-500 rounded-3xl">
        {images.map((pic, idx) => (
          <div
            className={
              idx === activeImage
                ? `block w-full h-[80vh] object-cover transition-all duration-500 ease-in`
                : `hidden`
            }
            key={idx}
          >
            <Image
              src={pic.src}
              alt=""
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-tl-3xl rounded-bl-3xl max-sm:rounded-tr-3xl max-sm:rounded-bl-none"
            ></Image>
          </div>
        ))}
      </div>
      <Description
        active={activeImage}
        clickNext={clickNext}
        clickPrev={clickPrev}
      />
    </div>
  );
};

export default Slider;
