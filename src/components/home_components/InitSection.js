import React, { Component } from "react";
import SecondSection from './SecondSection.js'
import "../css/home_components/InitSection.css";
import { Button, Icon } from 'semantic-ui-react'

class InitSection extends Component {
	handleClick(){
		console.log("Charot");
	}
	render() {
		return (
			<div id="main-container">
				<div id="init-section">
					<div id="init-text" class="col-md-8">
						<h1>We'll take you where</h1>
						<h1>you need to go.</h1>
						<h2>Supply your shuttle needs</h2>
					</div>
					<Button id="init-button" size='huge' animated='vertical' onClick={(e) => this.handleClick()}>
			      <Button.Content hidden>Explore</Button.Content>
			      <Button.Content visible>
			        <Icon name='angle double down' />
			      </Button.Content>
			    </Button>

				</div>
				<SecondSection />
			</div>
		);
	}

}

export default InitSection;
