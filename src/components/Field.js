import React, {Component} from "react";

class Field extends Component {
    render() {
        const {fieldType, fieldPlaceholder} = this.props;
        return (
            <input type={fieldType} placeholder={fieldPlaceholder} required></input>
        )
    }
}

export default Field;