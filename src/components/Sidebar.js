import React from "react";
import { Avatar } from "@material-ui/core";

import "./style/Sidebar.css";
import {
  DonutLargeTwoTone,
  ChatTwoTone,
  MoreVertTwoTone,
} from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />

        <div className="sidebar__headerRight">
          <DonutLargeTwoTone />
          <ChatTwoTone />
          <MoreVertTwoTone />
        </div>
      </div>

      <div className="sidebar__search"></div>

      <div className="sidebar__chats"></div>
    </div>
  );
}

export default Sidebar;
