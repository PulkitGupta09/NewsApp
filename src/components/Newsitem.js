import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,time,source} = this.props;
    return (
<div className='my-3'>
  <div className="card">
    <span className = "badge bg-danger" style= {{position: "absolute", top: "0px", right: "0px", padding: "10px"}}>{source}</span>
    <img src={imageUrl?imageUrl:"https://ommcom.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/06/21140252/dzzXNZ7G8vDT24RS9EBJKN-e1655800399230.jpg"} className="card-img-top" alt="..."/>
    
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p> 
      <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(time).toLocaleString()}</small></p>
      <a href={newsUrl} target="_blank" className="btn btn-sm btn-warning">Read More</a> 
    </div>
  </div>
</div>
    )
  }
}

export default Newsitem