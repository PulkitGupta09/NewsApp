import React, { Component } from 'react'
import Spin from "./spinner.gif"

export default class loading extends Component {
  render() {
    return (
        <div className = "text-center mb-4">
            <img src={Spin} alt="loading" />
        </div>
    )
  }
}
