import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
// import firebase from 'firebase';
import { firebaseApp } from '../firebase/config.jsx';
import Login from './Login';
import Home from './Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, authenticated: false };
  }

  componentWillMount() {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          // currentUser: user,
          loading: false,
        });
      } else {
        this.setState({
          authenticated: false,
          // currentUser: null,
          loading: false,
        });
      }
    });
  }

  // URLに/とアドスを追加してまーす；
  render() {
    const { authenticated, loading } = this.state;
    if (loading) return <p>loading..</p>;
    return (
      <BrowserRouter>
        <div>
          <Route
            exact
            path="/"
            render={() => (authenticated === true ? (
              <Home />
            ) : (
              <Redirect to="/login" />
            ))
            }
          />
          <Route
            exact
            path="/login"
            render={() => (authenticated === false ? (
              <Login />
            ) : (
              <Redirect to="/" />
            ))
            }
          />
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
