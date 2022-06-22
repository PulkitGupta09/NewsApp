import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  constructor() {
    super();
    console.log("Hello i am constructor from news components");
    this.state = {
      articles: [],
      loading: false,
      page: 1 
    };
  }

  async componentDidMount(){
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=3cc42736a39a4a7b866f366218920479&page=1";
    let data = await fetch(url);
    let parseData = await data.json();  
    console.log(parseData);
    this.setState({articles: parseData.articles, totalResults: parseData.totalResults})
  }

  handlePrevClick = async ()=>{
    console.log("clicked on prev click");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3cc42736a39a4a7b866f366218920479&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parseData = await data.json();  
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      page: this.state.page - 1

    })
  }
  handleNextClick = async ()=>{
    if(this.state.page + 1>Math.ceil(this.state.totalResults/20)){

    }
    else{  
      console.log("clicked on next click"); 
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3cc42736a39a4a7b866f366218920479&page=${this.state.page + 1}`;
      let data = await fetch(url);
      let parseData = await data.json();  
      console.log(parseData);
      this.setState({
        articles: parseData.articles,
        page: this.state.page + 1
      }) 
    }
  }
  render() {
    return (
      <div className="container">
        <div className="Container my-3">
          <h3>NewsMonkey - Top Headlines</h3>
          <div className="row">
            {this.state.articles.map((element)=>{
              return <div className="col-md-4" key = {element.url}>
            <Newsitem
              title={element.title?element.title:""}
              description={element.description?element.description:""}
              imageUrl={element.urlToImage?element.urlToImage:"https://ommcom.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/06/21140252/dzzXNZ7G8vDT24RS9EBJKN-e1655800399230.jpg"}
              newsUrl={element.url}
            />
          </div>
            })}

          </div>
        </div>
        <hr />
        <div className="container d-flex justify-content-evenly">
        <button disabled = {this.state.page<=1} type="button" class="btn btn-warning" onClick= {this.handlePrevClick} >&larr; Prev</button>
        <button disabled = {(this.state.page + 1>Math.ceil(this.state.totalResults/20))}type="button" class="btn btn-warning" onClick= {this.handleNextClick}>Next &rarr;</button>
        </div>
        <hr />
      </div>
      
    );
  }
}

export default News;
