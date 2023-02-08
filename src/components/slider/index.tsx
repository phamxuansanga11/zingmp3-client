import SliderItem from "./sliderItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

// import Swiper core and required modules

const slider = [1, 2, 3, 4, 5, 6];

const Slider = () => {
  return (
    <div className="list__song mt-[32px]">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1700,
          disableOnInteraction: false,
        }}
      >
        {slider.map((item) => (
          <SwiperSlide>
            <SliderItem indexSlider={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
