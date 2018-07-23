import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Navbar } from "./common";
import { AboutMe } from "./resume";
import { WorkExperienceList } from "./resume";

export default class App extends React.Component {
	render() {

		return (
			<div>
				<Navbar/>
				<Container>
					<Row>
						<Col>
							<AboutMe />
						</Col>
					</Row>
					<Row>
						<Col>
							<WorkExperienceList />
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
