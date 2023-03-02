import React, { useEffect, useState } from "react";
import moment from "moment";
import axios from "api/axios";
import ExpenseList from "./ExpenseList";
import ExpDetailModal from "./ExpDetailModal";
import NoList from "../NoList";

const ExpenseBox = ({ startDate }) => {
  const [list, setList] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [listId, setListId] = useState("");
  const [updateBt, setUpdateBt] = useState(1);

  const getPosts = async () => {
    // console.log(startDate);
    const params = {
      date: moment(startDate).format("YYMM"),
    };
    const posts = await axios.get("expenses", { params });
    console.log(moment(startDate).format("YYMM"));
    setList(posts.data);
  };
  useEffect(() => {
    getPosts();
  }, []);
  useEffect(() => {
    getPosts();
  }, [startDate, modalIsOpen, updateBt]);
  const clickData = list.filter((item) => item.id === listId);
  // console.log(list);
  return (
    <>
      <div className="space-y-5">
        {list.length > 0 ? (
          list
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
                  updateBt={updateBt}
                  setUpdateBt={setUpdateBt}
                />
              );
            })
        ) : (
          <NoList />
        )}
      </div>
      <ExpDetailModal
        clickData={clickData}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        updateBt={updateBt}
        setUpdateBt={setUpdateBt}
      />
    </>
  );
};

export default ExpenseBox;
