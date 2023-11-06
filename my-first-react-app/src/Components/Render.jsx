import React, { Component } from 'react'

export default class Render extends Component {
  constructor(){
    super();
    this.state={
      name:"Nothing here"
    }
  }
  render() {
    console.warn("Render method :",this.props);
    return (
      <>
        <div className="render">
            <h1>Render {this.name}</h1>
            <button onClick={()=>this.setState({name:"BMW"})}>Update Name</button>
        </div>
      </>
    )
  }
}
