import React from 'react';

import './style.css';

class Header extends React.Component {
  state = {
    pages: [
      {
        id: 1,
        url: '/',
        text: 'Home'
      },
      {
        id: 2,
        url: '/posts',
        text: 'All Posts'
      },
      {
        id: 3,
        url: '/add-post',
        text: 'Add New Post'
      }
    ]
  }

  render() {
    const { pages } = this.state;
    return (
      <div className="header-container">
        {pages.map((page) => <a key={page.id} href={page.url}>{page.text}</a>)}
      </div>
    )
  }
}

export default Header;
