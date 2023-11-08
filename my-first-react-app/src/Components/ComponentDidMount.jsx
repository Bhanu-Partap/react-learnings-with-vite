import React from 'react'

export default class ComponentDidMount extends React.Component {
    constructor() {
        super()
        // console.warn("Constructor");
    }
    componentDidMount() {
        console.warn("ComponentDidMount");
    }
    render() {
        console.warn("Render");
        return (
            <div className="Component">
                <h1>componentDidMount</h1>
            </div>
        )
    }
}
