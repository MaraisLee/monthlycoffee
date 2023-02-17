import styled from "@emotion/styled";

const ExpDetailModalCss = styled.div`
  .modal {
    position: relative;
    /* background-color: white; */
    &:after {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: 0.5em; /*desired tooth height*/
      background-size: 1em 100%; /*width (1st num) must be twice tooth height*/
      background-position: center; /*optional: used for symmetrical edges*/
      //      outline:1px solid red;  /*use this for testing*/
    }
  }
  .modal::after {
    top: 100%;
    background: linear-gradient(135deg, $color 33.333%, transparent 0),
      linear-gradient(-135deg, $color 33.333%, transparent 0);
  }
`;

export default ExpDetailModalCss;
