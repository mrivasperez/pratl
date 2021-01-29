import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";

import SidebarChat from "./SidebarChat";

import "./style/Sidebar.css";
import {
  DonutLargeTwoTone,
  ChatTwoTone,
  MoreVertTwoTone,
  SearchOutlined,
} from "@material-ui/icons";

import db from "../firebase";

const Sidebar = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // get current rooms from db, and update when changed
    db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        // create object in rooms array within state
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    console.log(rooms);
  }, []);

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
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
