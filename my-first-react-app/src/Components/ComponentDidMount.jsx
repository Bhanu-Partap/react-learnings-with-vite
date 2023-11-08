import React from 'react'

export default class ComponentDidMount extends React.Component {
    constructor() {
        super()
        this.state={
            name:"BMW"
        }
    }
    componentDidUpdate() {
        console.warn("ComponentDidMount");
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
