import './style.css'
import { Component } from "react";

export class Button extends Component {

    render() {
        const { text, onclick, disabled } = this.props;
        return (
            <button
                onClick={onclick}
                disabled={disabled}
                className='button'
            >
                {text}
            </button>
        );
    }
}