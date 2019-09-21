import React from 'react';

import './style.css';

class Header extends React.Component {
  state = {
    pages: [
      {
        url: '/',
        text: 'Home'
      },
      {
        url: '/posts',
        text: 'All Posts'
      },
      {
        url: '/add-post',
        text: 'Add New Post'
      }
    ]
  }

  render() {
    const { pages } = this.state;
    return (
      <div className="header-container">
        {pages.map((page) => <a href={page.url}>{page.text}</a>)}
      </div>
    )
  }
}

export default Header;
