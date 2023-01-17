import React, {Component} from "react";

class PreviewSection extends Component {

    render() {
        return(
            <section>
                <h3>{this.props.heading}</h3>
                <p>{this.props.startDate} - {this.props.endDate}</p>
                <p>{this.props.title}</p>
                <p>{this.props.titleProvider}</p>
            </section>
        )
    }
}

export default PreviewSection;