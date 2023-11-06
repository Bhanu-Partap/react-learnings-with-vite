import React, { Component } from 'react'

export default class ComponentDidMount extends Component {
    constructor(){
        super()
        console.warn("constructor");
    }

    componentDidMount(){
        console.warn("ComponentDidMount");
    }
  render() {

    return (
      <div>

      </div>
    )
  }
}
