import React, { Component } from 'react';
import styled from 'styled-components';

import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBInput, MDBBtn } from "mdbreact";

class SignInPages extends Component {

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol size="6" className="pt-100-signin">

            <MDBCard>
              <MDBCardBody>
                <MDBContainer>
                  <h1 className="title-sign">Sign in to KRUUU</h1>
                  <p className="mini-title-sign">Don’t have an account? <b> Signup</b> </p>
                  <div className="strike">
                    <p className="divider-text-signin">Or</p>
                  </div>
                </MDBContainer>

                <MDBRow>
                  <MDBCol md="12">
                    <form>
                      <MDBInput
                        label="Your email"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Your password"
                        group
                        type="password"
                        validate
                        containerClass="mb-0"
                      />
                      <p className="font-small blue-text d-flex justify-content-end pb-3">
                        Forgot
                <a href="#!" className="blue-text ml-1">

                          Password?
                </a>
                      </p>
                      <div className="text-center mt-4">
                        <button type="submit" className="btn get-trial-style">SIGN IN</button>
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


export default SignInPages;
