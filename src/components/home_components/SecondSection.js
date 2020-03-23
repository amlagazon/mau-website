import React, { Component, createRef } from "react";
import "../css/home_components/SecondSection.css";
import Menubar from "../menu/Menubar";
import ThirdSection from './ThirdSection.js'
import HobbiesSection from './HobbiesSection.js'
import LifeSection from './LifeSection.js'
import { Card, Icon, Image } from 'semantic-ui-react'

class SecondSection extends Component{
    contextRef = createRef();
    render(){
        return(
            <div id="whole-second-container" ref={this.contextRef}>
                <Menubar contextRef={this.contextRef}/>
                <div id="second-section">
                    <div id="life-section">
                        <h4>know more</h4>
                        <h4 class="bottom">about me!</h4>
                    </div>
                    <div id="hobbies-section">
                        <h4>check out</h4>
                        <h4>what I do</h4>
                    </div>
                </div>
                <LifeSection />
                <HobbiesSection />

                <ThirdSection />
            </div>
        )

    }
}

export default SecondSection;
