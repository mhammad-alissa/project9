import React from 'react'
import ".././signup/sign.css";
import { Link } from "react-router-dom";
export default function Login() {
  function Submit() {
    window.location.href = "http://localhost:3001/post";
	}
  return (
 
     <div> 
    <div id="particles-js"></div>

<div className="container">
    <div className="row">
        <div className="col-lg-3"> </div>
        <div className="col-lg-6 col-md-12">
            
            <div className="loginContainer">
                <h1 className="headerLogin">Login</h1>
                <form id="loginForm" action='/post'>
                    <div className="loginElement">
                        <label for="loginEmail" className="labelInput fw-bold" >Email address<span className="requiredStar"> *</span></label><br/>
                        <input type="email" className="loginInput" id="loginEmail"/> <br/>
                        <small id="loginEmailMessage"></small>  
                    </div>

                    <div className="loginElement">
                      <label for="loginPassword" className="labelInput fw-bold" >Password<span className="requiredStar"> *</span></label> <br/>
                      <input type="password" className="loginInput " id="loginPassword"/> <br/>
                      <small id="loginPassMessage"></small>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button onClick = {Submit} type="submit" id="loginSubmit">Login</button><br/>
                    </div>
                    
              </form>
            </div>


            <div className="logimMessage d-flex justify-content-center fw-bold stylesign">I Don't have an account.   
            <Link to="/sign" >
                          <a className="loginAndsignin" > Sign Up</a>
                        </Link> </div>

        </div>
        <div className="col-lg-3"> </div>

    </div>


</div>

 </div>     
  )
}
