import "./App.css";
import { Switch, Route } from "react-router-dom";
import ListUsers from "./components/ListUsers";
import Home from "./components/Home";
import User from "./components/user";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/" component={ListUsers} />
        <Route path="/User/:id" render={(props) => <User {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
