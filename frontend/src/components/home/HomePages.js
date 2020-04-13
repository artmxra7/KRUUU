import React, { Component } from 'react';
import { Helmet } from 'react-helmet'
import { Breakpoint, BreakpointProvider } from 'react-socks';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "animate.css/animate.min.css";
import Slider from "react-slick";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup'

const bounceAnimation = keyframes`${fadeIn}`;

const TITLE = 'Home Page'

const HeroSubsText = styled.span`
height: 21.98px;
font-family: Archivo;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 22px;

letter-spacing: 0.05em;

color: #FFFFFF;
`;


const HeroTitleText = styled.h1`
width: 500px;

  font-family: Playfair Display;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 110%;

  
  letter-spacing: 0.03em;
  
  color: #FFC413;
`;

const NewSection = styled.section`
padding-top: 100px;
padding-bottom: 100px;
`;
const SpaceSection = styled.section`
padding-top: 50px;
`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;

function alertClicked() {
  alert('You clicked the third ListGroupItem');
}


class HomePages extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      crew: []
    };
  }

  componentDidMount() {
   
    fetch("https://randomuser.me/api/?results=10&nat=au")
    
      .then(res => res.json())
      .then(parsedJSON => parsedJSON.results.map(data => (
        {
          id: `${data.login.uuid}`,
          firstName: `${data.name.first}`,
          lastName: `${data.name.last}`,
          location: `${data.location.state}, ${data.nat}`,
          thumbnail: `${data.picture.large}`,

        }
      )))
      .then(items => this.setState({
        items,
        isLoaded: false
      }))
      .catch(error => console.log('parsing failed', error));


      fetch("https://randomuser.me/api/?results=10&")
    
      .then(res => res.json())
      .then(parsedJSON => parsedJSON.results.map(data => (
        {
          id: `${data.login.uuid}`,
          firstName: `${data.name.first}`,
          lastName: `${data.name.last}`,
          location: `${data.location.state}, ${data.nat}`,
          thumbnail: `${data.picture.large}`,

        }
      )))
      .then(crew => this.setState({
        crew,
        isLoaded: false
      }))
      .catch(error => console.log('parsing failed', error));
  }


  rendrerTalents() {
    const { items } = this.state;

    if ( items.length <= 0) {
      return <div>Loading...</div>
    }

    else if (!items ) {
      return <div>Data Kosong</div>
    }

    return items.length > 0 ? items.map(item => {
      const { id, firstName, lastName, thumbnail } = item;
      return (

        <Card className="bg-dark black-col text-white" id={id.toString()}>
          <Card.Img src={thumbnail} alt={firstName} className="img-style-kruuu" />
          <Card.ImgOverlay className=" h-100 d-flex flex-column justify-content-end">
            <Card.Title className="title-text text-center" >{firstName} {lastName}</Card.Title>
          </Card.ImgOverlay>
        </Card>


      );
    }) : null



  }

  renderCrew() {
    const { crew } = this.state;

    if ( crew.length <= 0) {
      return <div>Loading...</div>
    }

    else if (!crew ) {
      return <div>Data Kosong</div>
    }

    return crew.length > 0 ? crew.map(item => {
      const { id, firstName, lastName, thumbnail } = item;
      return (

        <Card className="bg-dark black-col text-white" id={id.toString()}>
          <Card.Img src={thumbnail} alt={firstName} className="img-style-kruuu" />
          <Card.ImgOverlay className=" h-100 d-flex flex-column justify-content-end">
            <Card.Title className="title-text text-center" >{firstName} {lastName}</Card.Title>
          </Card.ImgOverlay>
        </Card>


      );
    }) : null



  }

  renderStuff() {
    const { items } = this.state;

    if ( items.length <= 0) {
      return <div>Loading...</div>
    }

    else if (!items ) {
      return <div>Data Kosong</div>
    }

    return items.length > 0 ? items.map(item => {
      const { id, firstName, lastName, thumbnail } = item;
      return (

        <Card className="bg-dark black-col text-white" id={id.toString()}>
          <Card.Img src={thumbnail} alt={firstName} className="img-style-kruuu" />
          <Card.ImgOverlay className=" h-100 d-flex flex-column justify-content-end">
            <Card.Title className="title-text text-center" >{firstName} {lastName}</Card.Title>
          </Card.ImgOverlay>
        </Card>


      );
    }) : null



  }



  render() {


    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
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
    var videoSettings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
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


    return (

      <BreakpointProvider>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        {/* FOR DESKTOP ONLY */}
        <Breakpoint medium up>
          <div className="page-container layout-home" >
            <section className="section-hero scroll-reveal is-revealed">
              <Container fluid >
                <div className="horizontal-wrapper ">
                  <div className="body">
                    <h1 className="hero-text">WELCOME TO KRUUU</h1>
                    <HeroTitleText>LET YOUR STORY BEGIN !</HeroTitleText>
                    <HeroSubsText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</HeroSubsText>
                  </div>
                  <BouncyDiv>
                    <div className="blocks">
                      <div className="block">
                        <div className="outer">
                          <div className="inner">
                            <h1 className="block-title title with-bullet"> FIND YOUR TALENT</h1>
                            <p className="text-center black-text text">We do more than match your skills, we offer our support and guidance every step of the way..</p>
                            <button type="button" className="btn find-talent">FIND TALENT</button>
                          </div>
                        </div>
                      </div>

                      <div className="block">
                        <div className="outer">
                          <div className="inner">
                            <h1 className="block-title title with-bullet"> FIND YOUR JOB</h1>
                            <p className="text-center black-text text">Our job is making your job easier – and that means finding you the best digital, creative, and marketing talent.</p>
                            <Link to='/jobs'>
                              <button type="button" className="btn find-job">FIND JOB</button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </BouncyDiv>

                </div>
                {/* <div className="box-two">
                <h1 className="title-box-white"> FIND YOUR TALENT</h1>

              </div> */}

              </Container>


            </section>
          </div>


          <NewSection>
            <Container>
              <BouncyDiv>

                <h1 className="title-text text-center">WE ARE CONNECTED</h1>


                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat, magna eu laoreet varius, nibh sapien tincidunt urna, eu placerat ante quam sed leo. Phasellus lobortis mauris eu est porta, eget ullamcorper dui consequat. Praesent mollis ut eros et fringilla.
            </p>
              </BouncyDiv>
              <Container>
                <SpaceSection>


                  <p className="sub-title-home"> Talents </p>

                  <div className="slick-div">
                    <Slider {...settings}>


                      {this.rendrerTalents()}


                    </Slider>
                  </div>

                </SpaceSection>


                <SpaceSection>
                  <p className="sub-title-home">  FILM & STAGE CREWS </p>
                  <div className="slick-div">
                    <Slider {...settings}>


                    {this.renderCrew()}
                     



                    </Slider>
                  </div>
                </SpaceSection>

                <SpaceSection>
                  <p className="sub-title-home">  ACCOMMODATION & STUFF  </p>
                  <div className="slick-div">
                    <Slider {...settings}>



                      <Card className="bg-dark black-col text-white">
                        <Card.Img src={require('../../images/demo.png')} alt="Card image" />
                        <Card.ImgOverlay className=" h-100 d-flex flex-column justify-content-end">
                          <Card.Title className="title-text text-center" >Hannah Al Rashid</Card.Title>
                        </Card.ImgOverlay>
                      </Card>
                      <Card className="bg-dark black-col text-white">
                        <Card.Img src={require('../../images/demo.png')} alt="Card image" />
                        <Card.ImgOverlay className=" h-100 d-flex flex-column justify-content-end">
                          <Card.Title className="title-text text-center" >Hannah Al Rashid</Card.Title>
                        </Card.ImgOverlay>
                      </Card>
                      <Card className="bg-dark black-col text-white">
                        <Card.Img src={require('../../images/demo.png')} alt="Card image" />
                        <Card.ImgOverlay className=" h-100 d-flex flex-column justify-content-end">
                          <Card.Title className="title-text text-center" >Hannah Al Rashid</Card.Title>
                        </Card.ImgOverlay>
                      </Card>
                      <Card className="bg-dark black-col text-white">
                        <Card.Img src={require('../../images/demo.png')} alt="Card image" />
                        <Card.ImgOverlay className=" h-100 d-flex flex-column justify-content-end">
                          <Card.Title className="title-text text-center" >Hannah Al Rashid</Card.Title>
                        </Card.ImgOverlay>
                      </Card>



                    </Slider>
                  </div>
                </SpaceSection>
              </Container>
            </Container>
          </NewSection>
          <NewSection>
            <Container>
              <BouncyDiv>
                <h1 className="title-text text-center">NEW OPPORTUNITY!</h1>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat, magna eu laoreet varius, nibh sapien tincidunt urna, eu placerat ante quam sed leo. Phasellus lobortis mauris eu est porta, eget ullamcorper dui consequat. Praesent mollis ut eros et fringilla.
                </p>
              </BouncyDiv>

              <Container>
                <SpaceSection>
                  <p className="sub-title-home"> RECENTLY JOBS  </p>

                  <div className="slick-div">
                    <Slider {...videoSettings} className="width-vid">



                      <Card className="card-no-bg black-col">
                        <Card.Img variant="top" src={require('../../images/netflix.png')} />
                        <Card.Body className="no-padding-vid">
                          <Card.Title className="video-title" >CALLING INTERNATIONAL FILM MAKER 2020</Card.Title>
                          <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor sit amet consectetur...
                        </Card.Text>
                        </Card.Body >
                        <Card.Footer className="no-padding-vid">
                          <small className="text-muted">Leading Actor, Male, 33-40 Tahun, Jakarta</small>
                        </Card.Footer>
                      </Card>
                      <Card className="card-no-bg black-col">
                        <Card.Img variant="top" src={require('../../images/netflix.png')} />
                        <Card.Body className="no-padding-vid">
                          <Card.Title className="video-title" >CALLING INTERNATIONAL FILM MAKER 2020</Card.Title>
                          <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor sit amet consectetur...
                        </Card.Text>
                        </Card.Body >
                        <Card.Footer className="no-padding-vid">
                          <small className="text-muted">Leading Actor, Male, 33-40 Tahun, Jakarta</small>
                        </Card.Footer>
                      </Card>
                      <Card className="card-no-bg black-col">
                        <Card.Img variant="top" src={require('../../images/netflix.png')} />
                        <Card.Body className="no-padding-vid">
                          <Card.Title className="video-title" >CALLING INTERNATIONAL FILM MAKER 2020</Card.Title>
                          <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor sit amet consectetur...
                        </Card.Text>
                        </Card.Body >
                        <Card.Footer className="no-padding-vid">
                          <small className="text-muted">Leading Actor, Male, 33-40 Tahun, Jakarta</small>
                        </Card.Footer>
                      </Card>
                      <Card className="card-no-bg black-col">
                        <Card.Img variant="top" src={require('../../images/netflix.png')} />
                        <Card.Body className="no-padding-vid">
                          <Card.Title className="video-title" >CALLING INTERNATIONAL FILM MAKER 2020</Card.Title>
                          <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor sit amet consectetur...
                        </Card.Text>
                        </Card.Body >
                        <Card.Footer className="no-padding-vid">
                          <small className="text-muted">Leading Actor, Male, 33-40 Tahun, Jakarta</small>
                        </Card.Footer>
                      </Card>
                      <Card className="card-no-bg black-col">
                        <Card.Img variant="top" src={require('../../images/netflix.png')} />
                        <Card.Body className="no-padding-vid">
                          <Card.Title className="video-title" >CALLING INTERNATIONAL FILM MAKER 2020</Card.Title>
                          <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor sit amet consectetur...
                        </Card.Text>
                        </Card.Body >
                        <Card.Footer className="no-padding-vid">
                          <small className="text-muted">Leading Actor, Male, 33-40 Tahun, Jakarta</small>
                        </Card.Footer>
                      </Card>


                    </Slider>
                  </div>

                </SpaceSection>
              </Container>
            </Container>
          </NewSection>

          <NewSection>
            <Container fluid="md">
              <BouncyDiv>
                <Row>
                  <Col className="no-margin-st">

                    <Image src={require('../../images/netflix.png')} fluid />

                  </Col>
                  <Col>

                    <h1 className="title-text">WHAT’S OUR VISION?</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat, magna eu laoreet varius, nibh sapien tincidunt urna, eu placerat ante quam sed leo. Phasellus lobortis mauris eu est porta, eget ullamcorper dui consequat. Praesent mollis ut eros et fringilla. Vivamus sed lectus id elit auctor aliquam. Nam sagittis ipsum ac eros porta, eget venenatis ante auctor. Quisque et velit quis urna efficitur congue. Aliquam varius nunc placerat augue finibus tempor.
                    </p>

                  </Col>
                </Row>

              </BouncyDiv>



            </Container>
          </NewSection>

          <NewSection>
            <Container fluid="md">

              <Row>
                <Col className="text-center">
                  <BouncyDiv>
                    <h1 className="title-text text-center">SO, WHAT’S NEXT?</h1>
                    <p className="text-center">
                      GET YOUR FREE TRIAL FOR 3 MONTHS! MORE ACCESS. MORE CONNECTIONS. MORE INTERACTION
                      </p>
                    <button type="button" className="btn get-trial-style">GET MY FREE TRIAL</button>
                  </BouncyDiv>
                </Col>
              </Row>
            </Container>
          </NewSection>







        </Breakpoint>

        <Breakpoint small down>
          <h1> this Mobile Screen </h1>



        </Breakpoint>
      </BreakpointProvider>


    )
  }
}

export default HomePages;