import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import AllPost from './components/AllPost/AllPost';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import PostDetail from './components/PostDetail/PostDetail';


function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/home">
            <AllPost />
          </Route>
          <Route exact path="/">
            <AllPost />
          </Route>
          <Route path="/postDetail/:postId">
            <PostDetail/>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
