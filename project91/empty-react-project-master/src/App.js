import React, { useState, useEffect } from "react";
import axios from "axios";
import faker from '@faker-js/faker';


import C from './C';
import Index from './index/Index';
import Login from './login/Login';
import Nav from './navbar/Nav';
import Addpost from './post/Addpost';
import Post from './post/Post';
import Sign from './signup/Sign';
import Comment from './comment/Comment';
// import ResponsiveAppBar from './navbar/ResponsiveAppBar.JS';
// import ResponsiveAppBar from './navbar/ResponsiveAppBar.JS';

function App() {
  const [posts, setposts] = useState("");
  useEffect(() => {
    const url = "http://localhost/empty-react-project-master/empty-react-project-master/php/post.php";
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
          setposts(data);
      });
  }, []);
  return (
    <div>
     
         {/* <ResponsiveAppBar></ResponsiveAppBar> */}
     {/* <Nav></Nav> */}
     <Post image={ faker.image.avatar()}></Post>
     <Comment posts={posts}></Comment>
     <Addpost></Addpost>
     {/* <Index></Index> */}
     {/* <Sign></Sign> */}
     {/* <Login></Login> */}
    </div>
  );
}

export default App;
