import Game from "./Components/Game";
import About from "./Components/About";
import People from "./Components/People";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Game></Game>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/people">
          <People></People>
        </Route>
        <Route path="*">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
