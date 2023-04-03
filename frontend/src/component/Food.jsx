import Banner from "./Banner";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Food = () => {

    let [posts, setPosts] = useState([])

    useEffect(() => {
        let fetchData = async () => {
            let res = await axios.get('http://localhost:4000/posts')
            let data = await res.data
            setPosts(data)
        }
        fetchData()
    }, [])

    let title = "All Posts"
    return (

        <div className="post">
            <Banner data={title} />
            {/* <div className="alldata">
                {
                    posts.map((data) => (
                        <div className="post">
                            <img src={data.image} alt="" />
                            <h1>{data.author}</h1>
                            <h3>{data.summary}</h3>
                            <Link to={`/home/posts/${data._id}`} > Read Post</Link>
                        </div>
                    ))
                }
            </div> */}
            <div className="posts_list d-flex flex wrap my-5">
                {posts.map((data) => {
                    return (
                        <div className="post mx-3" key={data._id}>
                            <Link to={`/home/posts/${data._id}`}><img src={data.image} style={{background:""}} className="rounded-2 homePostImage" width="300" height="350" alt="" /></Link>
                            <div className="info mt-2">
                                <h2 style={{ fontFamily: "inherit" ,color:"orange" }}>{data.title}</h2>
                                <p className="text-secondary" style={{color:"golden"}}>- Written by {data.author}</p>
                                <Link to={`/home/posts/${data._id}`} className="btn btn-outline-success rounded-1 homeBtn">Read More</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>);
}
export default Food;