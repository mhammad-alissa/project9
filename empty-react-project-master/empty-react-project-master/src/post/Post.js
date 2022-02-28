

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./post.css";
import faker from '@faker-js/faker';
import { Link } from "react-router-dom";


export default function Post() {
        const [posts, setposts] = useState([]);
    const [comments, setcomment] = useState([]);
    const [comment, setcomments] = useState('');
    const [post_id, setpost_id] = useState('');

    useEffect(() => {
        const url = "http://localhost/project9/empty-react-project-master/empty-react-project-master/php/post.php";
        axios.get(url).then((response) => response.data).then((data) => {
                setposts(data);
            });
    }, []);
    useEffect(() => {
        const url = "http://localhost/project9/empty-react-project-master/empty-react-project-master/php/comment.php";
        axios
            .get(url)
            .then((response) => response.data)
            .then((data) => {
                setcomment(data);
            });
    }, []);



    function Comm(event) {
        setcomments(event.target.value);
    }

    function Po(event) {
        setpost_id(event.target.value);
    }



    function Submit() {
        const formData = new FormData();
        formData.append("comment", comment);
        formData.append("post_id", post_id);



        axios({
                method: "post",
                url: "http://localhost/project9/empty-react-project-master/empty-react-project-master/php/addcomment.php",
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
<div className = "choice" >
  <div className = "title" >
    <h2>"Welcome <span className="user - N "></span> the post page" 
    <Link to="/add" >
    <button className="add">add post</button>
    </Link>

     </h2> 
  </div>
  {
            posts.map((book) => {
                return (

<div className="ui card"  style = {{ width: '50%', margin: 'auto', marginBottom: '20px'}}>
  <div className="content">
    <div className="right floated meta">14h</div>
    <img className = "ui avatar image"src = { faker.image.avatar() }/>  
    { faker.name.findName() }
  </div>
  <div className = "image" style = {{ padding:'0px 20px' }}>
    <h3 style = {{ textAlgin: 'center'  }}> { book.post_title } </h3> 
  { book.post_body } { book.post_body } { book.post_body } { book.post_body } { book.post_body } { book.post_body } { book.post_body } { book.post_body } { book.post_body } 
   </div>
  <div className="content">
    <span className="right floated">
      <i className="heart outline like icon"></i>
      17 likes
    </span>
    <i className="comment icon"></i>
    comments
  </div>
  {/* <div className="extra content">
    <div className="ui large transparent left icon input">
      <i className="heart outline icon"></i>
      <input type="text" placeholder="Add Comment..."/>
    </div>
  </div> */}

<div className="ui comments" style = {{ margin: 'auto' , marginBottom:'20px'}}>
  <div className="comment">
    <a className="avatar">
      {/* <img src="/images/avatar/small/joe.jpg"/> */}
    </a>
   {comments.map((books) => {
                return (
    <div className="content">
      <a className="author">{ faker.name.findName() }</a>
      <div className="metadata">
        <div className="date"></div>
      </div>
      <div className="text">

        <p>{ books.comment }</p>
      </div>
      <div className="actions">
        <a className="reply">Reply</a>
      </div>
    </div>
           );
        })
    }
  </div>
  <div className="comment">
    <a className="avatar">
      {/* <img src="/images/avatar/small/christian.jpg"/> */}
    </a>

  </div>
  <form className="ui reply form">
    <div className="field">
     <textarea value = {comment} onChange = {Comm} name = "comment" > </textarea> 
     <input type = 'number' onChange = {Po} value= {post_id}></input>
    </div>
    < button onClick = {Submit} style={{border:'none'}}>
    <div className="ui primary submit labeled icon button">
      <i className="icon edit"></i> Add Comment   

    </div></button> 
  </form>
</div>















</div>
                );
            })
        }












</div>
  )
}
