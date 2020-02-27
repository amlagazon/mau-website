import React, { Component } from "react";
import "../css/home_components/InitSection.css";
import { Col, Row, Jumbotron } from 'react-bootstrap';
import { Button, Icon } from 'semantic-ui-react'

class InitSection extends Component {
	render() {
		return (
			<div id="init-section">
				<div id="init-text" class="col-md-6">
					<h1>Hello.</h1>
					<h2>I'm Mau. Explore.</h2>	
				</div>
				<Button id="init-button" size='huge' animated='vertical'>
		      <Button.Content hidden>Explore</Button.Content>
		      <Button.Content visible>
		        <Icon name='angle double down' />
		      </Button.Content>
		    </Button>
			</div>
		);
	}

}

export default InitSection;