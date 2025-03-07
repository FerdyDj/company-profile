"use client";

import { motion, useInView } from "motion/react";
import React, { useRef } from "react";

export default function FromRight({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: 100,
      }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
      transition={{
        duration: 2,
      }}
    >
      {children}
    </motion.div>
  );
}