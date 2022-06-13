import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        return (
            <div>
                <h1>coooo</h1>
                <h2 style={{ textAlign: 'center' }}>{this.props.title}</h2>

            </div>
        )
    }
}