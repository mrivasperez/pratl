import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import { useStateValue } from "./context/StateProvider";

function App() {
  // pull in user from data layer
  const [{ user }, dispatch] = useStateValue();
  console.log(user);
  return (
    // BEM naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomID">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
