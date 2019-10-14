import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import Login from './screens/login';
import Dashboard from './screens/dashboard';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import styles from './App.css'

const store = configureStore();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.App}>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

// const PublicRoute = ({ ...props }) => {
//   const token = localStorage.getItem('access-token')  
//   return token !== ''
//     ? (<Redirect to="/dashboard" />)
//     : (<Route {...props} />)
// };

// const ProtectedRoute =  ({ ...props }) => {
//   const token = localStorage.getItem('access-token')
//   return token !== ''
//     ? (<Route {...props} />)
//     : (<Redirect to="/" />)
// };

export default hot(App);
