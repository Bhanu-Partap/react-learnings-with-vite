import React from 'react'

export default class ComponentDidMount extends React.Component {
    constructor() {
        super()
        this.state={
            name:"BMW"
        }
    }
    componentDidMount() {
        console.warn("ComponentDidMount");
    }

    // componentDidUpdate() {
    //     console.warn("ComponentDidUpdate");
    // }
    
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
