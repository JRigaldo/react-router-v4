import React, { Component } from 'react'
import Header from '../containers/header';
import {Route, Switch} from 'react-router-dom';
import RequireAuthentification from '../helpers/require-authentification';
import Home from './home';
import TodoApp from './todo-app';
import Ressources from './ressources';
require("../style.css");

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          {/* <Route exact path="/:id" component={Home} /> */}
          <Route exact path="/" component={TodoApp} />
          <Route exact path="/ressources" component={RequireAuthentification(Ressources)} />
        </Switch>
        
      </div>
    )
  }
}
