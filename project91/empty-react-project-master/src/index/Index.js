import React from 'react'
import "./index.css";

export default function Index() {
  return (
    <div>
        <div id="particles-js"> </div>
    <nav class="navbar ">
        <div class="container-fluid margin_Container">
            <a class="navbar-brand" href="#">
                <img src="img/logo.png" alt="" width="90" height="70"/>
            </a>
           
                <div>
                 <button class="btn  LogButton">
            <a href="./pages/Login.html" > <span>Log in </span> </a> 
            </button>
            <button class="btn  LogButton">
                <a href="./pages/sighnUp.html" > <span>Sign up</span> </a> 
                </button>
            </div>

        </div>
    </nav>
    <div class="container d-flex  mainContainer">
        <div class="row d-flex ">
        <div class="col-lg-6 col-md-12 d-flex flex-column textColorBlue">
            <h1 >Best Online Quiz Platform</h1>
            <p>Hey there!! Welcome to our online quiz website, Here we offer you a hight quality quizes that you can take and learn from it 
                We have Computer quizes in addition of English Tests and we will add much more in the future stay tuned!.
            </p>y
            <a href="./pages/sighnUp.html">
                <button id="buttonStarted"><span>Let's Get Started</span></button>  
            </a>
        </div>
        <div class="col-lg-6 col-md-12">
        <div class="row">
          <img src="img/3684.png" alt="nothing" width="90%" height="90%"/>
        </div>
        </div>
    </div>
    </div>
  



    </div>
  )
}
