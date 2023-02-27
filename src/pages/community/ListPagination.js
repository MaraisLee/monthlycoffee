import Pagination from "@mui/material/Pagination";
import React from "react";

const ListPagination = (props) => {
  const { count, page, onChange } = props;

  const handleChange = (event, value) => {
    onChange(value);
  };

  return <Pagination count={count} page={page} onChange={handleChange} size="large" showFirstButton showLastButton />;
};

export default ListPagination;
