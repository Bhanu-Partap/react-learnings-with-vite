import React, { Component } from 'react'

export default class Render extends Component {
  render(props) {
    console.warn("Render method :",this.props);
    return (
      <>
        <div className="render">
            <h1>Render {this.props.name}</h1>
            <button>Update Name</button>
        </div>
      </>
    )
  }
}
