import React, { Component } from 'react'
import Header from '../containers/header';
import {Route, Switch} from 'react-router-dom';
import RequireAuthentification from '../helpers/require-authentification';
import Home from './home';
import TodoApp from './todo-app';
import Ressources from './ressources';
import Selecteur from '../containers/ressources-selecteur';
require("../style.css");

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/todoapp" component={TodoApp} />
          <Route exact path="/selecteur" component={Selecteur} />
          <Route exact path="/ressources" component={RequireAuthentification(Ressources)} />
        </Switch>
        
      </div>
    )
  }
}
