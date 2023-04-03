import { useState } from "react";
import Banner from "./Banner";
import { useEffect } from "react";
import axios from "axios";


const About = () => {

    // let [list, setlist] = useState([
    //     {
    //         value: 10,
    //         about: "Years of Exprirence"
    //     },
    //     {
    //         value: 200,
    //         about: "Foods"
    //     },
    //     {
    //         value: 300,
    //         about: "Lifestyle"
    //     },
    //     {
    //         value: 40,
    //         about: "Years of Exprirence"
    //     },
    // ])
    let [posts, setPost] = useState()

    useEffect(() => {
        let fetchData = async () => {
            let response = await axios.get('http://localhost:4000/posts')
            let data = await response.data
            setPost(data)
        }
        fetchData()
    }, [])

    let title = "About Us"
    return (
        <div className="about" >
            <Banner data={title} />
            <div className="aboutFoodie my-5 d-flex justify-content-center">
                <div className="aboutImage">
                    <img className="rounded-2" width="450" height="650" src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className="aboutInfo w-50 p-5">
                    <h2 className="fw-bolder fs-1">About Foodie</h2>
                    <div className="line my-3"></div>
                    <h4>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</h4>
                    <div className="lists d-flex flex-wrap justify-content-between mt-3 bg-red">
                        <h1 className="fw-bolder">{posts.length}</h1>
                        {/* {posts.map(data => (
                            <div className="list bg-light p-5 border text-center  mt-4 " key={data.length} style={{ width: "50%" }}>
                                <h1 className="fw-bolder">{data.length}</h1>
                                <p className="text-secondary">{data.length}</p>
                            </div>
                        ))} */}
                    </div>
                </div>
            </div>
        </div>);
}

export default About;