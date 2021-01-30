import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    // BEM naming convention
    <div className="app">
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
    </div>
  );
}

export default App;
