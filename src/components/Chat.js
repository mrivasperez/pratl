import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Avatar, IconButton } from "@material-ui/core";
import "./styles/Chat.css";
import {
  AttachFileTwoTone,
  InsertEmoticonTwoTone,
  Mic,
  MoreVertTwoTone,
  SearchTwoTone,
} from "@material-ui/icons";
import db from "../firebase";
import { useStateValue } from "../context/StateProvider";
import firebase from "firebase";

const Chat = () => {
  const [input, setInput] = useState("");
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  const [{ user }] = useStateValue();
  const { roomID } = useParams();

  // get new messages whenever the roomID changes
  useEffect(() => {
    if (roomID) {
      db.collection("rooms")
        .doc(roomID)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
    }

    db.collection("rooms")
      .doc(roomID)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomID]);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("rooms").doc(roomID).collection("messages").add({
      message: input,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/bottts/${roomID}.svg`} />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>
            Last seen:{" "}
            {
              // get last message in room, dispaly the timestamp for that message.
              new Date(
                messages[messages.length - 1]?.timestamp?.toDate()
              ).toUTCString()
            }
          </p>
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
        {messages.map((message) => (
          <p
            className={`chat__message ${
              message.name === user.displayName && "chat__receiver"
            }`}
          >
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">
              {new Date(message.timestamp?.toDate()).toUTCString()}
            </span>
          </p>
        ))}
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
