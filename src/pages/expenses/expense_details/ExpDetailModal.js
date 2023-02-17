import React from "react";
import Modal from "react-modal";
import ExpDetailModalCss from "styles/ExpenseModalCss";

const ExpDetailModal = ({ modalIsOpen, setModalIsOpen }) => {
  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: "99",
      backgroundColor: "transparent",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "40%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "transparent",
      border: "none",
    },
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      style={customStyles}
    >
      {/* <ExpDetailModalCss> */}
      <div className="bg-stone-100 p-10">
        <div className="flex justify-between">
          <div>
            <span>지출</span> - <span>카드</span>
          </div>
          <p className="text-right">2023/02/17</p>
        </div>
        <p className="my-7 text-3xl font-bold text-center">MONTYLY COFFEE</p>
        <hr className="border-black border-dashed" />
        <div className="m-5 flex justify-between items-center text-2xl">
          <div className="flex flex-col items-center">
            <span className="font-bold">아메리카노</span>
            <span className="text-lg">스타벅스</span>
          </div>
          <span className="font-bold">5,500원</span>
        </div>
        <hr className=" border-black border-dashed" />
        <div className="my-5 flex flex-col gap-3">
          <span className="text-lg text-blue-600 text-right">
            #신맛 #TALK #멕시코
          </span>
          <span className="text-lg">
            깔끔하고 강렬한 에스프레소를 부드럽지만 시원하게 즐길 수 있는 커피!
          </span>
        </div>
        <hr className=" border-black border-dashed" />
        <div className="mt-3">
          <button>커뮤니티 등록</button>
        </div>
      </div>
      {/* </ExpDetailModalCss> */}
      {/* <button onClick={() => setModalIsOpen(false)}>Modal close</button> */}
    </Modal>
  );
};

export default ExpDetailModal;
