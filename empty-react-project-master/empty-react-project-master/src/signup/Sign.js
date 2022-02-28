import React from 'react'
import "./sign.css";
import { Link } from "react-router-dom";

export default function Sign() {
  function Submit() {
    window.location.href = "http://localhost:3001/post";
	}
  return (
    <div>
        
  <div id="particles-js"></div>
    <div className="signUpContainer m-auto mt-5 d-flex flex-column  align-items-start">
        <h1 className="headerSignUp align-self-center">Sign Up</h1>
        <form id="signUpForm" method="get" >
              <div className="signElement">
                <label for="fullName" className="form-label fw-bold" >Full Name<span className="requiredStar"> *</span></label>
                <input type="text" className="form-control inputStyle" id="fullName"/>
                <small id="signNameMessage"></small>
              </div>
              <div className="signElement">
                <label for="signUpEmail" className="form-label fw-bold" >Email address<span className="requiredStar"> *</span></label>
                <input type="email" className="form-control inputStyle" id="signUpEmail"/>
                <div id="signEmailMessage">eg: username@domain.com</div>
              </div>
              <div className="signElement">
                <label for="signUpPassword" className="form-label fw-bold" >Password<span className="requiredStar"> *</span></label>
                <input type="password" className="form-control inputStyle" id="signUpPassword"/>
                <small id="signPassMessage">The Password should be between 6-18 characters.</small>
              </div>
              <div className="signElement">
                <input type="checkbox" id="checkBox" required/>
                <label for="checkbox"><small id="checkboxMessage">I Accepted The Terms Of Use & Privacy Policy .</small></label>
              </div>
              <div className="d-flex justify-content-center">
              
             <button onClick = {Submit} type="submit" id="signSubmit">Sign Up</button><br/>

                {/* <button type="submit" id="signSubmit">Sign Up</button><br/> */}
              </div>
        </form>
    </div>
   
    <div className="logimMessage d-flex justify-content-center fw-bold stylesign">Already Have An Account?
 <Link to="/" >
 <a className="loginAndsignin"> Login</a>          
              </Link> </div>

    </div>
  )
}
