import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(null);
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
