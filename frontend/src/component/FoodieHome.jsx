
import '../style/Foodiehome.css'
const FoodieHome = () => {
    return (
        <div className="home">

            <section>
                <div className="task ">
                    <div className="first_half">
                        <div className="task1">
                            <img className="col-lg-12 col-sm-12" src="https://images.pexels.com/photos/3650438/pexels-photo-3650438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                        <div className="task2">
                            <div className="task22">
                                <p>FEATURED POST</p>
                                <h1 className="col-lg-6 h1-lg-8 h1-sm-12 ">Love the Delicious & Tasty Food </h1>
                                <button>Read More</button>
                            </div>
                            <div className="bb">
                                <div className="f">
                                    <button>Forward</button>
                                </div>
                                <div className="next">
                                    <button>Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="second_section">
                <h1>Recent Stories</h1>
                <div className="second_half">
                    <div className="second_half_left">
                        <div className="second_half1">
                            <div className="s1">
                                <img src="images\chickenbiryani.jpeg" alt="" />
                                <p style={{ color: "blue" }}>Dessert March 01,<br /> 2018 Tasty & Delicious Foods</p>
                                <p>⭐⭐⭐⭐ 🤤</p> 
                                <h4 style={{ fontFamily: "inherit", color: "orange" }}>Chiken Kashmiri Biryani</h4>
                            </div>
                            <div className="s1">
                                <img src="images\mixbiryani.jpeg" alt="" />
                                <p style={{ color: "blue" }} >Dessert March 01,<br /> 2018 Tasty & Delicious Foods</p>
                                <p>⭐⭐⭐⭐ 🤤</p> 
                                <h4 style={{ fontFamily: "inherit", color: "orange" }}>Mutton Dum Biryani</h4>
                            </div>
                        </div>
                        <div className="second_half1">
                            <div className="s2">
                                <img src="images\muffincakes.jpeg" alt="" />
                                <p style={{ color: "blue" }} >Dessert March 01,<br /> 2018 Tasty & Delicious Foods</p>
                                <p>⭐⭐⭐⭐ 🤤</p> 
                                <h4 style={{ fontFamily: "inherit", color: "orange" }}>Muffins Cakes</h4>
                            </div>
                            <div className="s2">
                                <img src="images\pastry.jpeg" alt="" />
                                <p style={{ color: "blue" }} >Dessert March 01,<br /> 2018 Tasty & Delicious Foods</p>
                                <p>⭐⭐⭐⭐🤤</p> 
                                <h4 style={{ fontFamily: "inherit", color: "orange" }}>Jelly BlackForest Cold cake</h4>
                            </div>
                        </div>
                    </div>
                    <div className="second_half_right">
                        <div className="s3">
                            <h2>Tasty & Delicious Foods</h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* <div className="home d-lg-flex d-sm-block">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, facere!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi mollitia quisquam ad consectetur nesciunt laudantium sequi voluptatem optio, recusandae esse quis, fugit soluta. Amet soluta, eveniet eum quam adipisci libero?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, facere!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consequuntur tempore, at, nihil laborum nemo dignissimos ex quibusdam nam adipisci earum itaque quos dolore! Sit expedita totam fuga illum placeat.</p>
            </div>
            <div className="home row">
                <p className="col-lg-6 col-sm-12 bg-warning p-lg-5 p-sm-0" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, facere!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi mollitia quisquam ad consectetur nesciunt laudantium sequi voluptatem optio, recusandae esse quis, fugit soluta. Amet soluta, eveniet eum quam adipisci libero?</p>
                <p className="col-lg-6 col-sm-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, facere!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consequuntur tempore, at, nihil laborum nemo dignissimos ex quibusdam nam adipisci earum itaque quos dolore! Sit expedita totam fuga illum placeat.</p>
            </div> */}

        </div>
    );
}

export default FoodieHome;