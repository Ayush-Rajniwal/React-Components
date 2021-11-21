import { motion } from "framer-motion";
import React, { useState } from "react";
import "./TouchSlider.scss";

function TouchSlider() {
  const [value, setValue] = useState(0);

  const dragEndHandler = (e: Event, info: any) => {
    if (info.offset.x > 10) {
      setValue((val) => val + 1);
    } else if (info.offset.x < -10) {
      setValue((val) => val - 1);
    }
  };
  return (
    <div className="touch-slider">
      <span
        className="touch-slider__btn"
        style={{
          background: value < 0 ? "#b23d3c" : "#8cd867"
        }}
      >
        <span className="touch-slider__btn--left">-</span>
        <motion.span
          drag="x"
          onDragEnd={dragEndHandler}
          dragConstraints={{ left: 0, right: 0 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          whileTap={{ cursor: "grabbing" }}
          whileDrag={{
            scale: 1.4
          }}
          dragElastic={0.1}
          className="touch-slider__count"
          style={{
            background: value < 0 ? "#FE5C5C" : "#2fbf71"
          }}
        >
          {value}
        </motion.span>
        <span className="touch-slider__btn--right">+</span>
      </span>
    </div>
  );
}

export default TouchSlider;
