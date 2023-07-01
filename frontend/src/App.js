import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Courses from "./Pages/Courses/Courses";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
