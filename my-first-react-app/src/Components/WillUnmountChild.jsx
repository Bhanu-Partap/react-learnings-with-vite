import React, { Component } from 'react'

export default class WillUnmountChild extends Component {
    componentWillUnmount(){
        alert("Component unmount initiated")
    }
  render() {
    return (
      <div>
        <h1>Will Unmount Child</h1>
      </div>
    )
  }
}
