
import { Routes, Route } from "react-router-dom";
import NavBar from "./Navbar";
import Home from "./FoodieHome";
import About from "./About";
import AddPost from "./AddPost";
import Food from "./Food";
import SinglePost from "./SinglePost";
const HomePortal = () => {
    return (
        <div className="homeportal">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/add-post" element={<AddPost />} />
                <Route path="/posts" element={<Food />} />
                <Route path="/posts/:_id" element={<SinglePost />} />
            </Routes>
        </div>);
}

export default HomePortal;