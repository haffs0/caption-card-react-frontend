import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Error from './pages/Error';
import history from './history';
import NavBar from './components/NavBar';
import AddCaptionsAndTags from './pages/AddCaptionsAndTags';
import SearchResult from './pages/SearchResult';


const App = () => (
  <>
    <Router history={history}>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search-result" component={SearchResult} />
        <Route exact path="/contribute" component={AddCaptionsAndTags} />
        <Route component={Error} />
      </Switch>
    </Router>
  </>
);

export default App;
