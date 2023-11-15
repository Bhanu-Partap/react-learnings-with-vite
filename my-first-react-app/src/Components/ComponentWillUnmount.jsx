import react , {Component} from "react"
import WillUnmountChild from "./WillUnmountChild";

export default class ComponentWillUnmount extends Component{
    constructor(){
        super()
            this.state= {
                show:true
            }
    }
    render(){
            return(
            <div className="container">
                {
                    this.state.show ?<WillUnmountChild /> : <h1> Child Component Deleted </h1>
                }
                <button onClick={()=>this.setState({show:!this.state.show})}> Toggle the child component</button>
            </div>
        )
    }
}