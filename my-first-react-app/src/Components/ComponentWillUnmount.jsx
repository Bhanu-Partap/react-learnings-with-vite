import react , {Component} from "react"

export default class ComponentWillUnmount extends Component{
    constructor(){
        super()
            this.state= {
                name:"Bhanu"
            }
    }
    render(){
        return(
            <div className="container">
                <h1>Component will unmount {this.state.name}</h1>
                <button onClick={()=>this.setState({name:"Partap"})}> Toggle the child component</button>
            </div>
        )
    }
}