import React, { Component } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import { Container, Row, Col, InputGroup, Button, FormControl } from 'react-bootstrap';

class TalentPages extends Component {
  render() {
    return (
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
      </Container>
    )
  }
}

export default TalentPages;