import React, { Component } from 'react'
import './Buttons.scss';

export class Button extends Component {
    render() {
        return (
            <div className="button-wrapper">
                <h2 className="button-text">{this.props.content}</h2>
            </div>
        )
    }
}

export default Button
