import React, { useState } from "react";
import Modal from "react-modal";
import DetailEdit from "./DetailEdit";
import DetailInfo from "./DetailInfo";
const ExpDetailModal = ({
  clickData,
  updateBt,
  setUpdateBt,
  modalIsOpen,
  setModalIsOpen,
}) => {
  const [edit, setEdit] = useState(false);
  const [openCommu, setOpenCommu] = useState(false);
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
  const modalData = clickData[0];
  return (
    <Modal
      isOpen={modalIsOpen}
      ariaHideApp={false}
      onRequestClose={() => {
        setModalIsOpen(false);
        setEdit(false);
        setOpenCommu(false);
      }}
      style={customStyles}
    >
      <div className="bg-stone-100 p-7 overflow-x-auto">
        {edit ? (
          <DetailEdit
            modalData={modalData}
            setModalIsOpen={setModalIsOpen}
            updateBt={updateBt}
            setUpdateBt={setUpdateBt}
            edit={edit}
            setEdit={setEdit}
          />
        ) : (
          <DetailInfo
            modalData={modalData}
            setModalIsOpen={setModalIsOpen}
            edit={edit}
            setEdit={setEdit}
            openCommu={openCommu}
            setOpenCommu={setOpenCommu}
          />
        )}
      </div>
    </Modal>
  );
};
export default ExpDetailModal;
