import React, { Component } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBInput, MDBBtn, MDBInputGroup } from "mdbreact";

class SignUpOptions extends Component {

  render() {
    return (
      <MDBContainer fluid>
        <h1 className="text-center">Hey! May I know about you?</h1>
        <MDBRow className="no-gutters">
          
          <MDBCol size="4" className="pt-100-signin tabel-c">
            <MDBContainer fluid>
              <h1 className="text-center title-c"> I’m a Talent </h1>
              <p className="text-center desc-c"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur nibh nec diam suscipit finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus</p>
              <div className="text-center mt-4">
              <Link to='/signup'>
                        <button className="btn get-trial-style">SIGN UP</button>
                        </Link>
                      </div>

            </MDBContainer>

            
          </MDBCol>
          <MDBCol size="4" className="pt-100-signin tabel-c">
            <MDBContainer fluid>
              <h1 className="text-center title-c"> I’m a Company </h1>
              <p className="text-center desc-c"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur nibh nec diam suscipit finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus</p>
              <div className="text-center mt-4">
                        <button type="submit" className="btn get-trial-style">SIGN UP</button>
                      </div>

            </MDBContainer>

            
          </MDBCol>
          <MDBCol size="4" className="pt-100-signin tabel-c">
            <MDBContainer fluid>
              <h1 className="text-center title-c"> I’m a Service </h1>
              <p className="text-center desc-c"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur nibh nec diam suscipit finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus</p>

              <div className="text-center mt-4">
                        <button type="submit" className="btn get-trial-style">SIGN UP</button>
                      </div>

            </MDBContainer>

            
          </MDBCol>
        </MDBRow>

      </MDBContainer>


    );

  }
}


export default SignUpOptions;
