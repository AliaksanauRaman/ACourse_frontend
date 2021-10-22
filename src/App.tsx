import { Router, Link, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';

import { HomeIndexPage } from './modules/home/pages/index';
import { CoursesIndexPage } from './modules/courses/pages/index';

const customHistory = createBrowserHistory();

function App() {
  return (
    <Router history={customHistory}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/courses">Courses</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Switch>
          <Route exact path="/">
            <HomeIndexPage />
          </Route>

          <Route path="/courses">
            <CoursesIndexPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
