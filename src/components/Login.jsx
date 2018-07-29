import React from 'react';
import { withRouter } from 'react-router';
// import PropTypes from 'prop-types';
import firebase from 'firebase';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  // async,awaitを使ってログインとサインインの処理を一時停止してましゅ。これで関数呼び出しの手間はぶいてます。
  async handleSignUp(e) {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error);
    }
  }

  async handleLogin(e) {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error);
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <div>
          <label htmlFor="email">
            Email
            <input
              id="email"
              value={email}
              type="text"
              onChange={e => this.setState({
                email: e.target.value,
              })
            }
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            password
            <input
              id="password"
              value={password}
              type="password"
              onChange={e => this.setState({
                password: e.target.value,
              })
            }
            />
          </label>
        </div>
        <button type="button" onClick={this.handleSignUp}>Sign up</button>
        <button type="button" onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

// Login.propTypes = {
//   handleLogin: PropTypes.String,
// };

export default withRouter(Login);
