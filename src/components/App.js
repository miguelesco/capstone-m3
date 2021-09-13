/* eslint-disable linebreak-style */
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import GlobalStyles from '../styles/GlobalStyles';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route path="/" exact>
          <h1>hello</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
