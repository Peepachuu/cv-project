import React, {Component} from "react";
import Fieldset from "./Fieldset";

class InfoSection extends Component {

    constructor(props) {
        super(props);
        this.state = {fieldsetCount: 1};
    }
    render() {
        let fieldsets = [];
        for (let i = 0; i < this.state.fieldsetCount; ++i) {
            fieldsets.push(this.props.fieldset);
        }
        return (
            <section className={this.props.heading}>
                <h2>{this.props.heading}</h2>
                {fieldsets.map(fieldset => <Fieldset fields={fieldset}></Fieldset>)}
            </section>
        )
    }
}

export default InfoSection;