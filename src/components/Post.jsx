import React from "react";
import "../style/post.css";

function Post() {
  return (
    <div>
      <h3>Username</h3>
      <img
        className='post_image'
        src='https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png'
        alt=''
      />
      <h4 className='post_text'>
        <strong>Username</strong>caption
      </h4>
    </div>
  );
}

export default Post;
