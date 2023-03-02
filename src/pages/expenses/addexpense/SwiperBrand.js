import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { SwiperCss } from "styles/SwiperCss";
import { Radio } from "@mui/joy";

const SwiperBrand = ({ brand, setBrand }) => {
  const path = process.env.PUBLIC_URL;
  const testArr = [
    {
      id: "스타벅스",
      name: "스타벅스",
      img: `${path}/images/logo.png`,
    },
    {
      name: "투썸플레이스",
      img: `${path}/images/logo.png`,
    },
    {
      name: "이디아",
      img: `${path}/images/logo.png`,
    },
    {
      name: "빽다방",
      img: `${path}/images/logo.png`,
    },
    {
      name: "파스쿠치",
      img: `${path}/images/logo.png`,
    },
    {
      name: "파스쿠치",
      img: `${path}/images/logo.png`,
    },
  ];

  const handleBrand = (e) => {
    setBrand(e.target.value);
    // clicked.current.style =
    //   "width:10px; border:2px solid blue; background: red";
  };

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
          // 640: {
          //   slidesPerView: 2,
          //   spaceBetween: 20,
          // },
          0: {
            slidesPerView: 5,
            spaceBetween: 20,
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
        </SwiperSlide>
        {/* map 추후 적용 */}
        {testArr.map((item, id) => {
          return (
            <SwiperSlide className="swiperSlide" key={id}>
              <img src={item.img} alt="" />
              <Radio
                variant="plain"
                label={item.name}
                overlay={true}
                name="brand"
                value={item.name}
                onClick={handleBrand}
                sx={{ paddingRight: 3 }}
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

export default SwiperBrand;
