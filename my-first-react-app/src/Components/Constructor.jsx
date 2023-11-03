import React from 'react'

 class Constructor extends React.Component {

    constructor(props){
        super(props);
        // this.state={
        //     data:"IDK"

        // }
        // this.name = "honeey"
    }

    render() {
        return (
            <>
                {/* <h1>Constructor Component {this.state.data}</h1> */}

{/* ============// Passign the Props using clas component from the Parent Component ========== */}
                <h1>Constructor Component {this.props.name}</h1>

{/* ============// Passign the Props using class component from constructor ========== */}
                <h1>Constructor Component {this.name}</h1>
            </>
        )
    }
}

export default Constructor;