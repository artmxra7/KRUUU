import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom';
import { Breakpoint, BreakpointProvider } from 'react-socks';

import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBInput, MDBBtn, MDBInputGroup } from "mdbreact";

const TITLE = 'KRUUU | SIGN UP'


const TitleTop = styled.h1`

font-family: Archivo;
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 44px;
/* identical to box height */

letter-spacing: 0.05em;

color: #FFFFFF;
text-align: center!important;
padding-top: 3rem;
padding-bottom: 3rem;
`;



class SignUpOptions extends Component {

  render() {
    return (
      <BreakpointProvider>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        {/* FOR DESKTOP ONLY */}

        <MDBContainer fluid>

          <TitleTop className="text-center">
            Hey! May I know about you?
        </TitleTop>
          <Breakpoint medium up>
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
          </Breakpoint>

        </MDBContainer>

      </BreakpointProvider>


    );

  }
}


export default SignUpOptions;
