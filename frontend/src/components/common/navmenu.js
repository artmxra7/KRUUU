import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';


class Navmenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  state = {
    collapseID: ""
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  closeCollapse = collapseID => () =>
    this.state.collapseID === collapseID && this.setState({ collapseID: "" });



  render() {

    return (<header>
      <MDBContainer fluid>
        <MDBNavbar dark expand="md" className="navbar-color" scrolling transparent>
          <MDBNavbarBrand href="/">
            <strong className="title-nav">KRUUU</strong>
          </MDBNavbarBrand>
          {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
          <MDBCollapse isOpen={this.state.collapse} navbar>
            <MDBNavbarNav left className="mx-auto order-0">
              <MDBNavItem >
                <MDBNavLink to="/discover">DISCOVER</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem >
                <MDBNavLink to="/talent">TALENT</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/jobs">JOBS</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/services">SERVICES</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/marketplace">MARKETPLACE</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>

            <MDBNavbarNav right>
              <MDBNavItem >
                <MDBNavLink to="/signupoptions">SIGN UP</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem >
                <MDBNavLink to="/signin" className="button-nav sign-text">SIGN IN</MDBNavLink>
              </MDBNavItem>

            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>

      </MDBContainer>
    </header>)
  }
}

export default Navmenu;