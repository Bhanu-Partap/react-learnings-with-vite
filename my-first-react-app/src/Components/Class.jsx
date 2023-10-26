import React from "react";

export default class App extends React.Component {
    render() {
        return (

            <div>
                <h1>Hello {this.props.name}</h1>
                <h3>{this.props.country}</h3>
            </div>
        )
    }
}