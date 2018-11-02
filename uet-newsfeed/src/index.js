import './css/index.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MainApp from './app';
import { Redirect } from 'react-router-dom'


class App extends Component{
  constructor(props){
    super(props);
    if(!sessionStorage.load){
      // location.replace("/home");
      // this.props.history.push('/home');
      sessionStorage.load=1;
    }
  }
  render() {
    return (
      <MainApp/>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
