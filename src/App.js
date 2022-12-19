import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Search from './pages/Search';
import notFound from './pages/notFound';



const App = ()  => {
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/search" component={Search}/>
      <Route component={notFound}/>
    </Switch>

  </Router>
}

export default App;

