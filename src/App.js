import React from "react";
import "./App.css";
import Post from "./components/Post";

const App = () => {
  return (
    <div className='app'>
      <div className='app_header'>
        <img
          className='app_header_logo'
          src='https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png'
          alt='logo'
        />
      </div>
      <Post />
    </div>
  );
};

export default App;
