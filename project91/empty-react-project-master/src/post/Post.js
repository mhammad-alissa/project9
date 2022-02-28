// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./post.css";

// export default function Post() {
//     const [posts, setposts] = useState([]);

//     useEffect(() => {
//       const url = "http://localhost/empty-react-project-master/empty-react-project-master/php/post.php";
//       axios
//         .get(url)
//         .then((response) => response.data)
//         .then((data) => {
//             setposts(data);
//         });
//     }, []);
//   return (
// <div className="choice">
// 		<div className="title">
// 			<h2>
// 				"Welcome <span className="user-N"> Ahmed</span> the exam page"
//                 {/* <img className="imgLable"
// 					src="../img/img-removebg-preview.png" alt="" /> */}
// 			</h2>
// 		</div>


//       {posts.map((book) => {
//         return (
//         //   <tr key={book.post_id}>
//         //     <td>{book.post_body}</td>
//         //     <td>{book.date}</td>
//         //     <td>{book.time}</td>
//         //     <td>{book.phone}</td>
//         //     <td>{book.num}</td>
//         //     <td>{book.email}</td>
//         //   </tr> 
// //         <div className="item">



// //     <div className="image">
// //       <img src="/images/wireframe/image.png"/>
// //     </div>
// //     <div className="content">
// //       <a className="header">{book.post_title}</a>
// //       <div className="meta">
// //         <span>{book.post_body}</span>
// //       </div>
// //       <div className="description">
// //         <p>{book.post_body}</p>
// //       </div>
// //       <div className="extra">
// //         Additional Details
// //       </div>
// //     </div>
// //   </div>
// <small className="box">
// 			<div className="card">
// 				<i className="fa fa-rocket" aria-hidden="true"></i>
// 				<h3 className="question">{book.post_title}</h3>
// 				<p>
//                 {book.post_body}
// 					<a className="link" href="https://www.duolingo.com/" target="blank">here</a>.
// 				</p>
// 				<a className="button" href="../pages/computerHtml.html" onclick="goto('english')">Start quiz</a>
// 			</div>

// 		</small>



//         );
//       })}

// 	<div>
//         <div className="ui card">
//         <div className="content">
//           <div className="right floated meta">14h</div>
//           <img className="ui avatar image" src="/images/avatar/large/elliot.jpg"/> Elliot
//         </div>
//         <div className="image">
//           {/* <img> */}
//         </div>
//         <div className="content">
//           <span className="right floated">
//             <i className="heart outline like icon"></i>
//             17 likes
//           </span>
//           <i className="comment icon"></i>
//           3 comments
//         </div>
//         <div className="extra content">
//           <div className="ui large transparent left icon input">
//             <i className="heart outline icon"></i>
//             <input type="text" placeholder="Add Comment..."/>
//           </div>
//         </div>
//       </div>
//     </div> 





// 	</div>



//   )
// }
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./post.css";
// import faker from '@faker-js/faker';
// import Comment from '../comment/Comment';

// export default function Post() {
//     const [posts, setposts] = useState([]);
//     // const [comments, setcomment] = useState([]);
//     const [comment, setcomments] = useState('');
//     const [post_id, setpost_id] = useState('');

//     useEffect(() => {
//         const url = "http://localhost/empty-react-project-master/empty-react-project-master/php/post.php";
//         axios
//             .get(url)
//             .then((response) => response.data)
//             .then((data) => {
//                 setposts(data);
//             });
//     }, []);
//     // useEffect(() => {
//     //     const url = "http://localhost/empty-react-project-master/empty-react-project-master/php/comment.php";
//     //     axios
//     //         .get(url)
//     //         .then((response) => response.data)
//     //         .then((data) => {
//     //             setcomment(data);
//     //         });
//     // }, []);



//     function Comm(event) {
//         setcomments(event.target.value);
//     }

//     function Po(event) {
//         setpost_id(event.target.value);
//     }



//     function Submit() {
//         const formData = new FormData();
//         formData.append("comment", comment);
//         formData.append("post_id", post_id);



//         axios({
//                 method: "post",
//                 url: "http://localhost/empty-react-project-master/empty-react-project-master/php/addcomment.php",
//                 data: formData,
//                 config: { headers: { "content-Type": "multipart/form-data" } },
//             })
//             .then((res) => {
//                 window.location.href = "http://localhost:3001";
//             })
//             .catch((error) => {
//                 console.log(error.response);
//             });
//     }
//     return ( 
//         <div className = "choice" >
        
//         <div className = "title" >
        
//        < h2 >
//         "Welcome <span className="
//         user - N "> Ahmed</span> the exam page" {
//             /* <img className="imgLable"
//             					src="../img/img-removebg-preview.png" alt="" /> */
//         } 
//         </h2> 
//         </div> {
//             posts.map((book) => {
//                 return ( 
//                    < div className = "ui card"
//                     style = {
//                         { width: '50%', margin: 'auto', marginBottom: '20px' } } >
                    
//                     <div className = "content" > { /* <div className="right floated meta">{faker.datatype.datetime()}</div> */ } 
//                     <img className = "ui avatar image"
//                     src = { faker.image.avatar() }
//                     />  { faker.name.findName() }
//                      </div> 
//                     <div className = "image" >
                    
//                     <h3 style = {
//                         { textAlgin: 'center' } } > { book.post_title } </h3> { /* <img src={faker.image.avatar()} alt="" style={{hight:"300px"}}/> */ } { book.post_body } { book.post_body } { book.post_body } { book.post_body } { book.post_body } { book.post_body } { book.post_body } { book.post_body } { book.post_body } 
//                    </div> 
//                    < div className = "content" >
                    
//                     <span className = "right floated" >
                   
//                     < i className = "heart outline like icon" > </i> { /* {faker.helpers.replaceSymbolWithNumber}  */ }
//                     likes 
//                     </span> 
//                    <i className = "comment icon" > </i>
//                     3 comments { /* <Comment post_id={book.post_id}></Comment> */ }

                    
//                     <div className = "ui comments"
//                     style = {
//                         { margin: 'auto' } } >
                    
//                     <div className = "comment" >
                    
//                     <a className = "avatar" > { /* <img src={faker.image.avatar()} /> */ }
//                     </a> 
//                      <div className = "content" >
                    
//                     <a className = "author" > { faker.name.findName() } </a> 
//                     <div className = "metadata" >
                    
//                     <div className = "date" > 1 day ago </div> 
//                     </div> 
//                     <div className = "text" >
                    
//                     <p> The hours, minutes and seconds stand as visible reminders that your effort put them all there. </p> 
//                    <p> Preserve until your next run, when the watch lets you see how Impermanent your efforts are. </p> 
//                     </div> 
//                     <div className = "actions" >
                    
//                     <a className = "reply" > Reply </a> 
//                     </div> 
//                    </div> 
//                     </div>

                    
//                     <form className = "ui reply form" method = "post">
                    
//                     <div className = "field" >
                    
//                     <textarea value = { comment } onChange = { Comm } name = "comment" > </textarea> 
//                     <input type = 'number' onChange = { Po } value = { post_id } > </input>

                    
//                     </div> 
//                     <div className = "ui primary submit labeled icon button" >
                    
//                     <i className = "icon edit" > </i>
//                     < button onClick = { Submit } > Add Comment </button>   
//                     </div> 
//                     </form> 
//                    </div> 
//                     </div>

//                     {
//                         /* <div className="extra content">
//                             <div className="ui large transparent left icon input">
//                               <i className="heart outline icon"></i>
//                               <input type="text" placeholder="Add Comment..."/>
//                               <input type="submit"/>
                              
//                             </div>
//                           </div> */
//                     } 
//                     </div>
//                 );
//             })
//         }

        
//         </div>
//     )
// }






import React, { useState, useEffect } from "react";
import axios from "axios";
import "./post.css";
import faker from '@faker-js/faker';


export default function Post() {
        const [posts, setposts] = useState([]);
    const [comments, setcomment] = useState([]);
    const [comment, setcomments] = useState('');
    const [post_id, setpost_id] = useState('');

    useEffect(() => {
        const url = "http://localhost/empty-react-project-master/empty-react-project-master/php/post.php";
        axios.get(url).then((response) => response.data).then((data) => {
                setposts(data);
            });
    }, []);
    useEffect(() => {
        const url = "http://localhost/empty-react-project-master/empty-react-project-master/php/comment.php";
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
                url: "http://localhost/empty-react-project-master/empty-react-project-master/php/addcomment.php",
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
<div className = "choice" >
  <div className = "title" >
    <h2>"Welcome <span className="user - N "> Ahmed</span> the exam page"</h2> 
  </div>
  {
            posts.map((book) => {
                return (

<div class="ui card"  style = {{ width: '50%', margin: 'auto', marginBottom: '20px'}}>
  <div class="content">
    <div class="right floated meta">14h</div>
    <img className = "ui avatar image"src = { faker.image.avatar() }/>  
    { faker.name.findName() }
  </div>
  <div className = "image" >
    <h3 style = {{ textAlgin: 'center' }}> { book.post_title } </h3> 
  { book.post_body } { book.post_body } { book.post_body } { book.post_body } { book.post_body } { book.post_body } { book.post_body } { book.post_body } { book.post_body } 
   </div>
  <div class="content">
    <span class="right floated">
      <i class="heart outline like icon"></i>
      17 likes
    </span>
    <i class="comment icon"></i>
    3 comments
  </div>
  {/* <div class="extra content">
    <div class="ui large transparent left icon input">
      <i class="heart outline icon"></i>
      <input type="text" placeholder="Add Comment..."/>
    </div>
  </div> */}

<div class="ui comments" style = {{ margin: 'auto' }}>
  <div class="comment">
    <a class="avatar">
      {/* <img src="/images/avatar/small/joe.jpg"/> */}
    </a>
   {comments.map((books) => {
                return (
    <div class="content">
      <a class="author">{ faker.name.findName() }</a>
      <div class="metadata">
        <div class="date">1 day ago</div>
      </div>
      <div class="text">

        <p>{ books.comment }</p>
      </div>
      <div class="actions">
        <a class="reply">Reply</a>
      </div>
    </div>
           );
        })
    }
  </div>
  <div class="comment">
    <a class="avatar">
      {/* <img src="/images/avatar/small/christian.jpg"/> */}
    </a>

  </div>
  <form class="ui reply form">
    <div class="field">
     <textarea value = {comment} onChange = {Comm} name = "comment" > </textarea> 
     <input type = 'number' onChange = {Po} value= {post_id}></input>
    </div>
    <div class="ui primary submit labeled icon button">
      <i class="icon edit"></i>< button onClick = {Submit} > Add Comment </button>   

    </div>
  </form>
</div>















</div>
                );
            })
        }












</div>
  )
}
