import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Random from './pages/Random';
import Portfolio from './pages/Portfolio';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/random" />
        </Route>
        <Route path="/random">
          <Random />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
