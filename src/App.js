import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopMenu from './components/TopMenu';
import { routes } from './routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Top Menu */}
          <TopMenu />
          {/* Page Routes */}
          <Switch>
            { this.generateRoutes() }
          </Switch>
        </div>
      </Router>
    );
  }

  generateRoutes = () => {
    return routes.map((route, index) => {
      return <Route key={index} path={route.path} exact={route.exact} component={route.component} />
    });
  }
}

export default App;
