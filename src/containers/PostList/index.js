import React from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import generatePath from 'react-router-dom/generatePath';

import { fetchAllPosts, deletePost } from 'actions/post';
import PostItem from 'components/PostItem';
import Button from 'components/Button';

import './style.css';

class PostList extends React.Component {
  state = {
    filterText: '',
    allPosts: this.props.postList,
    showDeletePostModal: false
  }
  
  componentDidMount() {
    this.props.fetchAllPosts()
  }

  componentDidUpdate(prevProps) {
    if (this.props.postList !== prevProps.postList) {
      this.setState({
        allPosts: this.props.postList
      })
    }
  }

  handleSearchOnChange = (event) => {
    this.handleSetSearchText(event.target.value)
  }

  filterPostList = debounce(() => {
    this.setState({
      allPosts: this.props.postList.filter(post => post.title.includes(this.state.filterText))
    })
   }, 200)

  handleSetSearchText = (searchValue) => {
    this.setState({
      filterText: searchValue.toLowerCase()
    }, () => {
      this.filterPostList()
    })
  }

  handleSearchClearClick = () => {
    this.clearSearchFilter();
  }

  clearSearchFilter = () => {
    this.setState({ 
      filterText: '' 
    }, () => {
      this.filterPostList()
    })
  }

  hideModal = () => {
    if(this.props.isDeletePostSuccess) {
      this.setState({
        showDeletePostModal: true
      }, () => {
        setTimeout(() => {
          this.setState({
            showDeletePostModal: false
          })
        }, 1500);
      })
    }
  }

  deletePost = (postId) => {
    const deletePostResult = window.confirm("Are you sure to delete post?")
    console.log('deleted item id: ', postId) // Leave it by purpose cuz delete endpoint doesnt really work
    deletePostResult && this.props.deletePost(postId)
    this.hideModal()
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

  renderDeletePost() {
    return <p>Post deleted successfully!</p>
  }

  render() {
    const { filterText, showDeletePostModal, allPosts } = this.state;
    const { isLoading, dateList } = this.props;

    return(
      <React.Fragment>
        <div className="search-container">
          <input className="search-box"
            type="text"
            maxLength="15"
            value={this.state.filterText}
            placeholder="Search in Titles"
            onChange={this.handleSearchOnChange} />
          <Button type="delete" buttonText="Clear" onClick={this.handleSearchClearClick} />
        </div>

        {isLoading && <p>Loading...</p>}

        {!isLoading && showDeletePostModal && this.renderDeletePost()}

        {!isLoading && allPosts && allPosts.length > 0 && 
          <div className="posts-container">
            <h1>Here our awesome Blog</h1>
            {allPosts.map(post => 
              <PostItem
                key={post.id}
                title={post.title}
                body={post.body.substr(0, 10) + '...'}
                date={dateList[post.id]}
                onRedirectButtonClick={this.handleReadMoreClick.bind(this, post.id)}
                onDeleteButtonClick={this.handleDeletePostClick.bind(this, post.id)}
              />
            )}
          </div>
        }
        {!isLoading && allPosts.length === 0 && filterText.length > 0 &&
          <p className="no-result">No result for {filterText} </p> }
      </React.Fragment>
    )
  }
}

export default connect(
  (state) => ({
    postList: state.post.posts,
    isLoading: state.post.isLoading,
    dateList: state.post.dateList,
    isDeletePostSuccess: state.post.isDeletePostSuccess
  }),
  {
    fetchAllPosts,
    deletePost
  }
)(PostList);
