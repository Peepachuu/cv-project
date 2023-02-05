import React, {Component} from "react";

class InfoSection extends Component {
    
    render() {
        
        const {fieldsets, heading, handleChange} = this.props;
        console.log(fieldsets);
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