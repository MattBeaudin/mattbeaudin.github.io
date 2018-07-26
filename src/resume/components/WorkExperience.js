import * as React from "react";

export default class WorkExperience extends React.Component {
    render() {
        return(
            <div>
                <p>{this.props.experience.title}</p>
                <p>{this.props.experience.company}</p>
            </div>
        );
    }
}
