import React, { useState } from "react";
import "./App.css";
import Post from "./components/Post";

const App = () => {
  const [posts, setPosts] = useState([
    {
      username: "lucifer",
      caption: "hello world",
      imageUrl:
        "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
    },
    {
      username: "oliver",
      caption: "hey kids",
      imageUrl:
        "https://spokanechildrenstheatre.org/Content/SCTSPOKANE/Images/events/2017-18/oliver_hero600x480.png",
    },
  ]);

  return (
    <div className='app'>
      <div className='app_header'>
        <img
          className='app_header_logo'
          src='https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png'
          alt='logo'
        />
      </div>

      {posts.map((item) => (
        <Post
          username={item.username}
          caption={item.caption}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
};

export default App;
