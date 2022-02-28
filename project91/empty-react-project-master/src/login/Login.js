import React from 'react'
import ".././signup/sign.css";

export default function Login() {
  return (
 
     <div> 
    <div id="particles-js"></div>

<div class="container">
    <div class="row">
        <div class="col-lg-3"> </div>
        <div class="col-lg-6 col-md-12">
            
            <div class="loginContainer">
                <h1 class="headerLogin">Login</h1>
                <form id="loginForm"  action="./choice.html" method="get" onsubmit="return validateform()">
                    <div class="loginElement">
                        <label for="loginEmail" class="labelInput fw-bold" >Email address<span class="requiredStar"> *</span></label><br/>
                        <input type="email" class="loginInput" id="loginEmail"/> <br/>
                        <small id="loginEmailMessage"></small>  
                    </div>

                    <div class="loginElement">
                      <label for="loginPassword" class="labelInput fw-bold" >Password<span class="requiredStar"> *</span></label> <br/>
                      <input type="password" class="loginInput " id="loginPassword"/> <br/>
                      <small id="loginPassMessage"></small>
                    </div>

                    <div class="d-flex justify-content-center">
                      <button type="submit" id="loginSubmit">Login</button><br/>
                    </div>
                    
              </form>
            </div>


            <div class="logimMessage d-flex justify-content-center fw-bold stylesign">I Don't have an account.  <a class="loginAndsignin" href="sighnUp.html"> Sign Up</a></div>

        </div>
        <div class="col-lg-3"> </div>

    </div>


</div>

 </div>     
  )
}
