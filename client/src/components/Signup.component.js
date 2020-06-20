import React from 'react';
import {Link} from 'react-router-dom';
const Signup = ()=>{
    return(
        <div className="loginCard">
            <div className="card white darken-1 input-field">
                <h2>Bearings</h2>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="E-Mail"/>
                <input type="text" placeholder="Password"/>
                <button className="btn waves-effect waves-light #000000 black">
                    Register
                </button>
                <p>
                    <Link to="/accounts/signin">Already registered?</Link>
                </p>
            </div>
        </div>

    )
}


export default Signup;