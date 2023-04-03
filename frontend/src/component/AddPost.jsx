
import Banner from "./Banner";
import '../style/Addpost.css';
import { useState } from "react";
import axios from "axios";

const AddPost = () => {
    let title= "AddPost"
    let [author, setauthor] = useState()
    let [Title, settitle] = useState()
    let [summary, setsummary] = useState()
    let [image, setimage] = useState()
    let [location, setlocation] = useState()


    let handleAddPost = (e) => {
        e.preventDefault()
        let data = { author, Title, summary, image, location }
        if (author && Title && summary && image && location) {
            axios.post('http://localhost:4000/add-post', data)
                .then(res => {
                    alert(res.data.message);
                    // navigate('/');
                }).catch(err => {
                    alert(err.data.message);
                })
        }
        else {
            alert('Please fill all the fields')
        }
    }
    return (

        <div className="addpost">
            <Banner data={title} />
            <div className="addpost1">
                <div className="l1">
                    <img src="https://images.pexels.com/photos/461415/pexels-photo-461415.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
                <div className="addpost_form">
                    <h1><u><b>ADD POST</b></u> </h1>
                    <form action="" onSubmit={handleAddPost}>
                        <div className="w-100 mt-3">
                            <label htmlFor="">Author</label>
                            <input type="text"
                                name="author"
                                placeholder="Name"
                                value={author}
                                onChange={(a) => setauthor(a.target.value)}
                                className="form-control" />
                        </div>
                        <div className="w-100 mt-3">
                            <label htmlFor="">Title</label>
                            <input type="text"
                                name="Title"
                                placeholder="Name"
                                value={Title}
                                onChange={(a) => settitle(a.target.value)}
                                className="form-control w-100" />
                        </div>
                        <div className="w-100 h-100 mt-3">
                            <label htmlFor="">Summmary</label>
                            <textarea type="textarea"
                                name="summary"
                                cols="5"
                                rows="5"
                                placeholder="Name"
                                value={summary}
                                onChange={(a) => setsummary(a.target.value)}
                                className="form-control" />
                        </div>
                        <div className="w-100 mt-3">
                            <label htmlFor="">Image</label>
                            <input type="text"
                                name="image"
                                placeholder="Name"
                                value={image}
                                onChange={(a) => setimage(a.target.value)}
                                className="form-control" />
                        </div>
                        <div className="w-100 mt-3">
                            <label htmlFor="">Location</label>
                            <input type="text"
                                name="location"
                                placeholder="Name"
                                value={location}
                                onChange={(a) => setlocation(a.target.value)}
                                className="form-control" />
                        </div> <br />
                        <div className="mt-3">
                            <button className="btn btn-outline-success" >Submit Post</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>);
}
export default AddPost;