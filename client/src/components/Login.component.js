import React from 'react';
import {Link} from 'react-router-dom';
const Login = ()=>{
    return(
        <div className="loginCard">
            <div className="card white darken-1 input-field">
                <h2>Bearings</h2>
                <input type="text" placeholder="E-Mail"/>
                <input type="text" placeholder="Password"/>
                <button className="btn waves-effect waves-light #000000 black">
                    Login
                </button>
                <p>
                    <Link to="/accounts/signup">Don't have an account?</Link>
                </p>
            </div>
        </div>

    )
}


export default Login;