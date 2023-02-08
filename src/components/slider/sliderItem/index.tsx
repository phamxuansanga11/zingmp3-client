import React from "react";

const SliderItem = ({ indexSlider }: { indexSlider: number }) => {
  return (
    <div className="slider__item h-[100%] ">
      <img
        src={require(`../../../assets/img/slider${indexSlider}.jpg`)}
        alt="zingmp3"
        className="object-contain h-[100%] rounded-[5px]"
      />
    </div>
  );
};

export default SliderItem;
