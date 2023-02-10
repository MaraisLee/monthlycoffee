import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "pages/Sidebar";
import Home from "components/Home";
import Header from "pages/Header";
import ExpenseDetails from "pages/expenses/ExpenseDetails";
import Community from "pages/Community";
import AddExpense from "pages/expenses/AddExpense";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex h-[94vh] m-[3vh] overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/expense" element={<ExpenseDetails />} />
            <Route path="/community" element={<Community />} />
            <Route path="/addexpense" element={<AddExpense />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
