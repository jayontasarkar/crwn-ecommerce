import React, { Component } from 'react';
import './sign-up.scss';
import FormInput from '../../components/form-input/form-input';
import Button from '../../components/custom-button/custom-button';
import { auth, createUserProfile } from '../../firebase/utils';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, displayName, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Password & confirm password doesn't match.");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfile(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="sign-up">
        <h2>I don't have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="test"
            required
            value={this.state.displayName}
            handleChange={this.handleChange}
            label="Display Name"
          />
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
          <FormInput
            name="confirmPassword"
            type="password"
            required
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
          />

          <div className="buttons">
            <Button type="submit">SIGN UP</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
