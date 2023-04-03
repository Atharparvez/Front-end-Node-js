import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/login";
import Signup from "./component/signUp";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from "./component/FoodieHome";
import HomePortal from "./component/Homeportal";
import "./App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/home/*" element={<HomePortal/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
