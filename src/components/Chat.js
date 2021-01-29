import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import "./style/Chat.css";
import {
  AttachFileTwoTone,
  MoreVertTwoTone,
  SearchTwoTone,
} from "@material-ui/icons";

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last Seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchTwoTone />
          </IconButton>
          <IconButton>
            <AttachFileTwoTone />
          </IconButton>
          <IconButton>
            <MoreVertTwoTone />
          </IconButton>
        </div>
      </div>
      <div className="chat__body"></div>
      <div className="chat__footer"></div>
    </div>
  );
}

export default Chat;
