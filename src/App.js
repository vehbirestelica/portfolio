import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages";
import PDFViewer from "./components/PDFViewer/PDFViewer";

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ""}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/viewer" component={PDFViewer}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
