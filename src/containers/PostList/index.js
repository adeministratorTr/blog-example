import React from 'react';
import { connect } from 'react-redux';
import memoize from 'memoize-one';

import { fetchAllPosts } from 'actions/post';

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

  handleSetSearchText = (searchValue) => {
    this.setState({
      filterText: searchValue.toLowerCase()
    })
  }


  handleSearchClearClick = () => {
    this.clearSearchFilter()
  }

  clearSearchFilter = () => {
    this.setState({ filterText: '' })
  }

  render() {
    const { filterText } = this.state;
    const { postList, isLoading } = this.props;
    const filteredList = this.filter(postList, filterText);

    return(
      <React.Fragment>
        {isLoading && <p>Loading...</p>}
        <div className="search-container">
          <input className="search-box" 
            type="text" 
            maxlength='15' 
            value={filterText} 
            onChange={this.handleSearchOnChange} />
          <Button type='delete' buttonText='Clear' onClick={this.handleSearchClearClick} />
        </div>

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
        {!isLoading && filteredList.length === 0 && <p>No result for {filterText} </p> }
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
