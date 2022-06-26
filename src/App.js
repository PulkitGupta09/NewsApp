import React, { Component } from 'react';
import NAVi from "./components/navBar.js";
import News from './components/News.js';
import ReactDOM from "react-dom/client";
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
  <div>
        <BrowserRouter>
        <NAVi/>
        <LoadingBar
        color='#f11646'
        shadow = "true"
        height = {3}
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
        <Route path="/" element={<News key="gen" setProgress = {this.setProgress} apiKey = {this.apiKey} pageSize={6} country="in" category="general"/>}/>
          <Route path="/general" element={<News key="general" setProgress = {this.setProgress} apiKey = {this.apiKey} pageSize={6} country="in" category="general"/>}/>
          <Route path="/home" element={<News key="gener" setProgress = {this.setProgress} apiKey = {this.apiKey} pageSize={6} country="in" category="general"/>}/>
          <Route path="/business" element={<News key="business" setProgress = {this.setProgress} apiKey = {this.apiKey} pageSize={6} country="in" category="business"/>}/>
          <Route path="/entertainment" element={<News key="entertainment" setProgress = {this.setProgress} apiKey = {this.apiKey} pageSize={6} country="in" category="entertainment"/>}/>
          <Route path="/health" element={<News key="health" setProgress = {this.setProgress} apiKey = {this.apiKey} pageSize={6} country="in" category="health"/>}/>
          <Route path="/science" element={<News key="science" setProgress = {this.setProgress} apiKey = {this.apiKey} pageSize={6} country="in" category="science"/>}/>
          <Route path="/sports" element={<News key="sports" setProgress = {this.setProgress} apiKey = {this.apiKey} pageSize={6} country="in" category="sports"/>}/>
          <Route path="/technology" element={<News key="technology" setProgress = {this.setProgress} apiKey = {this.apiKey} pageSize={6} country="in" category="technology"/>}/>
      </Routes>
    </BrowserRouter>
  </div>
    );
  }
}
