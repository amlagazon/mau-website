import React, { Component } from "react";
import { Card } from 'react-bootstrap';
import "../css/home_components/SecondLeftPanel.css";
import apple from "./../../apple.jpg";

class SecondRightPanel extends Component{
    render(){
        return(
            <div id="second-panel">
	            <Card className="text-white">
				  <Card.Img src={apple}/>
				  <Card.ImgOverlay>
				  	<Card.Text>
				      This is a wider card with supporting text below as a natural lead-in to
				      additional content. This content is a little bit longer.
				    </Card.Text>
				  </Card.ImgOverlay>
				</Card>
            </div>
        )
    }
}

export default SecondRightPanel;
