import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import PostList from './containers/PostList';
import PostDetail from './containers/PostDetail';
import AddPost from './containers/AddPost';
import Header from 'containers/Header';

import './App.css';

const NotFound = () => (
  <p>404:( Page not Found</p>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>

        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/posts" component={PostList} />
            <Route exact path="/posts/:id" component={PostDetail} />
            <Route path="/add-post" component={AddPost} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
