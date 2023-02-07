import React, {Component} from "react";

class InfoSection extends Component {
    
    render() {
        const {heading, fieldsets, handleChange, canAddDel, handleAdd} = this.props;

        return (
            <section className={heading}>
                <h2>{heading}</h2>
                {fieldsets.map(fieldset => (
                    <fieldset key={fieldset.id}>
                        {fieldset.data.map(field => (
                            <input 
                                type={field.type} 
                                placeholder={field.placeholder} 
                                onChange={(e) => {handleChange(e, fieldset.id)}} 
                                name={field.name}
                                value={field.value}
                                key={field.name}
                                required
                            />
                        ))}
                        {canAddDel && <button>Delete</button>}
                    </fieldset>
                ))}
                {canAddDel && <button type="button" onClick={() => {handleAdd(heading)}}>Add</button>}
            </section>
        )
    }
}

export default InfoSection;