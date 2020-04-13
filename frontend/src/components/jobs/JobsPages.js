import React, { Component } from 'react';
import styled from 'styled-components';

import { Breakpoint, BreakpointProvider } from 'react-socks';
import { Nav, Navbar, Button, Col, Row, Container, Form, Dropdown, DropdownButton, InputGroup, FormControl } from 'react-bootstrap';
import Select from 'react-select';
import { MDBBtn, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer } from 'mdbreact';

import Slider from "react-slick";


const NewSection = styled.section`
padding-top: 100px;
padding-bottom: 100px;
`;
const ColorLines = styled.div`
border: 1px solid #000540;
box-sizing: border-box;
border-radius: 4px;
height:22px;
`;

const options = [
  { value: 'recent', label: 'RECENTLY UPDATES' },
  { value: 'lastestlisting', label: 'LATEST LISTINGS' },
  { value: 'bestmatch', label: 'BEST MATCH' },
];
const age = [
  { value: '18', label: '18 Years Old' },
  { value: '25', label: 'AGE 2' },
  { value: '29', label: 'AGE 3' },
];
const paid = [
  { value: 'any', label: 'ANY' },
  { value: 'val1', label: 'PAID' },
  { value: 'val2', label: 'UNPAID' },
];
const gender = [
  { value: 'any', label: 'ANY' },
  { value: 'male', label: 'MALE' },
  { value: 'female', label: 'FEMALE' },
];
const categoriesJob = [
  { value: 'any', label: 'ALL CATEGORIES' },
];
const location = [
  { value: 'any', label: 'ALL COUNTRIES' },
  { value: 'INA', label: 'INDONESIA' },
  { value: 'US', label: 'US' },
];


const customStyles = {

  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
    color: "black"
  }),


  control: (base, state) => ({
    ...base,
    background: "0",
    color: "#fff",
    // Overwrittes the different states of border
    borderColor: state.isFocused ? "yellow" : "white",
    // Removes weird border around container
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "white" : "white"
    }
  }),


  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    const color = 'white';

    return { ...provided, opacity, transition, color };
  }
};


const TextPills = styled.p`
font-family: Archivo;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 15px;
letter-spacing: 0.05em;
text-align: center;
margin-top: 4px;

color: #000540;
`;


class JobsPages extends Component {

  state = {
    selectedOption: options[1],
  };

  stateAge = {
    selectedOption: age[1],
  };

  statePaid = {
    selectedOption: paid[1],
  };
  stateGender = {
    selectedOption: gender[1],
  };

  stateLocation = {
    selectedOption: location[1],
  };
  stateCategories = {
    selectedOption: categoriesJob[1],
  };



  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  handleChangePaid = selectedDataPaid => {
    this.setState({ selectedDataPaid });
    console.log(`Option selected:`, selectedDataPaid);
  };

  handleChangeAge = selectedDataAge => {
    this.setState({ selectedDataAge });
    console.log(`Option selected:`, selectedDataAge);
  };

  handleChangeGender = selectedDataGender => {
    this.setState({ selectedDataGender });
    console.log(`Option selected:`, selectedDataGender);
  };
  handleChangeGender = selectedDataLocation => {
    this.setState({ selectedDataLocation });
    console.log(`Option selected:`, selectedDataLocation);
  };

  handleChangeGender = selectedDataCategories => {
    this.setState({ selectedDataCategories });
    console.log(`Option selected:`, selectedDataCategories);
  };




  render() {


    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };


    const { selectedOption } = this.state;
    const { selectedDataPaid } = this.statePaid;
    const { selectedDataAge } = this.statePaid;
    const { selectedDataGender } = this.stateGender;
    const { selectedDataLocation } = this.stateLocation;
    const { selectedDataCategories } = this.stateCategories;
    return (



      <BreakpointProvider>
        <Breakpoint medium up>

          <Navbar expand="md" className="navbar-sub-color">

            <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto order-0">
                <Nav.Link href="/discover" className="inactive-sub" activeClassName="active" >SEARCH JOB</Nav.Link>
                <Nav.Link href="/talent" className="inactive-sub" activeClassName="active" >POST A JOB</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">DISCOVER</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">TALENT</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">JOBS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">JOBS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">JOBS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
              </Nav>





            </Navbar.Collapse>
          </Navbar>


          <Container fluid className="u-paddingTop40 u-foreground">
            <Row>
              <Col className="heading search-box">
                <InputGroup className="mb-3">
                  <FormControl size="lg" type="text" className="textInput--jumbo textInput--underlined" placeholder=" What are you looking for?" />
                  <InputGroup.Append>
                    <Button >Search</Button>
                  </InputGroup.Append>
                  <br />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col xs lg="3" sm>
                <Select
                  defaultValue={categoriesJob[0]}
                  value={selectedDataCategories}
                  onChange={this.handleChangeCategories}
                  options={categoriesJob}
                  styles={customStyles}

                />
              </Col>
              <Col xs lg="2" sm>
                <Select
                  defaultValue={location[0]}
                  value={selectedDataLocation}
                  onChange={this.handleChangeLocation}
                  options={location}
                  styles={customStyles}

                />
              </Col>
              <Col xs lg="1" sm>
                <Select
                  defaultValue={gender[0]}

                  value={selectedDataGender}
                  onChange={this.handleChangeGender}
                  options={gender}
                  styles={customStyles}

                />
              </Col>
              <Col xs lg="2" sm>
                <Select
                  defaultValue={age[0]}
                  value={selectedDataAge}
                  onChange={this.handleChangeAge}
                  options={age}

                  styles={customStyles}
                />

              </Col>
              <Col xs lg="1" sm>

                <Select
                  defaultValue={paid[1]}
                  value={selectedDataPaid}
                  onChange={this.handleChangePaid}
                  options={paid}

                  styles={customStyles}
                />
              </Col>

              <Col xs lg="2" sm>
                <Select
                  value={selectedOption}
                  onChange={this.handleChange}
                  options={options}
                  styles={customStyles}
                />
              </Col>
            </Row>
          </Container>


          <NewSection>
            <MDBContainer>

              <MDBRow>

                <div className="slick-div">
                  <Slider {...settings}>

                    <MDBCard className="big-size-card ">
                      <MDBRow>
                        <MDBCol md='5'>
                          <MDBCardImage className="big-card-img-top img-fluid " src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" />
                        </MDBCol>
                        <MDBCol md='7'>

                          <MDBCardBody>
                            <MDBContainer>
                              <MDBCardTitle className="big-video-title ">NETFLIX MANAGEMENT SEARCH FOR TALENTED ACTORS</MDBCardTitle>

                              <MDBRow>
                                <MDBCol md='2' className="no-gutter">
                                  <ColorLines> <TextPills> PAID </TextPills> </ColorLines>
                                </MDBCol>
                                <MDBCol md='4' className="no-gutter">
                                  <ColorLines> <TextPills> CLOSING SOON </TextPills> </ColorLines>
                                </MDBCol>
                              </MDBRow>


                              <p className="big-video-info">Leading Actor, Male, 33-40 Tahun, Jakarta</p>
                              <MDBCardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </MDBCardText>
                              <MDBRow>
                                <MDBCol md='5'>
                                  <button type="button" className="btn get-trial-style">APPLY NOW</button>
                                </MDBCol>
                                <MDBCol md='5' >
                                  <button type="button" className="bookmark-btn">SAVE THIS SEARCH </button>
                                </MDBCol>
                              </MDBRow>

                            </MDBContainer>
                          </MDBCardBody>
                        </MDBCol>
                      </MDBRow>
                    </MDBCard>




                  </Slider>
                </div>



              </MDBRow>
            </MDBContainer>



          </NewSection>
        </Breakpoint>
      </BreakpointProvider>




    )
  }
}

export default JobsPages;