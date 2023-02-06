import React, {Component} from "react";
import InfoSection from "./components/InfoSection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/styles.css";

class App extends Component {
    constructor() {
        super();

        this.state = {
            infosets: [
                [   {data: [   
                        {type: "text", placeholder: "First Name", name:"firstName", value:""},
                        {type: "text", placeholder: "Last Name", name:"lastName", value:""}, 
                        {type: "email", placeholder: "Email", name:"email", value:""},
                        {type: "tel", placeholder: "Phone Number", name:"phoneNumber", value:""}
                    ], id: 0}
                ],
                [   {data: [
                        {type: "text", placeholder: "Title of qualification awarded", name:"qualification", value:""},
                        {type: "text", placeholder: "Organization that provided said title", name:"organizaation", value:""}, 
                        {type: "date", placeholder: "From", name:"startDate", value:""},
                        {type: "date", placeholder: "To", name:"endDate", value:""}
                    ], id: 1}
                ],
                [
                    {data: [
                        {type: "text", placeholder: "Title of the occupation", name:"occupation", value:""},
                        {type: "text", placeholder: "Employer", name:"employer", value:""}, 
                        {type: "date", placeholder: "From", name:"startDate", value:""},
                        {type: "date", placeholder: "To", name:"endDate", value:""}
                    ], id: 2}
                ]
            ]
        };
        this.handleChange = this.handleChange.bind(this);
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
                    >
                    </InfoSection>

                    <InfoSection 
                        fieldsets={this.state.infosets[1]} 
                        heading="Education and Training"
                        handleChange={this.handleChange}
                    >
                    </InfoSection>

                    <InfoSection 
                        fieldsets={this.state.infosets[2]} 
                        heading="Work Experience"
                        handleChange={this.handleChange}
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
