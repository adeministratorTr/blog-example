import React from 'react';

import Button from 'components/Button';
import './style.css';

export class Home extends React.Component {
  render() {
    return(
      <React.Fragment>
        <h1>Welcome to the Blog-Post Project</h1>
        <h2>Start to Project please click the button. It creates some blog posts</h2>
        <p>This project includes:</p>
        <ul>
          <li>Listing blog posts,</li>
          <li>Showing post detail,</li>
          <li>Creating and deleting posts</li>
        </ul>
        <Button type='add' buttonText='Add Button' />
        {/* Start Button */}
        {/* RedirectButton */}
      </React.Fragment>
    )
  }
}

// export default connect(
//   (state) => ({
//     posts: state.posts.postlist,
//     isLoading: state.posts.isLoading
//   }),
//   {
//     fetchPosts
//   }
// )(Home);
