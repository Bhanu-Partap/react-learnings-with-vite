import React from 'react'

 class Constructor extends React.Component {

    constructor(){
        super();
        this.state={
            data:"IDK"
        }
    }

    render() {
        return (
            <>
                
                <h1>Constructor Component {this.state.data}</h1>
            </>
        )
    }
}

export default Constructor;