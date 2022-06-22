import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Loading from "./loading.js"

export class News extends Component {
  constructor() {
    super();
    console.log("Hello i am constructor from news components");
    this.state = {
      articles: [],
      loading: false,
      totalResults: 0,
      page: 1 
    };
  }

  async componentDidMount(){
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3cc42736a39a4a7b866f366218920479&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parseData = await data.json();  
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false})
  }

  handlePrevClick = async ()=>{
    console.log("clicked on prev click");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3cc42736a39a4a7b866f366218920479&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parseData = await data.json();  
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      page: this.state.page - 1,
      loading: false

    })
  }
  handleNextClick = async ()=>{
    if(this.state.page + 1>Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
    else{  
      console.log("clicked on next click"); 
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3cc42736a39a4a7b866f366218920479&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parseData = await data.json();  
      console.log(parseData);
      this.setState({
        articles: parseData.articles,
        page: this.state.page + 1,
        loading: false
      }) 
    }
  }
  render() {
    return (
      <>
      <div className="container">
        <div className="Container my-3 mx-4">
          <h1 className="mb-5 mt-5 text-center">NewsMonkey - Top Headlines</h1>
          {this.state.loading && <Loading />}
          <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
              return <div className="col-md-4" key = {element.url}>
            <Newsitem
              title={element.title?element.title:""}
              description={element.description?element.description:""}
              imageUrl={element.urlToImage}
              newsUrl={element.url}
            />
          </div>
            })}

          </div>
        </div>
        <hr />
        <div className="container d-flex justify-content-evenly">
        <button disabled = {this.state.page<=1} type="button" className="btn btn-warning" onClick= {this.handlePrevClick} >&larr; Prev</button>
        <button disabled = {(this.state.page + 1>Math.ceil(this.state.totalResults/this.props.pageSize))}type="button" className="btn btn-warning" onClick= {this.handleNextClick}>Next &rarr;</button>
        </div>
        <hr />
      </div>
      </>
      
    );
  }
}

export default News;
