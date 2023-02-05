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
                        {type: "text", placeholder: "First Name"},
                        {type: "text", placeholder: "Last Name"}, 
                        {type: "email", placeholder: "Email"},
                        {type: "tel", placeholder: "Phone Number"}
                    ], id: 0}
                ],
                [   {data: [
                        {type: "text", placeholder: "Title of qualification awarded"},
                        {type: "text", placeholder: "Organization that provided said title"}, 
                        {type: "date", placeholder: "From"},
                        {type: "date", placeholder: "To"}
                    ], id: 1}
                ],
                [
                    {data: [
                        {type: "text", placeholder: "Title of the occupation"},
                        {type: "text", placeholder: "Employer"}, 
                        {type: "date", placeholder: "From"},
                        {type: "date", placeholder: "To"}
                    ], id: 2}
                ]
            ]
        };
    }

    handleChange(e, id) {
        console.log(id);
    }

    render() {
        return (
            <div>
                <Header></Header>
            <form>
                <InfoSection 
                    fieldsets={this.state.infosets[0]} 
                    heading="Personal Info"
                    handleChange={this.handleChange}>
                </InfoSection>

                <InfoSection 
                    fieldsets={this.state.infosets[1]} 
                    heading="Education and Training"
                    handleChange={this.handleChange}>
                </InfoSection>

                <InfoSection 
                    fieldsets={this.state.infosets[2]} 
                    heading="Work Experience"
                    handleChange={this.handleChange}>
                </InfoSection>
                <button>Submit</button>
            </form>
                <Footer></Footer>
            </div>
        )
    }
}

export default App;
