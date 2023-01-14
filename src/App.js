import React, {Component} from "react";
import InfoSection from "./components/InfoSection";

class App extends Component {
    render() {
        return (
            <div>
                <InfoSection fields={[{type: "text", placeholder: "First Name"}]}
                heading="Personal Info"></InfoSection>
            </div>
        )
    }
}

export default App;
