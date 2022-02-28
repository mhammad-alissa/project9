import React from 'react'
import "./sign.css";

export default function Sign() {
  return (
    <div>
        
  <div id="particles-js"></div>
    <div class="signUpContainer m-auto mt-5 d-flex flex-column  align-items-start">
        <h1 class="headerSignUp align-self-center">Sign Up</h1>
        <form id="signUpForm" method="get" >
              <div class="signElement">
                <label for="fullName" class="form-label fw-bold" >Full Name<span class="requiredStar"> *</span></label>
                <input type="text" class="form-control inputStyle" id="fullName"/>
                <small id="signNameMessage"></small>
              </div>
              <div class="signElement">
                <label for="signUpEmail" class="form-label fw-bold" >Email address<span class="requiredStar"> *</span></label>
                <input type="email" class="form-control inputStyle" id="signUpEmail"/>
                <div id="signEmailMessage">eg: username@domain.com</div>
              </div>
              <div class="signElement">
                <label for="signUpPassword" class="form-label fw-bold" >Password<span class="requiredStar"> *</span></label>
                <input type="password" class="form-control inputStyle" id="signUpPassword"/>
                <small id="signPassMessage">The Password should be between 6-18 characters.</small>
              </div>
              <div class="signElement">
                <input type="checkbox" id="checkBox" required/>
                <label for="checkbox"><small id="checkboxMessage">I Accepted The Terms Of Use & Privacy Policy .</small></label>
              </div>
              <div class="d-flex justify-content-center">
                <button type="submit" id="signSubmit">Sign Up</button><br/>
              </div>
        </form>
    </div>
    <div class="logimMessage d-flex justify-content-center fw-bold stylesign">Already Have An Account? <a class="loginAndsignin" href="../pages/Login.html" > Login</a></div>


    </div>
  )
}
