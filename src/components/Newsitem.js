import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
<div className='my-3'>
  <div className="card" style={{width: "18rem"}}>
    <img src={imageUrl?imageUrl:"https://ommcom.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/06/21140252/dzzXNZ7G8vDT24RS9EBJKN-e1655800399230.jpg"} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p> 
      <a href={newsUrl} target="_blank" className="btn btn-sm btn-warning">Read More</a> 
    </div>
  </div>
</div>
    )
  }
}

export default Newsitem