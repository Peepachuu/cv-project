import React from "react";
import PreviewSection from "./PreviewSection";

function CVPreview(props) {
    const {personalInfo, educationInfo, experienceInfo} = props;
    return (
        <section className="Preview">
            <section className="personal">
                <h2>{personalInfo.data[0].value} {personalInfo.data[1].value}</h2>
                <div>
                    <div>{personalInfo.data[2].value}</div>
                    <div>{personalInfo.data[3].value}</div>
                </div>
            </section>
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

export default CVPreview;