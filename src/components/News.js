import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Loading from "./loading.js"
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    pageSize: '8',
    country: 'in',
    category: 'general'
  }
  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,  
    category: PropTypes.string
  }



  constructor(props) {
    super(props);
    console.log("Hello i am constructor from news components");
    this.state = {
      articles: [],
      loading: false,
      totalResults: 0,
      page: 1 
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
  }

  capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  async updateNews() {
    this.props.setProgress(10);
    const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=821c5badbe3a4b298bd6d2c32d014463&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(40);
    let parseData = await data.json();
    this.props.setProgress(70);  
    // console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults
  })
  this.props.setProgress(100);
  }

  fetchMoreData = async () => {
    this.setState({
     page: this.state.page + 1
    })
    const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=821c5badbe3a4b298bd6d2c32d014463&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();  
    this.setState({
     articles: this.state.articles.concat(parseData.articles),
     totalResults: parseData.totalResults
 })
 };
  async componentDidMount(){
    this.updateNews();
  }

  handlePrevClick = async ()=>{
    this.setState({
      page: this.state.page - 1
    })
    this.updateNews();
  }
  handleNextClick = async ()=>{
    if(this.state.page + 1>Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
    else{  
          this.setState({
      page: this.state.page - 1
    })
    this.updateNews();
    }
  }
  render() {
    return (
      <>
          <h1 className="mb-5 mt-5 text-center">NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
          {this.state.loading && <Loading />}
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Loading />}
          >
          <div className="container">
          <div className="row">
            {this.state.articles.map((element)=>{
              return <div className="col-md-4" key = {element.url}>
            <Newsitem
              title={element.title?element.title:""}
              description={element.description?element.description:""}
              imageUrl={element.urlToImage}
              newsUrl={element.url}
              author = {element.author}
              time = {element.publishedAt}
              source = {element.source.name}
            />
          </div>
            })}
          </div> 
          </div>
        </InfiniteScroll>
        </>
    );
  }
}

export default News;
