import React from 'react';
import { connect } from 'react-redux';
import memoize from 'memoize-one';

import { fetchAllPosts } from 'actions/post';

import PostItem from 'components/PostItem';

class PostList extends React.Component {
  state = {
    filterText: ''
  }

  filter = memoize(
    (postList, filterText) => postList.filter(item => item.title.includes(filterText))
  );
  
  componentDidMount() {
    this.props.fetchAllPosts();
  }

  handleSearchOnChange = (event) => {
    this.setState({
      filterText: event.target.value.toLowerCase()
    })
  }

  render() {
    const { filterText } = this.state;
    const { postList, isLoading } = this.props;
    const filteredList = this.filter(postList, filterText);

    return(
      <React.Fragment>
        {isLoading && <p>Loading...</p>}
        <input type="text" value={filterText} onChange={this.handleSearchOnChange} />

        {!isLoading && filteredList && filteredList.length > 0 && 
          <React.Fragment>
            {filteredList.map(post => 
              <PostItem 
                key={post.id} 
                title={post.title}
                body={post.body}
              />
            )}
          </React.Fragment>
        }
        {!isLoading && filteredList.length === 0 && <p>No result</p> }
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
