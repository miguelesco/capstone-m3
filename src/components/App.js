/* eslint-disable linebreak-style */
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import GlobalStyles from '../styles/GlobalStyles';
import Home from './home/Home';
import Details from './details/Details';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/details/:symbol">
          <Details />
        </Route>
        <Route path="/details">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
