import React, {Component} from "react";
import InfoSection from "./components/InfoSection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/styles.css";
import uniqid from "uniqid";

class App extends Component {
    constructor() {
        super();

        this.defaultPersonal = [
            {type: "text", placeholder: "First Name", name:"firstName", value:""},
            {type: "text", placeholder: "Last Name", name:"lastName", value:""}, 
            {type: "email", placeholder: "Email", name:"email", value:""},
            {type: "tel", placeholder: "Phone Number", name:"phoneNumber", value:""}
        ];

        this.defaultEducation = [
            {type: "text", placeholder: "Title of qualification awarded", name:"qualification", value:""},
            {type: "text", placeholder: "Organization that provided said title", name:"organizaation", value:""}, 
            {type: "date", placeholder: "From", name:"startDate", value:""},
            {type: "date", placeholder: "To", name:"endDate", value:""}
        ];
        this.defaultWorkExp = [
            {type: "text", placeholder: "Title of the occupation", name:"occupation", value:""},
            {type: "text", placeholder: "Employer", name:"employer", value:""}, 
            {type: "date", placeholder: "From", name:"startDate", value:""},
            {type: "date", placeholder: "To", name:"endDate", value:""}
        ];
        this.state = {
            infosets: [
                [ {data: this.clone(this.defaultPersonal), id: uniqid()} ],
                [ {data: this.clone(this.defaultEducation), id: uniqid()} ],
                [ {data: this.clone(this.defaultWorkExp), id: uniqid()} ]
            ]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    clone(obj){
        if(obj == null || typeof(obj) != 'object')
            return obj;
    
        var temp = new obj.constructor(); 
        for(var key in obj)
            temp[key] = this.clone(obj[key]);
    
        return temp;
    }

    handleChange(e, id) {
        this.setState(this.state.infosets.map(infoset => {
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

    handleAdd(heading) {
        let pos;
        let dataToAdd;
        if (heading === "Personal Info") {
            pos = 0;
            dataToAdd = this.clone(this.defaultPersonal);
        }
        else if (heading === "Education and Training") {
            pos = 1;
            dataToAdd = this.clone(this.defaultEducation);
        }
        else if (heading === "Work Experience") {
            pos = 2;
            dataToAdd = this.clone(this.defaultWorkExp);
        }
        let infosetsClone = this.clone(this.state.infosets);
        infosetsClone[pos].push({data: dataToAdd, id:uniqid()});
        this.setState({infosets: infosetsClone});
    }

    render() {
        return (
            <section className="main">
                <Header></Header>
                <div className="container">
                <form>
                    <InfoSection 
                        fieldsets={this.state.infosets[0]} 
                        heading="Personal Info"
                        handleChange={this.handleChange}
                        handleAdd={this.handleAdd}
                        canAddDel={false}
                    >
                    </InfoSection>

                    <InfoSection 
                        fieldsets={this.state.infosets[1]} 
                        heading="Education and Training"
                        handleChange={this.handleChange}
                        handleAdd={this.handleAdd}
                        canAddDel={true}
                    >
                    </InfoSection>

                    <InfoSection 
                        fieldsets={this.state.infosets[2]} 
                        heading="Work Experience"
                        handleChange={this.handleChange}
                        handleAdd={this.handleAdd}
                        canAddDel={true}
                    >
                    </InfoSection>
                    <button>Submit</button>
                </form>
                </div>
                <Footer></Footer>
            </section>
        )
    }
}

export default App;
