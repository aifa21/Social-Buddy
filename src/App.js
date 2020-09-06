import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import PostDetails from './components/PostDetails/PostDetails';
import Header from './components/Header/Header';
function App() {

  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
      
        <Route path="/post/:postId">
          <PostDetails/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
            <NoMatch />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;