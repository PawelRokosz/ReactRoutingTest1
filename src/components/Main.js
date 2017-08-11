import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Login from './Login';

//Main uses Switch for group of routes
//Each Route has path that corresonds with Link's "to" from Nav component
//Main renders only one component Home, About, or Login

class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/login' component={Login} />
      </Switch>
    );
  }
}

export default Main;
