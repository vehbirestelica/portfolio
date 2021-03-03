import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages";

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ""}>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
