import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "pages/Sidebar";
import Home from "components/home/Home";
import About from "components/About";
import Header from "pages/Header";
import Login from "pages/Login";
import EditInfo from "pages/EditInfo";
import ExpenseDetails from "pages/expenses/ExpenseDetails";
import Community from "pages/Community";
import AddExpense from "pages/expenses/AddExpense";
import Calendar from "pages/Calendar";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col-reverse h-[100vh] md:flex-row overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <section className="flex justify-center items-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/edit" element={<EditInfo />} />
              <Route path="/expense" element={<ExpenseDetails />} />
              <Route path="/community" element={<Community />} />
              <Route path="/addexpense" element={<AddExpense />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </section>
        </div>
      </div>
    </Router>
  );
};

export default App;
