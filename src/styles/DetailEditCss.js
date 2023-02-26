import styled from "@emotion/styled";

const DetailEditCss = styled.div`
  .input-datepicker {
    /* background: transparent; */
    width: 7rem;
    text-align: center;
  }
  .uploadImg {
    display: flex;
    justify-content: end;
    img {
      display: inline-block;
      max-width: 70px;
      align-self: flex-end;
    }
    label {
      display: inline-block;
      font-size: inherit;
      line-height: normal;
      vertical-align: middle;
      cursor: pointer;
      align-self: flex-end;
    }
    input[type="file"] {
      position: absolute;
      width: 0;
      height: 0;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }
  }
  .price {
    width: 10rem;
  }
`;

export default DetailEditCss;
