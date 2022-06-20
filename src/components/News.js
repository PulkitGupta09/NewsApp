import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  render() {
    return (
      <div className="container">
        <div className="Container my-3">
          <h3>NewsMonkey - Top Headlines</h3>
          <div className="row">
            <div className="col-md-4">
            <Newsitem title="mytitle" description="my description" />
            </div>
            <div className="col-md-4">
            <Newsitem title="mytitle" description="my description" />
            </div>
            <div className="col-md-4">
            <Newsitem title="mytitle" description="my description" />
            </div>
          </div>
        </div> 
      </div>  
    );
  }
}

export default News;
