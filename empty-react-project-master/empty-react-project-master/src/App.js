import React, { useState, useEffect } from "react";
import axios from "axios";
import faker from '@faker-js/faker';



import Login from './login/Login';
import Addpost from './post/Addpost';
import Post from './post/Post';
import Sign from './signup/Sign';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [posts, setposts] = useState("");
  useEffect(() => {
    const url = "http://localhost/project9/empty-react-project-master/empty-react-project-master/php/post.php";
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
          setposts(data);
      });
  }, []);
  return (
    <BrowserRouter>
    
      <Routes>
        
        <Route path="/" element={<Login />}/>
        <Route path="/post" element={<Post image={ faker.image.avatar()}/>}  />
        <Route path="/sign" element={<Sign/>}/>
        <Route path="/add" element={<Addpost/>}/>
   
        
      </Routes>
   
  
  </BrowserRouter>
  );
}

export default App;
