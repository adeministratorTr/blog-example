import React from 'react';

import Button from 'components/Button';

import './style.css';

const PostItem = (props) =>
  <div className="post-item">
    <h2>{props.title}</h2>
    <div className="read-more">
      <p>{props.body}</p>
      <Button 
        type="redirect"
        buttonText="Read More.."
        onClick={props.handleReadMoreClick}
        />
    </div>
  </div>

export default PostItem;
