import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Error from './pages/Error'
import history from './history';
import NavBar from './components/NavBar';





const App = () => {
    
    return(
        <div>
            <Router history={history}>
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route component={Error} />
                </Switch>
            </Router>
        </div>
    )
}

export default App