import { BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import TeamDetails from "./components/TeamDetails/TeamDetails";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/team/:idTeam">
            <TeamDetails />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
