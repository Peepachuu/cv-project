import React, {Component} from "react";

class CVPreview extends Component {
    render() {
        const {firstName, lastName} = this.props;
        return (
            <section className="Preview">
                <h2>{firstName} {lastName}</h2>
            </section>
        )
    }
}

export default CVPreview;