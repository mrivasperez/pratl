import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Avatar, IconButton } from "@material-ui/core";
import "./style/Chat.css";
import {
  AttachFileTwoTone,
  InsertEmoticonTwoTone,
  Mic,
  MoreVertTwoTone,
  SearchTwoTone,
} from "@material-ui/icons";
import db from "../firebase";

const Chat = () => {
  const [input, setInput] = useState("");
  const [roomName, setRoomName] = useState("");
  const { roomID } = useParams();

  // get new messages whenever the roomID changes
  useEffect(() => {
    if (roomID) {
      db.collection("rooms")
        .doc(roomID)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
    }
  }, [roomID]);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("You typed: ", input);
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/bottts/${roomID}.svg`} />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
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
};

export default Chat;
