import React, { Component, createRef } from "react";
import "../css/home_components/SecondSection.css";
import Menubar from "../menu/Menubar";
import ThirdSection from './ThirdSection.js'
import { Card, Icon, Image } from 'semantic-ui-react'

class SecondSection extends Component{
    contextRef = createRef();
    render(){
        return(
            <div id="whole-second-container" ref={this.contextRef}>
                <Menubar contextRef={this.contextRef}/>
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
