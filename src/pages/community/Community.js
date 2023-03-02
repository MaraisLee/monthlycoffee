import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { txtShadow } from "utils/colors";
import CommunityModal from "./CommunityModal";
import CommunityPost from "./CommunityPost";
import axios from "api/axios";
import ListPagination from "./ListPagination";
import { Alert, Snackbar } from "@mui/material";

const Community = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [list, setList] = useState([]);
  const [listDetail, setListDetail] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [like, setLike] = useState(false);

  const [toast, setToast] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setToast(false);
  };

  const getPosts = async () => {
    const params = {
      page: page - 1,
      size: 9,
    };
    const posts = await axios.get("posts", { params });
    console.log(posts);
    setPageCount(posts.data.totalPages);
    setList(posts.data.content);
  };
  useEffect(() => {
    getPosts();
  }, []);
  useEffect(() => {
    getPosts();
  }, [page, like]);
  // console.log(list);

  const clickData = list.filter((item) => item.id === listDetail.id);

  const handlePageChange = (value) => {
    setPage(value);
  };
  // console.log(page);
  return (
    <div className="block m:auto md:my-10">
      <span
        className="text-4xl ml-5 font-bold text-yellow-400"
        style={{ textShadow: `${txtShadow}` }}
      >
        커뮤니티
      </span>
      <div className="border border-black my-5 px-24 py-5 shadow-lg">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {list
            .sort((a, b) => {
              if (a.id > b.id) return -1;
              if (a.id < b.id) return 1;
              return 0;
            })
            .map((item) => (
              <CommunityPost
                key={item.id}
                item={item}
                setModalIsOpen={setModalIsOpen}
                setListDetail={setListDetail}
                like={like}
              />
            ))}
        </div>
      </div>
      <CommunityModal
        listDetail={listDetail}
        modalIsOpen={modalIsOpen}
        clickData={clickData}
        setListDetail={setListDetail}
        setModalIsOpen={setModalIsOpen}
        like={like}
        setLike={setLike}
        setToast={setToast}
      />
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={toast}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          댓글이 등록되었습니다!
        </Alert>
      </Snackbar>
      <div className="flex justify-center">
        <ListPagination
          count={pageCount}
          page={page}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Community;
