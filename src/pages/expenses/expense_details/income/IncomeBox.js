import React, { useEffect, useState } from "react";
import axios from "api/axios";
import moment from "moment";

const IncomeBox = ({ startDate }) => {
  const [list, setList] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [listId, setListId] = useState("");

  const getPosts = async () => {
    const params = {
      date: moment(startDate).format("YYYY-MM"),
    };
    const posts = await axios.get("expenses", { params });
    console.log(posts);
    setList(posts.data);
  };
  useEffect(() => {
    getPosts();
  }, []);
  const clickData = list.filter((item) => item.id === listId);

  return (
    <>
      {/* <div className="space-y-5">
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
      </div> */}
    </>
  );
};

export default IncomeBox;
