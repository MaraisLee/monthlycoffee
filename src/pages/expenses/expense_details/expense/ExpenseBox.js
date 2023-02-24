import React, { useEffect, useState } from "react";
import moment from "moment";
import axios from "api/axios";
import ExpenseList from "./ExpenseList";
import ExpDetailModal from "./ExpDetailModal";

const ExpenseBox = ({ startDate }) => {
  const [list, setList] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [listId, setListId] = useState("");

  const getPosts = async () => {
    const params = {
      date: moment(startDate).format("YYMM"),
    };
    const posts = await axios.get("expenses", { params });
    console.log(moment(startDate).format("YYMM"));
    console.log(posts);
    setList(posts.data);
  };
  useEffect(() => {
    getPosts();
  }, [startDate, modalIsOpen]);
  const clickData = list.filter((item) => item.id === listId);

  return (
    <>
      <div className="space-y-5">
        {list
          .sort((a, b) => {
            if (a.date > b.date) return -1;
            if (a.date < b.date) return 1;
            return 0;
          })
          .map((item) => {
            return (
              <ExpenseList
                key={item.id}
                item={item}
                setModalIsOpen={setModalIsOpen}
                setListId={setListId}
              />
            );
          })}
      </div>
      <ExpDetailModal
        clickData={clickData}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
    </>
  );
};

export default ExpenseBox;
