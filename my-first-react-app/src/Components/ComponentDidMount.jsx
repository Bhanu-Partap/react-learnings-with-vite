import React, { Component } from 'react'

export default class ComponentDidMount extends Component {
    constructor(){
        super()
        console.warn("Constructor");
    }
    componentDidMount(){
        console.warn("ComponentDidMount");
    }
  render() {
    console.warn("Render");
    return (
      <div>
        <h1>componentDidMount</h1>
      </div>
    )
  }
}
