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
						<h1>Hello.</h1>
						<h2 class="rainbow rainbow-text-animated">I'm Mau. Explore.</h2>
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
