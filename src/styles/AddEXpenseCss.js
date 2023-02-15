import styled from "@emotion/styled";
import { txtShadow } from "utils/colors";

export const VioletBt = styled.button`
  width: 20%;
  border: 1px solid black;
  text-align: center;
  background: #8b8fc8;
  text-shadow: ${txtShadow};
  font-size: 20px;
  color: white;
  padding: 6px;
  margin-bottom: 8px;
`;
export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  textarea {
    border-top: 1px solid #bbb;
    padding: 30px;
    margin-top: 15px;
  }
  img {
    display: inline-block;
    max-width: 100px;
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
`;
