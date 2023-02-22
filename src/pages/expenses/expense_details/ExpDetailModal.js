import React, { useState } from "react";
import Modal from "react-modal";
import DetailEdit from "./DetailEdit";
import DetailInfo from "./DetailInfo";
const ExpDetailModal = ({ clickData, modalIsOpen, setModalIsOpen }) => {
  const [edit, setEdit] = useState(false);
  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: "99",
      backgroundColor: "rgba(0, 0, 0, 0.4)",
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
      ariaHideApp={false}
      onRequestClose={() => setModalIsOpen(false)}
      style={customStyles}
    >
      <div className="bg-stone-100 p-10">
        {edit ? (
          <DetailEdit
            setModalIsOpen={setModalIsOpen}
            edit={edit}
            setEdit={setEdit}
          />
        ) : (
          <DetailInfo
            clickData={clickData}
            setModalIsOpen={setModalIsOpen}
            edit={edit}
            setEdit={setEdit}
          />
        )}
      </div>
    </Modal>
  );
};
export default ExpDetailModal;
