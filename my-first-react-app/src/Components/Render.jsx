import React, { Component } from 'react'

export default class Render extends Component {
  render(props) {
    console.warn("Render method :",this.props);
    return (
      <>
        <div className="render">
            <h1>Render {this.name}</h1>
            <button onClick={()=>this.props.name}>Update Name</button>
        </div>
      </>
    )
  }
}
