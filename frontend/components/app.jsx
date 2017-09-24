import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import NavBarContainer from './nav_bar/nav_bar_container';
import ProjectContainer from './projects/project_index_container';
import ProjectShowContainer from './/projects/project_show_container';


const App = () =>(
  <div>
      <NavBarContainer />

      <Switch>

        <Route path="/projects/:projectId" component={ProjectShowContainer} />
        <Route exact path="/" component={ProjectContainer} />
      </Switch>
  </div>
);

export default App;



//
// <NavBarContainer />
// <Splash />
// <ProjectContainer />
