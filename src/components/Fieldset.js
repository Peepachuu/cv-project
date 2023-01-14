import React, {Component} from "react";
import Field from "./Field";

class Fieldset extends Component {

    render() {
        return (
            <section>
                {this.props.fields.map(field => <Field fieldType={field.type} fieldPlaceholder={field.placeholder}></Field>)}
            </section>
        )
    }
}

export default Fieldset;