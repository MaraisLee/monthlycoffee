import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { SwiperCss } from "styles/SwiperCss";

const SwiperCategory = () => {
  const path = process.env.PUBLIC_URL;
  const testArr = [
    {
      name: "추가",
      img: `${path}/images/plus.png`,
    },
    {
      name: "아메리카노",
      img: `${path}/images/logo.png`,
    },
    {
      name: "카페라떼",
      img: `${path}/images/logo.png`,
    },
    {
      name: "바닐라라떼",
      img: `${path}/images/logo.png`,
    },
    {
      name: "초코라떼",
      img: `${path}/images/logo.png`,
    },
    {
      name: "카푸치노",
      img: `${path}/images/logo.png`,
    },
  ];

  const [arr, setArr] = useState(testArr);
  console.log(arr[0].img);
  return (
    <SwiperCss>
      <Swiper
        className="mySwiper swiper"
        slidesPerView={1}
        spaceBetween={5}
        grabCursor={true}
        navigation={true}
        modules={[Navigation]}
        // pagination={{
        //   clickable: true,
        // }}
        // 반응형 체크
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
      >
        {/* map 추후 적용 */}
        <SwiperSlide className="swiperSlide">
          <img src={arr[0].img} alt="" />
          {arr[0].name}
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={arr[1].img} alt="" />
          {arr[1].name}
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={arr[1].img} alt="" />
          {arr[2].name}
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={arr[1].img} alt="" />
          {arr[3].name}
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={arr[1].img} alt="" />
          {arr[4].name}
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={arr[1].img} alt="" />
          {arr[4].name}
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={arr[1].img} alt="" />
          {arr[4].name}
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={arr[1].img} alt="" />
          {arr[4].name}
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={arr[1].img} alt="" />
          {arr[4].name}
        </SwiperSlide>
      </Swiper>
    </SwiperCss>
  );
};

export default SwiperCategory;
