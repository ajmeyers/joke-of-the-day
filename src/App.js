import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './About';
import Joke from './Joke';

function App() {
  return (
      <Router>
        <div className="App">
          <p>~Joke of the Day~</p>
          <nav>
            <ul>
              <li>
                <Link to="/">Joke</Link>
              </li>
              <li>
              <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Joke />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
