import React, { Component } from 'react';

export default class Button extends Component {

    constructor() {
        super();
        this.state = {
            buttonText: 'Push',
        };
    }
    handelClick = () => {
        this.setState({buttonText: 'Hello'}) 
    }
    render() {
        return (
        <div>
            <button onClick={this.handelClick}>{this.state.buttonText}</button>
        </div>
    )}

}