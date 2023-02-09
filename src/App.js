import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// common
import Home from "components/main/Home";
import Sidebar from "components/common/Sidebar";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={Home} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
