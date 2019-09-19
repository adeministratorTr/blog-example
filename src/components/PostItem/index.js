import React from 'react';

import Button from 'components/Button';

import './style.css';

const REDIRECT_BUTTON_TEXT = 'Read More..';
const DELETE_BUTTON_TEXT = 'Delete Post!';

const PostItem = (props) =>
  <div className="post-item">
    <h2>{props.title}</h2>
    <div className="read-more">
      <p>{props.body}</p>
      <p>{props.date}</p>
    </div>
    <div className="button-container">
      <Button 
        type="redirect"
        buttonText={REDIRECT_BUTTON_TEXT}
        onClick={props.onRedirectButtonClick}
      />
      <Button 
        type="delete"
        buttonText={DELETE_BUTTON_TEXT}
        onClick={props.onDeleteButtonClick}
      />
    </div>
  </div>

export default PostItem;
