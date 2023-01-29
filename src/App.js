import React, {Component} from "react";
import InfoSection from "./components/InfoSection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/styles.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            educationAndTraining: [],
            personalInfo: [],
            workExperience: []
        };
    }

    handleChange(e) {
        
    }

    render() {
        return (
            <div>
                <Header></Header>
            <form>
                <InfoSection fieldset={[{type: "text", placeholder: "First Name"},
                    {type: "text", placeholder: "Last Name"}, {type: "email", placeholder: "Email"},
                    {type: "tel", placeholder: "Phone Number"}]} heading="Personal Info">
                </InfoSection>

                <InfoSection fieldset={[{type: "text", placeholder: "Title of qualification awarded"},
                    {type: "text", placeholder: "Organization that provided said title"}, {type: "date", placeholder: "From"},
                    {type: "date", placeholder: "To"}]} heading="Education and Training">
                </InfoSection>

                <InfoSection fieldset={[{type: "text", placeholder: "Title of the occupation"},
                    {type: "text", placeholder: "Employer"}, {type: "date", placeholder: "From"},
                    {type: "date", placeholder: "To"}]} heading="Work Experience">
                </InfoSection>
                <button>Submit</button>
            </form>
                <Footer></Footer>
            </div>
        )
    }
}

export default App;
