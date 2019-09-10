import React from 'react';
import { connect } from 'react-redux';

import { fetchPostDetail } from 'actions/post'

class PostDetail extends React.Component {
  componentDidMount() {
    this.props.fetchPostDetail(this.props.match.params.id) //Clicked Post Id
  }

  render() {
    const { isLoading, post } = this.props;
    return(
      <React.Fragment>
        {isLoading && <p>Loading...</p>}
        {!isLoading && post &&
        <React.Fragment>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </React.Fragment>
        }
      </React.Fragment>
    )
  }
}


export default connect(
  (state) => ({
    post: state.post.post,
    isLoading: state.post.isLoading
  }),
  {
    fetchPostDetail
  }
)(PostDetail);
