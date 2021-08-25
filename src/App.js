import Game from "./Components/Game";
import About from "./Components/About";
import Header from "./Components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <main>
              <Header></Header>
              <Game></Game>
              <About></About>
            </main>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="*">
            <Redirect to="/"></Redirect>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
