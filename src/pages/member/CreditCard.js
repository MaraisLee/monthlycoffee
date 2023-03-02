import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/es/styles-compiled.css";
import { useSelector } from "react-redux";

const CreditCard = () => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  // const handleInputChange = (evt) => {
  //   const { name, value } = evt.target;

  //   setState((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleInputFocus = (evt) => {
  //   setState((prev) => ({ ...prev, focus: evt.target.name }));
  // };
  
  // 랜덤으로 숫자 지정 
  // 추후에 실제카드 연동가능하게
  const uid = new Date().getTime();
  const userNickname = useSelector((state) => state.user.nickname);
  return (
    <div id="PaymentForm">
      <Cards
        number={uid}
        expiry={state.expiry}
        cvc={state.cvc}
        name={userNickname}
        focused={state.focus}
      />
      {/* <form> */}
      {/* <input
          style={{ border: "1px solid black" }}
          type="number"
          name="number"
          placeholder="Card Number"
          value={state.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        /> */}
      {/* <input
          style={{ border: "1px solid black" }}
          type="text"
          name="name"
          placeholder="Name"
          value={userNickname}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        /> */}
      {/* </form> */}
    </div>
  );
};

export default CreditCard;
