import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './Home';
import { Questions } from './Questions';
import { Resource } from './Resource';


function App() {
  return (
    <React.Fragment>
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/questions" component={Questions} />
        <Route path="/resource" component={Resource} />
      </Switch>
    </Router>
  </React.Fragment>
  );
}


  

export default App;
