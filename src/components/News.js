import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  render() {
    return (
        <>
      <div>This is a news component</div>
      <Newsitem/>
      <Newsitem/>
      <Newsitem/>
      <Newsitem/>
    </>
    )
  }
}

export default News