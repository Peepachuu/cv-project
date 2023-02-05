import React, {Component} from "react";

class InfoSection extends Component {
    
    render() {
        const {heading, fieldsets, handleChange} = this.props;

        return (
            <section className={heading}>
                <h2>{heading}</h2>
                {fieldsets.map(fieldset => (
                    <fieldset>
                        {fieldset.data.map(field => (
                            <input 
                                type={field.type} 
                                placeholder={field.placeholder} 
                                onChange={(e) => {handleChange(e, fieldset.id)}} 
                                name={field.name}
                                value={field.value}
                                required
                            />
                        ))}
                    </fieldset>
                ))}
            </section>
        )
    }
}

export default InfoSection;