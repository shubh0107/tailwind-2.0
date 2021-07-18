import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Random from './pages/Random';
import Portfolio from './pages/Portfolio';
import Spotify from './pages/Spotify';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/spotify" />
        </Route>
        <Route path="/random">
          <Random />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/spotify">
          <Spotify />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
