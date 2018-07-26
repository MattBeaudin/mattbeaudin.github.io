import * as React from "react";
import WorkExperience from "./WorkExperience";

export default class WorkExperienceList extends React.Component {
    render() {
		var experienceList = [
			{
				title: "Test Title 1",
				company: "Test Company 1"
			},
			{
				title: "Test Title 2",
				company: "Test Company 2"
			}
        ];
        
        return(
            <div>
                {experienceList.map((experience, i) => <WorkExperience experience={experience} />)}
            </div>
        );
    }
}
