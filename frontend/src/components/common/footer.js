
import React, { Component } from 'react';
import {Container, Row, Col, ListGroup, Image} from 'react-bootstrap';


function alertClicked() {
  alert('You clicked the third ListGroupItem');
}



const Footer = function() {

  return  (
    <footer className='footer mt-auto py-3 text-white'>
      <Container fluid>

        <Row>
          <Col xs lg="2" sm>
            <h1 className="title-footer">KRUUU</h1>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur  adipiscing elit.
              Sed placerat, magna eu laoreet varius, nibh sapien
              tincidunt urna, eu placerat ante quam sed leo.
                      </p>
          </Col>
          <Col xs lg="2" sm>
            <ListGroup>
              <ListGroup.Item className="no-bg-footer" onClick={alertClicked}>ABOUT US</ListGroup.Item>
              <ListGroup.Item className="no-bg-footer" onClick={alertClicked}>CONTACT US</ListGroup.Item>
              <ListGroup.Item className="no-bg-footer" onClick={alertClicked}>PRICE LIST</ListGroup.Item>
              <ListGroup.Item className="no-bg-footer" onClick={alertClicked}>SIGN UP</ListGroup.Item>
              <ListGroup.Item className="no-bg-footer" onClick={alertClicked}>SIGN IN</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm>
            <h1 className="title-subs-footer">TALENT</h1>
            <ListGroup>
              <ListGroup.Item className="no-bg-footer" onClick={alertClicked}>FIND JOBS </ListGroup.Item>
              <ListGroup.Item className="no-bg-footer" onClick={alertClicked}>DISCOVERY</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm>
            <h1 className="title-subs-footer">PRODUCTION</h1>

            <ListGroup>
              <ListGroup.Item className="no-bg-footer" onClick={alertClicked}>FIND TALENT</ListGroup.Item>
              <ListGroup.Item className="no-bg-footer" onClick={alertClicked}>FIND STUFF</ListGroup.Item>
              <ListGroup.Item className="no-bg-footer" onClick={alertClicked}>FIND LOCATION</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm>
            <h1 className="title-subs-footer">COMPANY</h1>

            <ListGroup>
              <ListGroup.Item className="no-bg-footer" onClick={alertClicked}>HIRE A TALENT </ListGroup.Item>
              <ListGroup.Item className="no-bg-footer" onClick={alertClicked}>CREATE A JOB</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm>


            <ListGroup horizontal>
              <ListGroup.Item className="no-bg-footer" onClick={alertClicked}> <Image src={require('../../images/instagram.svg')} /></ListGroup.Item>
              <ListGroup.Item className="no-bg-footer" onClick={alertClicked}> <Image src={require('../../images/twitter.svg')} /></ListGroup.Item>
              <ListGroup.Item className="no-bg-footer" onClick={alertClicked}> <Image src={require('../../images/facebook.svg')} /></ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="2">
            </Col>
            <Col className="text-center" md="auto"  >
              <span className="powered-font"> © 2020 KRUUU, Inc. Powered by MonsterGroup </span>
            </Col>
            <Col>
              <ListGroup horizontal>
                <ListGroup.Item className="no-bg-footer powered-font" onClick={alertClicked}>Term of Use</ListGroup.Item>
                <ListGroup.Item className="no-bg-footer powered-font" onClick={alertClicked}>Privacy Policy</ListGroup.Item>
                <ListGroup.Item className="no-bg-footer powered-font" onClick={alertClicked}>Report a Problem</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>

      </Container>
    </footer>
  );
}

export default Footer;