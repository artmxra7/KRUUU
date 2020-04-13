import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBInput, MDBBtn, MDBInputGroup } from "mdbreact";

// import {onChange} from '../Helpers/Utilities';

class SignUpPages extends Component {


  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: '',
      errors: {},
      isLoading: false,
      invalid: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e){
    e.preventDefault();
    console.log(this.state);
  }

  // onRegister = (e) => {
  //   console.log("Hallo");
  //   e.preventDefault();
  //   if (!this.state.isLoading) {
  //     this.setState({
  //       isLoading: true,
  //       errors: {}
  //     });

  //     axios.post('/api/register', {
  //       name: this.state.name,
  //       email: this.state.email,
  //       password: this.state.password,
  //       password_confirmation: this.state.password_confirmation
  //     }).then(res => {
  //       this.setState({ registrationSuccess: true });
  //     }).catch(res => {
  //       this.setState({
  //         errors: res.response.data.errors
  //       })
  //     }).finally(() =>
  //       this.setState({
  //         isLoading: false
  //       })
  //     );
  //   }
  // };



  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol size="6" className="pt-100-signin">

            <MDBCard>
              <MDBCardBody>
                <MDBContainer>
                  <h1 className="title-sign">Sign Up to KRUUU</h1>
                  <p className="mini-title-sign">Already have an account?? <b> Signup</b> </p>
                  <div className="strike">
                    <p className="divider-text-signin">Or</p>
                  </div>
                </MDBContainer>

                <MDBRow>
                  <MDBCol md="12">
                    <form onSubmit={this.onSubmit}>
                      <MDBInput
                        label="Your email"
                        group
                        onChange={this.onChange}
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBRow>
                        <MDBCol md="6">

                          <MDBInput
                            label="Password"
                            group
                            type="password"
                            validate
                            containerClass="mb-0"
                          />
                        </MDBCol>
                        <MDBCol md="6">

                          <MDBInput
                            label="Confirm Password"
                            group
                            type="password"
                            validate
                            containerClass="mb-0"
                          />
                        </MDBCol>
                      </MDBRow>

                      <MDBInput
                        value = {this.state.username}
                        onChange={this.onChange}
                        label="Fullname"
                        group
                        type="text"
                      />


                      <MDBInputGroup
                        material
                        hint="Phone Number"
                        containerClassName="mb-2 mt-0"
                        prepend="+62"
                        type="number"
                      />
                      <div>
                        {/* Material indeterminate */}
                        <MDBInput
                        label='I have read and accepted KRUUU’s and Terms of Use and  Privacy Policy'
                        type='checkbox'
                        id='checkbox23'
                        indeterminate />
                      </div>
                      <div className="text-center mt-4">
                        <button type="submit"  className="btn get-trial-style">SIGN UP</button>
                      </div>
                    </form>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol size="6">

            <img src={require('../../images/bgsig.png')} className="img-fluid" alt="" />
          </MDBCol>
        </MDBRow>

      </MDBContainer>


    );

  }
}


export default SignUpPages;
