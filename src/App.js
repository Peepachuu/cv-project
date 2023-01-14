import React, {Component} from "react";
import InfoSection from "./components/InfoSection";

class App extends Component {
    render() {
        return (
            <div>
                <InfoSection fieldset={[{type: "text", placeholder: "First Name"},
                {type: "text", placeholder: "Last Name"}]}
                heading="Personal Info"></InfoSection>
            </div>
        )
    }
}

export default App;
