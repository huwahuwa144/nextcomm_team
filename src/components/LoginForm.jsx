import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: '',
      password: '',
    };
  }

  onButtonClick() {
    if (this.state.email === '') {
      alert('email is empty');
    }
  }


  onTextChange(e) {
    if (e.target.name === 'email') {
      this.setState({
        email: e.target.value,
      });
    } else if (e.target.name === 'password') {
      this.setState({
        password: e.target.value,
      });
    }
  }

  // handleChange(e) {
  //   const data2 = this.state.data;
  //   switch (e.target.name) {
  //     case 'email':
  //       data2.email = e.target.value;
  //       break;
  //     case 'password':
  //       data2.password = e.target.value;
  //       break;
  //     default:
  //   }
  // }


  handleSubmit() {
    alert(this.state.email);
    alert(this.state.password);
    console.log(this.state.email);
    console.log(this.state.password);
  }

  render() {
    return (
      <div>
        <div className="Login">
          <div className="Login-header">
            <h2>LoginForm</h2>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input type="email" name="email" onChange={this.onTextChange} placeholder="email" /><br />
          <input type="password" name="password" onChange={this.onTextChange} placeholder="password" /><br />
          <button type="submit">ログイン</button>
          <button type="button" primary="true" className="" onClick={this.onButtonClick}>新規登録</button>
        </form>
      </div>
    );
  }
}
LoginForm.propTypes = {
  // onTextChange: PropTypes.func,
};

export default LoginForm;
