import React, {Component} from "react";

class PreviewSection extends Component {
    render() {
        return (
            <section>
                <h3>{this.props.heading}</h3>    
            </section>
        );
    }
}

export default PreviewSection;