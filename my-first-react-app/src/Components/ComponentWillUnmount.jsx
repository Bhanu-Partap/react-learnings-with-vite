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
        console.warn("render");
        return(
            <div className="container">
                <WillUnmountChild />
                <button onClick={()=>this.setState({show:!this.state.show})}> Toggle the child component</button>
            </div>
        )
    }
}