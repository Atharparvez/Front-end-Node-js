import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import '../style/signUp.css';

const Signup = () => {
    let [name, setname] = useState()
    let [mobile, setmobile] = useState()
    let [email, setemail] = useState()
    let [password, setpassword] = useState()
    let [cnfpass, setcnfpass] = useState()

    let navigate = useNavigate()

    let handleSignup = (e) => {
        e.preventDefault();
        let data = { name, mobile, email, password, cnfpass }
        if (name && email && (password === cnfpass) && mobile) {
            axios.post('http://localhost:4000/signup', data)
                .then((res) => {
                    alert(res.data.message);
                    navigate('/');
                })
        }
        else {
            alert('invalid credentials')
        }
    }

    return (
        <div className="signup">
            <h1>SignUp</h1>
            <div className="sing_Upform mt-5 ">
                <form action="" onSubmit={handleSignup} >
                    <div className="w-25">
                        <label htmlFor=""></label>
                        <input type="text" name="name" placeholder="Name" value={name} onChange={(a) => setname(a.target.value)} className="form-control" />
                    </div>
                    <div className="w-25">
                        <label htmlFor=""></label>
                        <input type="talephone" name="mobile" placeholder="Mobile" value={mobile} onChange={(a) => setmobile(a.target.value)} className="form-control" />
                    </div>
                    <div className="w-25">
                        <label htmlFor=""></label>
                        <input type="email" name="email" placeholder="Email" value={email} onChange={(a) => setemail(a.target.value)} className="form-control" />
                    </div>
                    <div className="w-25">
                        <label htmlFor=""></label>
                        <input type="password" name="password" placeholder="Password" value={password} onChange={(a) => setpassword(a.target.value)} className="form-control" />
                    </div>
                    <div className="w-25">
                        <label htmlFor=""></label>
                        <input type="password" name="cnfpass" placeholder="Confirm Password" value={cnfpass} onChange={(a) => setcnfpass(a.target.value)} className="form-control" />
                    </div> <br />
                    <div className="">
                        <Link><button className="btn btn-outline-primary" >SignUp</button></Link>
                    </div>
                    <div className="d-grid">
                        <p>Already a user?</p>
                        <Link to="/" > <button className="btn btn-primary">Login</button></Link>
                    </div>
                </form>
            </div>
        </div>);
}

export default Signup;