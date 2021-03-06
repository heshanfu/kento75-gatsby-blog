import React, { Component } from "react";
import TagList from "../TagList";
import SideAbout from "../SideAbout";
import "./Sidebar.scss";

class Sidebar extends Component {
  render() {
    const { postList } = this.props;
    return (
      <div className="sidebar-container">
        <SideAbout />
        <TagList postList={postList} />
      </div>
    )
  }
}

export default Sidebar;
