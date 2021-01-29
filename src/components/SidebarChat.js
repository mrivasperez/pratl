import { Avatar } from "@material-ui/core";
import React from "react";
import db from "../firebase";

import "./style/SidebarChat.css";

const SidebarChat = ({ id, name, addNewChat }) => {
  // get a random avatar from dicebear avatars api
  const avatarSeed = Math.floor(Math.random() * 1000000 + 1);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat:");

    if (roomName) {
      // create a new chat in firebase with the name of roomName
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar
        src={`https://avatars.dicebear.com/api/bottts/${avatarSeed}.svg`}
      />
      <div className="sidebarChat__info">
        <h2>{name}</h2>
        <p>Message preview</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>+ New</h2>
    </div>
  );
};

export default SidebarChat;