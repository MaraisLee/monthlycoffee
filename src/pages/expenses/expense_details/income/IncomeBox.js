import React, { useEffect, useState } from "react";
import axios from "api/axios";
import moment from "moment";
import IncomeList from "./IncomeList";
import NoList from "../NoList";

const IncomeBox = ({ startDate }) => {
  const [list, setList] = useState([]);
  const [listId, setListId] = useState("");
  const [updateBt, setUpdateBt] = useState(1);
  const [edit, setEdit] = useState(false);

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
  useEffect(() => {
    getPosts();
  }, [startDate, updateBt]);
  // const clickData = list.filter((item) => item.id === listId);

  return (
    <>
      <div className="space-y-5">
        {list.length > 1 ? (
          list
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
                  updateBt={updateBt}
                  setUpdateBt={setUpdateBt}
                />
              );
            })
        ) : (
          <NoList />
        )}
      </div>
    </>
  );
};

export default IncomeBox;
