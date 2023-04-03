import Banner from "./Banner";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const SinglePost = () => {

    let [posts, setPosts] = useState([])
    let params = useParams()
    useEffect(() => {
        let fetchData = async () => {
            let res = await axios.get(`http://localhost:4000/posts/${params._id}`)
            let data = await res.data
            setPosts(data)
        }
        fetchData()
    }, [posts])

    let title = "More About Food"
    return (
        <div className="singlepost">
            <Banner data={title} />
            {/* <div className="sp">
                <h1>{posts.author}</h1>
                <img src={posts.image} alt="" />
            </div> */}
            <div className="blogInfo text-center my-5 d-flex justify-content-center">
                <div className="image col-5" >
                    <img src={posts.image} className="rounded-2" alt="" height="600" width="400" />
                    <h1>{posts.length}</h1>
                </div>
                <div className="info col-5 text-start">
                    <h1 className="my-3">{posts.title}</h1>
                    <div className="line mb-3"></div>
                    <p>{posts.summary}</p>
                    <div className="location">
                        <h2> <img width="30" src="/images/location.svg" alt="" /> Location</h2>
                        <div className="line mb-3"></div>
                        {/* <iframe src={posts.location}
                            className="my-3"
                            width="600" height="450"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                    </div>
                </div>
            </div>
            <div className="linkBtn text-center">
                <Link to='/home/posts' className="btn btn-dark btn-lg rounded-1 my-4 homeBtn">&lt; Go back to Posts</Link>
            </div>
        </div>
       
    );
}

export default SinglePost;