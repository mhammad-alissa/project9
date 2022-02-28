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
			url: "http://localhost/empty-react-project-master/empty-react-project-master/php/addpost.php",
			data: formData,
			config: { headers: { "content-Type": "multipart/form-data" } },
		})
			.then((res) => {
				window.location.href = "http://localhost:3001";
			})
			.catch((error) => {
				console.log(error.response);
			});
	}
  return (
    <div>
        		<form
								
								method="post"
								autoComplete="off"
								
							>
								<div className="booking_group d-flex flex-column">
									<p>BOOKING IN THE HOTALE :</p>
									<br></br>
									
									{/* <input onChange={(e) => handle(e)} id="name" value={data.name} placeholder="name" type="text"/> */}
									<label ><b >post_title :</b> </label> 
									<input style={{border:'1px solid'}} value={post_title} onChange={Title} name="name" type="text"/>
									<br />
									<label ><b >body :</b> </label> 
									<input style={{border:'1px solid'}} value={post_body} onChange={Body} name="email" type="text"/>
									<br />
									<label ><b >image :</b> </label> 
									<input style={{border:'1px solid'}} value={post_image} onChange={Image} name="email" type="file"/>
									<br />
							
								</div>
								<button
									className="booking_btn btn theme-element theme-element--accent"
									// type="submit"
									onClick={Submit}
								>
									Book now
								</button>
							</form>

    </div>
  )
}
