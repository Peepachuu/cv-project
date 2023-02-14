import React, {Component} from "react";
import PreviewSection from "./PreviewSection";

class CVPreview extends Component {
    render() {
        const {personalInfo, educationInfo, experienceInfo} = this.props;
        return (
            <section className="Preview">
                <h2>{personalInfo.data[0].value} {personalInfo.data[1].value}</h2>
                <section className="main">
                    <section>
                        <h3>Experience</h3>
                        <ul>
                            {educationInfo.map(fieldset => <PreviewSection fieldset={fieldset}/>)}
                        </ul>
                    </section>

                    <section>
                        <h3>Education</h3>
                        <ul>
                            {experienceInfo.map(fieldset => <PreviewSection fieldset={fieldset}/>)}
                        </ul>
                    </section>
                </section>
            </section>
        )
    }
}

export default CVPreview;