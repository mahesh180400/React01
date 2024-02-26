import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <h2 className="text-center">Get Our Albums</h2>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>
                  <strong>JUL16</strong>
                </Col>
                <Col>
                  <p>DETROIT, MI</p>
                </Col>
                <Col>
                  <p>DTE ENERGY MUSIC THEATRE</p>
                </Col>
                <Col>
                  <Button variant="outline-info">Buy Ticket</Button>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  <strong>JUL19</strong>
                </Col>
                <Col>
                  <p>TORONTO, ON</p>
                </Col>
                <Col>
                  <p>BUDWEISER STAGE</p>
                </Col>
                <Col>
                  <Button variant="outline-info">Buy Ticket</Button>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  <strong>JUL22</strong>
                </Col>
                <Col>
                  <p>JIGGY LUBE LIVE</p>
                </Col>
                <Col>
                  <p>DTE ENERGY MUSIC THEATRE</p>
                </Col>
                <Col>
                  <Button variant="outline-info">Buy Ticket</Button>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  <strong>JUL29</strong>
                </Col>
                <Col>
                  <p>T-MOBILE ARENA</p>
                </Col>
                <Col>
                  <p>DTE ENERGY MUSIC THEATRE</p>
                </Col>
                <Col>
                  <Button variant="outline-info">Buy Ticket</Button>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  <strong>AUG 2</strong>
                </Col>
                <Col>
                  <p>LAS VEGAS, NV</p>
                </Col>
                <Col>
                  <p>DTE ENERGY MUSIC THEATRE</p>
                </Col>
                <Col>
                  <Button variant="outline-info">Buy Ticket</Button>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
