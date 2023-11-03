import React, { Component } from 'react'

export default class Render extends Component {
  render(props) {
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
