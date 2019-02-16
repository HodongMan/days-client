import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ProjectCheckListContainer, ProjectListContainer } from './containers';

import './App.css';


class App extends React.Component {
    public render() {
        return (
            <Router>
              <div>
                  <Switch>
                      <Route exact={true} path="/" component={ProjectListContainer} />
                      <Route path="/check" component={ProjectCheckListContainer} />
                  </Switch>
              </div>
            </Router>
        );
    }
}

export default App;
