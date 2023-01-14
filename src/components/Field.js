import React, {Component} from "react";

class Field extends Component {
    render() {
        const {fieldType, fieldPlaceholder} = this.props;
        return (
            <input type={fieldType} placeholder={fieldPlaceholder}></input>
        )
    }
}

export default Field;