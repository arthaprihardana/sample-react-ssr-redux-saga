import React, { Component } from 'react';

export default class SomeComponent extends Component {

    componentDidMount = () => {
        console.log("some component");
    }

    render() {
        return (
            <p>Hi, I'm async.</p>
        )
    }
}