import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;
