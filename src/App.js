import React from "react";
import InfoSection from "./components/InfoSection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/styles.css";
import uniqid from "uniqid";
import CVPreview from "./components/CVPreview";

function App() {

    const defaultPersonal = [
            {type: "text", placeholder: "First Name", name:"firstName", value:""},
            {type: "text", placeholder: "Last Name", name:"lastName", value:""}, 
            {type: "email", placeholder: "Email", name:"email", value:""},
            {type: "tel", placeholder: "Phone Number", name:"phoneNumber", value:""}
    ];

    const defaultEducation = [
            {type: "text", placeholder: "Title of qualification awarded", name:"Qualification", value:""},
            {type: "text", placeholder: "Organization that provided said title", name:"Organization", value:""}, 
            {type: "text", placeholder: "From", name:"startDate", value:""},
            {type: "text", placeholder: "To", name:"endDate", value:""}
    ];
    const defaultWorkExp = [
            {type: "text", placeholder: "Title of the occupation", name:"Occupation", value:""},
            {type: "text", placeholder: "Employer", name:"Employer", value:""}, 
            {type: "text", placeholder: "From", name:"startDate", value:""},
            {type: "text", placeholder: "To", name:"endDate", value:""}
    ];
        
    const [infosets, setInfosets] = React.useState([
        [ {data: clone(defaultPersonal), id: uniqid()} ],
        [ {data: clone(defaultEducation), id: uniqid()} ],
        [ {data: clone(defaultWorkExp), id: uniqid()} ]
    ]);

    function clone(obj){
        if(obj == null || typeof(obj) != 'object')
            return obj;
    
        var temp = new obj.constructor(); 
        for(var key in obj)
            temp[key] = clone(obj[key]);
    
        return temp;
    }

    function handleChange(e, id) {
        setInfosets(infosets.map(infoset => {
            return infoset.map(fieldset => {
                if (fieldset.id === id) {
                    fieldset.data.map(field => {
                        if (field.name === e.target.name) {
                            field.value = e.target.value
                        }
                        return field
                    })
                }
                return fieldset;
            });
        }));
    }

    function handleAdd(heading) {
        let pos;
        let dataToAdd;
        if (heading === "Personal Info") {
            pos = 0;
            dataToAdd = clone(defaultPersonal);
        }
        else if (heading === "Education and Training") {
            pos = 1;
            dataToAdd = clone(defaultEducation);
        }
        else if (heading === "Work Experience") {
            pos = 2;
            dataToAdd = clone(defaultWorkExp);
        }
        let infosetsClone = clone(infosets);
        infosetsClone[pos].push({data: dataToAdd, id:uniqid()});
        setInfosets(infosetsClone);
    }

    function handleDelete(id) {
        let infosetClone = clone(infosets);
        setInfosets(infosetClone.map(infoset => {
            return infoset.filter((fieldset) => fieldset.id !== id)
        }));
    }

    return (
        <section className="main">
            <Header></Header>
            <div className="container">
                <form>
                    <InfoSection 
                        fieldsets={infosets[0]} 
                        heading="Personal Info"
                        handleChange={handleChange}
                        handleAdd={handleAdd}
                        handleDelete={handleDelete}
                        canAddDel={false}
                    >
                    </InfoSection>

                    <InfoSection 
                        fieldsets={infosets[1]} 
                        heading="Education and Training"
                        handleChange={handleChange}
                        handleAdd={handleAdd}
                        handleDelete={handleDelete}
                        canAddDel={true}
                    >
                    </InfoSection>

                    <InfoSection 
                        fieldsets={infosets[2]} 
                        heading="Work Experience"
                        handleChange={handleChange}
                        handleAdd={handleAdd}
                        handleDelete={handleDelete}
                        canAddDel={true}
                    >
                    </InfoSection>
                </form>
            </div>
            <div className="container">
                <CVPreview 
                    personalInfo={infosets[0][0]}
                    educationInfo={infosets[1]}
                    experienceInfo={infosets[2]}
                >
                </CVPreview>
            </div>
            <Footer></Footer>
        </section>
    )
}

export default App;
