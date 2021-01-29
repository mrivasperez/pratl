import React from "react";
import { Avatar, IconButton } from "@material-ui/core";

import SidebarChat from "./SidebarChat";

import "./style/Sidebar.css";
import {
  DonutLargeTwoTone,
  ChatTwoTone,
  MoreVertTwoTone,
  SearchOutlined,
} from "@material-ui/icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />

        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeTwoTone />
          </IconButton>
          <IconButton>
            <ChatTwoTone />
          </IconButton>
          <IconButton>
            <MoreVertTwoTone />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__search__container">
          <SearchOutlined />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;
