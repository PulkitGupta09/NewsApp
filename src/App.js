import React, { Component } from 'react';
import NAVi from "./components/navBar.js";
import News from './components/News.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <NAVi/>
        <News/>
      </div>
    )
  }
}
