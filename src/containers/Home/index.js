import React from 'react';
import generatePath from 'react-router-dom/generatePath';

import Button from 'components/Button';
import './style.css';

export default class Home extends React.Component {

  handleRedirectButtonClick = () => {
    this.redirectBlogPostsPage();
  }

  redirectBlogPostsPage = () => {
    return this.props.history.push(generatePath("/posts"));
  }

  render() {
    return(
      <React.Fragment>
        <h1>Welcome to the Blog-Post Project</h1>
        <h2>Start to Project please click the button. It creates some blog posts for you</h2>
        <p>This project includes:</p>
        <ul>
          <li>Listing blog posts,</li>
          <li>Showing post detail,</li>
          <li>Creating and deleting posts</li>
        </ul>
        <Button type="redirect"
          onClick={this.handleRedirectButtonClick}
          buttonText="Go to Blog Posts Page" />
      </React.Fragment>
    )
  }
}
