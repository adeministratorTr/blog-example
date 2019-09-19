import React from 'react';
import { connect } from 'react-redux';
import memoize from 'memoize-one';
import debounce from 'lodash/debounce';
import generatePath from 'react-router-dom/generatePath';

import { fetchAllPosts, deletePost } from 'actions/post';

import PostItem from 'components/PostItem';
import Button from 'components/Button';

import './style.css';

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
    this.handleSetSearchText(event.target.value)
  }

  handleSetSearchText = debounce((searchValue) => {
    this.setState({
      filterText: searchValue.toLowerCase()
    })
  }, 200)


  handleSearchClearClick = () => {
    this.clearSearchFilter();
  }

  clearSearchFilter = () => {
    this.setState({ filterText: '' })
  }

  getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
  }

  randomDate = () => {
    const earliestDay = '01-01-2010';
    const currentDate = new Date().toLocaleDateString()
    const newDate = new Date(this.getRandomArbitrary(new Date(earliestDay).getTime(), new Date(currentDate).getTime())).toLocaleDateString();
    return newDate;
}

  createMockDate = () => {
    return this.randomDate();
  }

  deletePost = (postId) => {
    const deletePostResult = window.confirm("Are you sure to delete post?"); 
    console.log('deleted item id: ', postId) // Leave it by purpose cuz delete endpoint doesnt really work
    deletePostResult && this.props.deletePost(postId)
    this.props.isDeletePostSuccess && console.log('You deleted post successfully')
  }

  handleDeletePostClick(postId) {
    this.deletePost(postId)
  }

  redirectBlogDetailPage = (postId) => {
    return this.props.history.push(generatePath("/posts/:id", {id: postId}));
  }


  handleReadMoreClick(postId) {
    this.redirectBlogDetailPage(postId);
  }

  render() {
    const { filterText } = this.state;
    const { postList, isLoading } = this.props;
    const filteredList = this.filter(postList, filterText);

    return(
      <React.Fragment>
        <div className="search-container">
          <input className="search-box"
            type="text"
            maxLength="15"
            placeholder="Search in Titles"
            onChange={this.handleSearchOnChange} />
          <Button type="delete" buttonText="Clear" onClick={this.handleSearchClearClick} />
        </div>

        {isLoading && <p>Loading...</p>}

        {!isLoading && filteredList && filteredList.length > 0 && 
          <div className="posts-container">
            <h1>Here our awesome Blog</h1>
            {filteredList.map(post => 
              <PostItem
                key={post.id}
                title={post.title}
                body={post.body.substr(0, 10) + '...'}
                date={this.createMockDate()}
                onRedirectButtonClick={this.handleReadMoreClick.bind(this, post.id)}
                onDeleteButtonClick={this.handleDeletePostClick.bind(this, post.id)}
              />
            )}
          </div>
        }
        {!isLoading && filteredList.length === 0 && 
          <p className="no-result">No result for {filterText} </p> }
      </React.Fragment>
    )
  }
}

export default connect(
  (state) => ({
    postList: state.post.posts,
    isLoading: state.post.isLoading,
    isDeletePostSuccess: state.post.isDeletePostSuccess
  }),
  {
    fetchAllPosts,
    deletePost
  }
)(PostList);
