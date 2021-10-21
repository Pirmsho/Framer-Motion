import React from "react";
import { motion, useAnimation } from "framer-motion";

export default function Box1() {
  const control = useAnimation();
  return (
    <div className="box-container">
      <button
        onClick={() => {
          control.start({
            x: 1000,
            transition: { duration: 2 },
          });
        }}
      >
        Move Right
      </button>
      <button
        onClick={() => {
          control.start({
            x: 0,
            transition: { duration: 2 },
          });
        }}
      >
        Move Left
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: "100%",
            transition: { duration: 1 },
          });
        }}
      >
        Circle
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: 0,
            transition: { duration: 1 },
          });
        }}
      >
        Square
      </button>

      <motion.div className="box" animate={control}></motion.div>
    </div>
  );
}
