import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';

import { NavigationBarComponent } from './modules/core/components/navigation-bar';
import { HomeIndexPage } from './modules/home/pages/index';
import { CoursesIndexPage } from './modules/courses/pages/index';
import { CoursePage } from './modules/courses/pages/course';
import { NotFoundPage } from './modules/core/pages/404';

const customHistory = createBrowserHistory();

function App() {
  return (
    <Router history={customHistory}>
      <div className="app">
        <div className="appNavigationBar">
          <NavigationBarComponent />
        </div>

        <div className="appWorkspace">
          <Switch>
            <Route exact path="/">
              <HomeIndexPage />
            </Route>

            <Route exact path="/courses">
              <CoursesIndexPage />
            </Route>

            <Route path="/courses/:courseId">
              <CoursePage />
            </Route>

            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
