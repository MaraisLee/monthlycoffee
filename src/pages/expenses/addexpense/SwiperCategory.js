import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { SwiperCss } from "styles/SwiperCss";
import { Radio } from "@mui/joy";

const SwiperCategory = ({ category, setCategory }) => {
  const path = process.env.PUBLIC_URL;
  const testArr = [
    {
      name: "아메리카노",
      img: `${path}/images/americano.jpg`,
    },
    {
      name: "카페라떼",
      img: `${path}/images/americano.jpg`,
    },
    {
      name: "바닐라라떼",
      img: `${path}/images/americano.jpg`,
    },
    {
      name: "초코라떼",
      img: `${path}/images/americano.jpg`,
    },
    {
      name: "카푸치노",
      img: `${path}/images/logo.png`,
    },
    {
      name: "카푸치노",
      img: `${path}/images/logo.png`,
    },
  ];

  const [arr, setArr] = useState(testArr);
  // useEffect(() => {}, [category]);
  console.log(category);
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
        <SwiperSlide className="swiperSlide">
          <img src={`${path}/images/plus.png`} alt="" />
          추가
          <input
            type="text"
            value={category}
            onClick={(e) => setCategory(e.target.value)}
          />
        </SwiperSlide>
        {/* map 추후 적용 */}
        {arr.map((item, index) => {
          return (
            <SwiperSlide className="swiperSlide" key={index}>
              <img src={item.img} alt="" />
              <Radio
                variant="plain"
                label={item.name}
                overlay="true"
                value={item.name}
                onClick={(e) => setCategory(e.target.value)}
                // slotProps={{
                //   action: ({ checked }) => ({
                //     sx: {
                //       background: checked ? "yellow" : "blue",
                //     },
                //   }),
                // }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SwiperCss>
  );
};

export default SwiperCategory;
