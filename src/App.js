import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';

import logo from './logo.svg';
import './App.css';

const NotFound = () => (
  <p>404:( Page not Found</p>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>

        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/posts" component={List} /> */}
            {/* <Route exact path="/posts/:id" component={Post} /> */}

            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
