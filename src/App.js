import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./components/Post";
import { db } from "./firebase";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("post").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className='app'>
      <div className='app_header'>
        <img
          className='app_header_logo'
          src='https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png'
          alt='logo'
        />
      </div>

      {posts.map(({ id, post }) => (
        <Post
          key={id}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
};

export default App;
