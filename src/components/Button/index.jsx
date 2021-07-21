import { Component } from "react";

export class Button extends Component {

    render() {
        const { text, onclick } = this.props;
        return (
            <button onClick={onclick}>
                {text}
            </button>
        );
    }
}