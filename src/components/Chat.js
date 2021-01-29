import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import "./style/Chat.css";
import {
  AttachFileTwoTone,
  InsertEmoticonTwoTone,
  Mic,
  MoreVertTwoTone,
  SearchTwoTone,
} from "@material-ui/icons";

function Chat() {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("You typed: ", input);
    setInput("");
  };

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

      <div className="chat__body">
        <p className={`chat__message ${true && "chat__receiver"}`}>
          <span className="chat__name">Miguel</span>
          Hey!
          <span className="chat__timestamp">12:30pm</span>
        </p>
        <p className="chat__message chat__receiver">
          <span className="chat__name">Miguel</span>
          Hey!
          <span className="chat__timestamp">12:30pm</span>
        </p>
      </div>

      <div className="chat__footer">
        <InsertEmoticonTwoTone />

        <form>
          <input
            type="text"
            placeholder="Type a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" onClick={sendMessage}>
            Send
          </button>
        </form>

        <Mic />
      </div>
    </div>
  );
}

export default Chat;
