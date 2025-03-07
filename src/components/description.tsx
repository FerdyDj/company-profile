import React from "react";
import { images } from "./image";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { motion } from "motion/react";
import Link from "next/link";

type Props = {
  clickNext: () => void;
  clickPrev: () => void;
  active: number;
};

const Description = ({ clickNext, clickPrev, active }: Props) => {
  return (
    <div className="grid place-items-start w-full bg-slate-50 relative rounded-tr-3xl rounded-br-3xl max-sm:rounded-tr-none max-sm:rounded-bl-3xl">
      <div className="uppercase text-sm absolute right-4 top-2 underline-offset-4 underline font-extrabold bg-amber-200">
        Kids Product Highlight
      </div>
      {images.map((elem, idx) => (
        <div
          className={
            idx === active
              ? `block w-full h-[80vh] object-cover transition-all duration-500 ease-in`
              : `hidden`
          }
          key={idx}
        >
          <motion.div
            initial={{
              opacity: idx === active ? 0 : 0.5,
              scale: idx === active ? 0.7 : 0.5
            }}
            animate={{
              opacity: idx === active ? 1 : 0.5,
              scale: idx === active ? 1 : 0.5
            }} 
            transition={{
              ease: "easeInOut",
              duration: 1,
              x: {duration: 1},
            }}
            className="w-full"
            >
          <div className="px-8 py-16 text-5xl font-extrabold">{elem.title}</div>
          <div className="leading-relaxed font-medium text-base tracking-wide h-40 italic px-8 text-gray-600">
            {elem.desc}
          </div>
          </motion.div>
          <Link href={"/Product"}>
          <button className="font-bold bg-gradient-to-r from-red-200 to-amber-200 text-gray-600 uppercase px-4 py-2 rounded-xl ml-8 my-24 shadow-xl hover:from-amber-200 hover:to-red-200">
            Read More
          </button>
          </Link>
          <div className="absolute bottom-1 w-full flex justify-center items-center">
            <div
              onClick={clickPrev}
              className="absolute bottom-2 -left-96 max-sm:bottom-0 cursor-pointer text-xl text-gray-500 hover:text-gray-700"
            >
              <FaChevronCircleLeft />
            </div>
            <div
              onClick={clickNext}
              className="absolute bottom-2 -left-40 cursor-pointer text-xl text-gray-500 hover:text-gray-700"
            >
              <FaChevronCircleRight />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;
