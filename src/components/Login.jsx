import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
// import PropTypes from 'prop-types';
import firebase from 'firebase';
import { firestore } from './configs/firebase/config.jsx';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', showPassword: false };
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
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

  handleClickShowPassword() {
    this.setState(state => ({ showPassword: !state.showPassword }));
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className="boxcontainer">
          <div className="col">
            <FormControl>
              <InputLabel htmlFor="email">
                Email
              </InputLabel>
              <Input
                id="email"
                value={email}
                type="text"
                onChange={e => this.setState({
                  email: e.target.value,
                })
              }
              />
            </FormControl>
          </div>
          <div className="col">
            <FormControl>
              <InputLabel htmlFor="password">
                password
              </InputLabel>
              <Input
                id="password"
                value={password}
                type={this.state.showPassword ? 'text' : 'password'}
                onChange={e => this.setState({
                  password: e.target.value,
                })
                }
                endAdornment={(
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.handleClickShowPassword}
                    >
                      {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )}
              />
            </FormControl>
          </div>
        </div>
        <div>
          <Button onClick={this.handleSignUp}>Sign up</Button>
          <Button onClick={this.handleLogin}>Login</Button>
        </div>
      </div>
    );
  }
}

// Login.propTypes = {
//   handleLogin: PropTypes.String,
// };

export default withRouter(Login);
