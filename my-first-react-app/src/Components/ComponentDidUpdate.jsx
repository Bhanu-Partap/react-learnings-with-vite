import React, { Component } from 'react'

export default class ComponentDidUpdate extends Component {
    constructor() {
        super()
        this.state={
            name:"BMW",
            count:0
        }
    }
    componentDidUpdate(preProps, preState, snapshot) {
        console.warn("ComponentDidUpdate", preState);
    }

    
    render() {
        console.warn("Render");
        return (
            <div className="Component">
                {/* <h1>Heyy {this.state.name}</h1> */}
                <h1>ComponentDidUpdate Counter = {this.state.count}</h1>
                {/* <button onClick={()=>this.setState({name:"Lamborghini"})}>Update Name</button> */}
                <button onClick={()=>this.setState({count:this.state.count + 1})}>Increment Counter</button>
            </div>
        )
    }
}
