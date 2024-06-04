import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
 
 import Image4 from '../Images/4.jpg';
import Image5 from '../Images/5.jpg';

const AboutUs = () => {
  return (
    <div>
       <Container className='body'>
        <div className='section2'>
        <br/>

          <h1 className="text-center">About Us</h1>
          <br/>
          <Row className="mb-4">
            <Col xs={12} md={6}>
              <img
                className="d-block w-100"
                src={Image4}
                alt="Image4"
              /> 
            </Col>
            <Col xs={12} md={6}>
              <h2>Section 1 Title</h2>
              <p style={{ fontSize: '24px' }}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo.
              </p>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col xs={12} md={6}>
              <img 
                className="d-block w-100"
                src={Image5}
                alt="Image5"
              />
            </Col>
            <Col xs={12} md={6}>
              <h2>Section 2 Title</h2>
              <p style={{ fontSize: '24px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget libero
                interdum, vel consectetur est venenatis. Donec interdum justo at nisi fermentum varius.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
 
    </div>
  );
}

export default AboutUs;
