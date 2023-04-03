
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../style/login.css';
const Login = () => {
    let [email, setemail] = useState("")
    let [password, setpassword] = useState("")

    let navigate = useNavigate()

    let Login = (e) => {
        e.preventDefault();
        let data = { email, password }
        axios.post('http://localhost:4000/login', data)
            .then((res) => {
                if (res.data.message === 'login successfull') {
                    navigate('/home')
                } else {
                    alert(res.data.message)
                }
            })
    }

    return (<div className="login">
        <h1>Login</h1>
        <div className="form ">

            <form action="" onSubmit={Login}>
                <div className="email w-25">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" value={email} onChange={(a) => setemail(a.target.value)} className="form-control" />
                </div>
                <div className="password w-25">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" value={password} onChange={(a) => setpassword(a.target.value)} className="form-control" />
                </div> <br />
                <div className="opations">
                    <button className="btn btn-outline-success mb-3">Login</button>
                </div>
                <div className="signup_button">
                    <p>Are you new user ?</p>
                    <Link to="/signup" className="btn btn-outline-primary" > SignUp</Link>
                </div>
            </form>
        </div>

    </div>);
}

export default Login; 