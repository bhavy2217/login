/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react"
import '../App.css'
import axios from 'axios';
import { Link } from 'react-router-dom'
import Logo1 from '../assets/adaptive-icon11.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


function login() {
    // const param = useParams();
    const [mobileNo, setmobileNo] = useState("")
    const [password, setpassword] = useState("")
    const [correct, setcorrect] = useState(false)
    const navigate = useNavigate()

    // useEffect(() => {
    //     data();
    // }, []);

    const data = async () => {
        const response = await axios.post('https://sarrahapp.com:3032/api/auth/customer', {
            cMobileNo: mobileNo,
            cPassword: password
        })
        // console.log(response.status, 'response.status');
        if (response.status == 200) {
            navigate('/dashboard')
        } else {
            console.error(response.data.message);
        }
    }
    const failed = () => {
        alert("Wrong");
    }
    return (
        <>
            <div className="formDiv">
                <div className="imageDiv">
                    <img src={Logo1} className="logo" style={{ width: '200px' }} alt="logo" />
                </div>
                <div className="form">
                    <form action="#">
                        {/* <input type="tel" value={mobileNo} onChange={(e) => setmobileNo(e.target.value)} pattern="[0-9]{3}[0-9]{4}[0-9]{3}" required /> */}
                        <TextField id="outlined-basic" label="Contact No." variant="outlined" type="tel" value={mobileNo} onChange={(e) => setmobileNo(e.target.value)} pattern="[0-9]{3}[0-9]{4}[0-9]{3}" required />
                        <br /><br />

                        <TextField id="outlined-basic" label="Password" variant="outlined" type="password" value={password} onChange={(e) => setpassword(e.target.value)} required />
                        <br /><br />
                        <br />
                        <span className="forgetPassword">

                            Forget Password?
                        </span>

                        <div>
                            {/* <Link to={setcorrect ? '/login' : '/dashboard'}> */}
                                <Button variant="contained" style={{ width: '220px' }} onClick={data}>Login</Button>
                            {/* </Link> */}
                        </div>
                    </form >
                </div>
            </div>
        </>
    )
}

export default login