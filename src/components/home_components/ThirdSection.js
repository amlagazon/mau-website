import React, { Component } from "react";
import "../css/home_components/ThirdSection.css";
import { Card, Icon, Image } from 'semantic-ui-react'

class ThirdSection extends Component{
    render(){
        return(
            <div id="footer-section">
            	<div id="footer-wrapper">
            		<h3>Contact us!</h3>
            		<hr/>
            		<h5>San Cristobal Calamba City, Laguna, 4027</h5>
            		<h5>loremipsum@gmail.com</h5>
            		<div id="footer-numbers">
            			<h5>12345678890</h5>
            			<h5>12345678890</h5>
            			<h5>12345678890</h5>
            		</div>
        		</div>
            </div>
        )

    }
}

export default ThirdSection;
