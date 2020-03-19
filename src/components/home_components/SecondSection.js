import React, { Component } from "react";
import "../css/home_components/SecondSection.css";
import ThirdSection from './ThirdSection.js'
import { Card, Icon, Image } from 'semantic-ui-react'

class SecondSection extends Component{
    render(){
        return(
            <div>
                <div id="second-section">
                    <div id="life-section"></div>
                    <div id="hobbies-section"></div>
                </div>

                <ThirdSection />
            </div>
        )

    }
}

export default SecondSection;
