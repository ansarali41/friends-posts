import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import AllPost from './components/AllPost/AllPost';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';


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
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
