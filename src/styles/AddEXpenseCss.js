import styled from "@emotion/styled";
import { yellow } from "@mui/material/colors";
import { txtShadow, yellowcolor } from "utils/colors";

export const VioletBt = styled.button`
  width: 20%;
  border: 1px solid black;
  text-align: center;
  background: ivory;
  text-shadow: ${txtShadow};
  font-size: 20px;
  color: white;
  padding: 6px;
  margin-bottom: 8px;
  &.active {
    border: 2px solid black;
    background: #8b8fc8;
  }
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
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #bbb;
  align-items: center;
  padding: 25px;
  white-space: nowrap;
`;

export const CustomBt = styled.button`
  width: 90px;
  border: 1px solid black;
  text-align: center;
  background: black;
  font-size: 14px;
  color: white;
  padding: 6px;
  margin-bottom: 8px;
  &.active {
    color: black;
    font-weight: 600;
    border: 2px solid black;
    background: ${yellowcolor};
  }
`;
