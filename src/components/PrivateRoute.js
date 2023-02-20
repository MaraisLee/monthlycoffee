import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const authenticated = useSelector((state) => state.user.authenticated);

  return authenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/" {...alert("접근할 수 없는 페이지입니다.")} />
  );
};
export default PrivateRoute;
