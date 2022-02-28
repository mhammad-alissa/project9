import React, { useState } from "react";
import axios from "axios";

export default function Addpost() {
    const [post_title, settitle] = useState("");
	const [post_body, setbody] = useState("");
	const [post_image, setimage] = useState("");
    function Title(event) {
		settitle(event.target.value);
	}
	function Body(event) {
		setbody(event.target.value);
	}
	function Image(event) {
		setimage(event.target.value);
	}

    function Submit() {
		const formData = new FormData();
		formData.append("post_title", post_title);
		formData.append("post_body", post_body);
		formData.append("post_image", post_image);


		axios({
			method: "post",
			url: "http://localhost/project9/empty-react-project-master/empty-react-project-master/php/addpost.php",
			data: formData,
			config: { headers: { "content-Type": "multipart/form-data" } },
		})
			.then((res) => {
				window.location.href = "http://localhost:3001/post";
			})
			.catch((error) => {
				console.log(error.response);
			});
	}
  return (
    // <div>
    //     		<form
								
	// 							method="post"
	// 							autoComplete="off"
								
	// 						>
	// 							<div className="booking_group d-flex flex-column">
	// 								<p>BOOKING IN THE HOTALE :</p>
	// 								<br></br>
									
	// 								{/* <input onChange={(e) => handle(e)} id="name" value={data.name} placeholder="name" type="text"/> */}
	// 								<label ><b >post_title :</b> </label> 
	// 								<input style={{border:'1px solid'}} value={post_title} onChange={Title} name="name" type="text"/>
	// 								<br />
	// 								<label ><b >body :</b> </label> 
	// 								<input style={{border:'1px solid'}} value={post_body} onChange={Body} name="email" type="text"/>
	// 								<br />
	// 								<label ><b >image :</b> </label> 
	// 								<input style={{border:'1px solid'}} value={post_image} onChange={Image} name="image" type="file"/>
	// 								<br />
							
	// 							</div>
	// 							<button
	// 								className="booking_btn btn theme-element theme-element--accent"
	// 								// type="submit"
	// 								onClick={Submit}
	// 							>
	// 								Book now
	// 							</button>
	// 						</form>

    // </div>
	<div> 
    <div id="particles-js"></div>

<div className="container">
    <div className="row">
        <div className="col-lg-3"> </div>
        <div className="col-lg-6 col-md-12">
            
            <div className="loginContainer">
                <h1 className="headerLogin">add post</h1>
                <form id="loginForm"  method="post">
                    <div className="loginElement">
                        <label for="loginEmail" className="labelInput fw-bold" >post_title :<span className="requiredStar"> *</span></label><br/>
                        <input value={post_title} onChange={Title} name="name" type="text" className="loginInput" id="loginEmail"/> <br/>
                       
                    </div>

                    <div className="loginElement">
                      <label for="loginPassword" className="labelInput fw-bold" >body :<span className="requiredStar"> *</span></label> <br/>
                      <input value={post_body} onChange={Body} name="email" type="text" className="loginInput " id="loginPassword"/> <br/>
                    
                    </div>

                    <div className="loginElement">
                      <label for="loginPassword" className="labelInput fw-bold" >image :<span className="requiredStar"> *</span></label> <br/>
                      <input value={post_image} onChange={Image} name="image" type="file" className="loginInput " id="loginPassword"/> <br/>
                   
                    </div>

                    <div className="d-flex justify-content-center">
                      <button type="submit" id="loginSubmit" onClick={Submit}>add post</button>
                    </div><br/>
            
              </form>
            </div>


                {/* <Link to="/sign" >
                          <a className="loginAndsignin" href="sighnUp.html"> Sign Up</a>
                        </Link>  */}
			

        </div>
        <div className="col-lg-3"> </div>

    </div>


</div>

 </div>
  )
}
