import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TodoApp from './components/todoapp';
import LandingPage from './components/landingpage';
import NavBar from './components/navbar';

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <Router>
        <div>
          <Route exact path='*' component={NavBar}/>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/todolist' component={TodoApp} />
        </div>
      </Router>
    </MuiThemeProvider> 
    )
  }
}