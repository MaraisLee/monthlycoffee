import styled from "@emotion/styled";

export const SwiperCss = styled.div`
  --swiper-navigation-size: 23px;
  .swiper {
    width: 100%;
    height: 100%;
    &-wrapper,
    &-container {
      width: 62rem;
      margin: 0;
    }
    &-container {
      margin: 0 3.2rem;
    }
    &-button-disabled {
      visibility: hidden;
    }
    &-button-next {
      padding: 0 10px;
    }
    &-button-prev {
      padding-right: 10px;
    }
    &-button-next,
    &-button-prev {
      display: block;
      color: black;
    }
    .swiperSlide {
      text-align: center;
      font-size: 15px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .add{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        &:active {
          > input{
            display:block
          }
        }
      }
      img {
        display: block;
        height: 50px;
        padding: 10px;
        margin: 15px 0;
        border: 2px solid black;
        border-radius: 50%;
        object-fit: cover;
      }
      input[type="text"]{
        width:80%;
        border:1px solid black;
        display:none;
      }
      }
      // &:active  {
      //   background: yellow;
      // }
    }
  }
`;
