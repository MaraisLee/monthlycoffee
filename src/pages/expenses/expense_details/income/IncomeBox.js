import React, { useEffect, useState } from "react";
import axios from "api/axios";
import moment from "moment";
import IncomeList from "./IncomeList";

const IncomeBox = ({ startDate }) => {
  const [list, setList] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [listId, setListId] = useState("");

  const getPosts = async () => {
    const params = {
      date: moment(startDate).format("YYMM"),
    };
    const posts = await axios.get("incomes/list", { params });
    console.log(posts.data[0].income);
    setList(posts.data[0].income);
  };
  useEffect(() => {
    getPosts();
  }, []);
  // const clickData = list.filter((item) => item.id === listId);

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
              <IncomeList
                key={item.id}
                item={item}
                setModalIsOpen={setModalIsOpen}
                setListId={setListId}
              />
            );
          })}
      </div>
    </>
  );
};

export default IncomeBox;
