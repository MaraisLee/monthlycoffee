import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "components/Sidebar";
import Home from "pages/home/Home";
import Header from "components/Header";
import Login from "pages/member/Login";
import EditInfo from "pages/member/EditInfo";
import ExpenseDetails from "pages/expenses/expense_details/ExpenseDetails";
import Community from "pages/community/Community";
import AddExpense from "pages/expenses/addexpense/AddExpense";
import { useSelector } from "react-redux";
import NotFound from "components/NotFound";
import PrivateRoute from "components/PrivateRoute";
import Statistics from "pages/statistics/Statistics";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const authenticated = useSelector((state) => state.user.authenticated);
  return (
    <Router>
      <div className="flex flex-col-reverse md:flex-row">
        {authenticated ? (
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        ) : null}
        <div
          className={`relative flex flex-col flex-1 overflow-x-hidden ${
            authenticated ? "md:ml-[20%]" : ""
          }`}
        >
          {authenticated ? (
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          ) : null}
          <section className="flex justify-center items-center">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route element={<PrivateRoute />}>
                <Route exact path="/home" element={<Home />} />
                <Route path="/edit" element={<EditInfo />} />
                <Route path="/expense" element={<ExpenseDetails />} />
                <Route path="/community" element={<Community />} />
                <Route path="/addexpense" element={<AddExpense />} />
                <Route path="/statistics" element={<Statistics />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </section>
        </div>
      </div>
    </Router>
  );
};
export default App;
