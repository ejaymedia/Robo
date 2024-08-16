import React, { Component } from 'react'

export class Error extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.state({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <h1>No Result(s)</h1>
        }
        return this.props.children
    }
}

export default Error
