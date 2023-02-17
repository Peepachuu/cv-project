import React from "react";

function PreviewSection(props) {
    
    const {fieldset} = props;
    return (
        <li className="previewSection">
            <span>{fieldset.data[2].value} - {fieldset.data[3].value}</span>
            <ul>
                <li>{fieldset.data[0].name}: {fieldset.data[0].value}</li>
                <li>{fieldset.data[1].name}: {fieldset.data[1].value}</li>
            </ul>
        </li>
    );
}

export default PreviewSection;