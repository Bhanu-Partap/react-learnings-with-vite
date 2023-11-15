import react , {Component} from "react"

export default class ComponentWillUnmount extends Component{
    constructor(){
        super(){
            this.state= {
                name:"Bhanu"
            }
        }
        render(){
            return(
                <div> </div>
            )
        }
    }
}