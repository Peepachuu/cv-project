import React, {Component} from "react";
import Field from "./Field";

class InfoSection extends Component {
    constructor(props) {
        super(props);
        this.state = {fieldsCount: 1};
    }
    render() {
        return (
            <section>
                <h2>{this.props.heading}</h2>
                {this.props.fields.map(field => <Field fieldType={field.type} fieldPlaceholder={field.placeholder}></Field>)}
            </section>
        )
    }
}

export default InfoSection;