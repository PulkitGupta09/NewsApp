import React, { useState } from 'react';
import NAVi from "./components/navBar.js";
import News from './components/News.js';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = ()=> {

  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0)

    return (
  <div>
        <BrowserRouter>
        <NAVi/>
        <LoadingBar
        color='#f11646'
        shadow = "true"
        height = {3}
        progress={progress}        />
        <Routes>
        <Route path="/" element={<News key="gen" setProgress = {setProgress} apiKey = {apiKey} pageSize={6} country="in" category="general"/>}/>
          <Route path="/general" element={<News key="general" setProgress = {setProgress} apiKey = {apiKey} pageSize={6} country="in" category="general"/>}/>
          <Route path="/home" element={<News key="gener" setProgress = {setProgress} apiKey = {apiKey} pageSize={6} country="in" category="general"/>}/>
          <Route path="/business" element={<News key="business" setProgress = {setProgress} apiKey = {apiKey} pageSize={6} country="in" category="business"/>}/>
          <Route path="/entertainment" element={<News key="entertainment" setProgress = {setProgress} apiKey = {apiKey} pageSize={6} country="in" category="entertainment"/>}/>
          <Route path="/health" element={<News key="health" setProgress = {setProgress} apiKey = {apiKey} pageSize={6} country="in" category="health"/>}/>
          <Route path="/science" element={<News key="science" setProgress = {setProgress} apiKey = {apiKey} pageSize={6} country="in" category="science"/>}/>
          <Route path="/sports" element={<News key="sports" setProgress = {setProgress} apiKey = {apiKey} pageSize={6} country="in" category="sports"/>}/>
          <Route path="/technology" element={<News key="technology" setProgress = {setProgress} apiKey = {apiKey} pageSize={6} country="in" category="technology"/>}/>
      </Routes>
    </BrowserRouter>
  </div>
    );
  }

export default App;