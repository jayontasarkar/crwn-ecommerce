import React, { Component } from 'react';
import './sign-in.scss';
import FormInput from '../form-input/form-input';
import Button from '../custom-button/custom-button';
import { auth, signInWithGoogle } from '../../firebase/utils';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: '',
      });
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            required
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email Address"
          />
          <FormInput
            name="password"
            type="password"
            required
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
          />

          <div className="buttons">
            <Button type="submit">Sign In</Button>
            <Button
              type="button"
              onClick={signInWithGoogle}
              classes="google-sign-in"
            >
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
