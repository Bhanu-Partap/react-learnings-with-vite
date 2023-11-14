import React, { Component } from 'react'

export default class ComponentDidUpdate extends Component {
    constructor() {
        super()
        this.state={
            name:"BMW"
        }
    }
    componentDidUpdate() {
        console.warn("ComponentDidUpdate");
    }

    
    render() {
        console.warn("Render");
        return (
            <div className="Component">
                <h1>componentDidMount {this.state.name}</h1>
                <button onClick={()=>this.setState({name:"Lamborghini"})}>Update Name</button>
            </div>
        )
    }
}
