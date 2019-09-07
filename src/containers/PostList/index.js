import React from 'react';
import { connect } from 'react-redux';

import { fetchAllPosts } from 'actions/post';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchAllPosts();
  }
  
  render() {
    const { postList, isLoading } = this.props;
    return(
      <React.Fragment>
        {isLoading && <p>Loading...</p>}

        {!isLoading && postList && postList.length > 0 && 
          postList.map(post => 
            <p key={post.id}>{post.body}</p>
          )
        }
      </React.Fragment>
    )
  }
}



export default connect(
  (state) => ({
    postList: state.post.posts,
    isLoading: state.post.isLoading
  }),
  {
    fetchAllPosts
  }
)(PostList);
