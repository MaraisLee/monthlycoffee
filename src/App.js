import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// common
import Home from "components/main/Home";
import Topbar from "components/main/Topbar";

function App() {
  return (
    <Router>
      <div className="flex ">
        <Topbar />
        <Routes>
          <Route exact path="/" element={Home} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
