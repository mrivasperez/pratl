import React, { useEffect, useState } from "react";
import { IconButton } from "@material-ui/core";

import SidebarChat from "./SidebarChat";

import "./styles/Sidebar.css";
import { AddRounded } from "@material-ui/icons";

import db from "../firebase";
import { useStateValue } from "../context/StateProvider";

const Sidebar = () => {
  const [rooms, setRooms] = useState([]);
  const [{ user }] = useStateValue();
  useEffect(() => {
    // get current rooms from db, and update when changed
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        // create object in rooms array within state
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return () => unsubscribe();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat:");

    if (roomName) {
      // create a new chat in firebase with the name of roomName
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };
  console.log(user);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h1>Pratl</h1>

        <div className="sidebar__headerRight">
          <IconButton onClick={createChat}>
            <AddRounded />
          </IconButton>
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
