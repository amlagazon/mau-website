import React, { Component, createRef } from "react";
import { Menu, Sticky } from "semantic-ui-react";
import "./Menubar.css"
class Menubar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "home"
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };
  render() {
    const { activeItem } = this.state;

    return (
      <div id="menubar-container">
        <Sticky context={this.props.contextRef}>
          <Menu pointing secondary size="huge" attached='top' >
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="messages"
              active={activeItem === "messages"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="friends"
              active={activeItem === "friends"}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Sticky>
      </div>
    );
  }
}

export default Menubar;
