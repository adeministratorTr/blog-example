import React from 'react';

import './style.css';

const PostItem = (props) =>
  <div className='post-item'>
    <h1>{props.title}</h1>
    <p>{props.body}</p>
  </div>

export default PostItem;
