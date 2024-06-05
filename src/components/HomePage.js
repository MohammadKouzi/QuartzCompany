import React from 'react';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faGripHorizontal, faUserCheck } from '@fortawesome/free-solid-svg-icons';

import Image1 from '../Images/1.jpg';
import Image2 from '../Images/2.jpg';
import Image3 from '../Images/3.jpg';

const HomePage = () => {
  return (
    <div className="body">
      <div className='SiteContainer'>
        {/* Section 1 with auto-slider */}
        <Container fluid>
          <Row>
            <Col>
              <Carousel className='custom-carousel'>
                {/* Carousel Item 1 */}
                <Carousel.Item>
                  <div className="bgoverlay">
                    <img
                      className="d-block w-100"
                      src={Image1}
                      alt="First slide"
                    />
                  </div>
                  <Carousel.Caption>
                    <div className='section1'>
                      <h2>Section 1 Title</h2>
                      <p>Paragraph for Section 1 Paragraph for Section 1 Paragraph for Section 1 Paragraph for Section 1</p>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>

                {/* Carousel Item 2 */}
                <Carousel.Item>
                  <div className="bgoverlay">
                    <img
                      className="d-block w-100"
                      src={Image2}
                      alt="Second slide"
                    />
                  </div>
                  <Carousel.Caption>
                    <div className='section1'>
                      <h2>Section 1 Title</h2>
                      <p>Paragraph for Section 1 Paragraph for Section 1 Paragraph for Section 1 Paragraph for Section 1</p>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>

                {/* Carousel Item 3 */}
                <Carousel.Item>
                  <div className="bgoverlay">
                    <img
                      className="d-block w-100"
                      src={Image3}
                      alt="Third slide"
                    />
                  </div>
                  <Carousel.Caption>
                    <div className='section1'>
                      <h2>Section 1 Title</h2>
                      <p>Paragraph for Section 1 Paragraph for Section 1 Paragraph for Section 1 Paragraph for Section 1</p>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>

        {/* Section 2 */}
        <Container className='section2 text-center'>
          <br />
          <h1>Why Us</h1>
          <br />
          <Row>
            <Col xs={12} sm={6} md={4}>
              <Card className="custom-card">
                <Card.Body>
                  <FontAwesomeIcon icon={faTools} size="3x" />
                  <Card.Title>Quality Materials</Card.Title>
                  <Card.Text>
                    We specialize in providing high-quality materials such as quartz, glass, and more for kitchen and room installations.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card className="custom-card">
                <Card.Body>
                  <FontAwesomeIcon icon={faGripHorizontal} size="3x" />
                  <Card.Title>Expert Installation</Card.Title>
                  <Card.Text>
                    Our team consists of experienced professionals who ensure expert installation of materials for your kitchen and rooms.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card className="custom-card">
                <Card.Body>
                  <FontAwesomeIcon icon={faUserCheck} size="3x" />
                  <Card.Title>Customer Satisfaction</Card.Title>
                  <Card.Text>
                    Customer satisfaction is our top priority. We strive to meet and exceed our clients' expectations with our services.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* Section 3: Our Work */}
        <Container className='section2 text-center'>
          <h1>Our Work</h1>
          <br />
          <div className='grid-container'>
            <Row>
              <Col xs={12} sm={6} md={4}>
                <img src={Image1} alt="Work example 1" className='photo' />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <img src={Image2} alt="Work example 2" className='photo' />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <img src={Image3} alt="Work example 3" className='photo' />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default HomePage;
