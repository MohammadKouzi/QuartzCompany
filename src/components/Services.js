import React, { useState } from 'react';
import { Container, Tab, Tabs, Row, Col } from 'react-bootstrap';
import Image1 from '../Images/wktp.jpg';
import Image2 from '../Images/gs.jpg';
import Image3 from '../Images/snk.png';

const Services = () => {
  const [activeTab, setActiveTab] = useState('Workstop');

  return (
    <div className="services-container">
      <Container className="body">
        <br />
        <h1 className="text-center">Our Services</h1>
        <div className='section2'>
          <div className="centered-tab-container">
            <Tabs
              defaultActiveKey="Workstop"
              id="justify-tab-example"
              className="section2 mb-3"
              justify
              activeKey={activeTab}
              onSelect={(key) => setActiveTab(key)}
            >
              <Tab eventKey="Workstop" title="Workstop">
                <Row>
                  <Col md={6}>
                    <img src={Image1} alt="Workstop" className="service-image img-fluid p-0" />
                  </Col>
                  <Col md={6}>
                    <p className="Servicesp m-0">
                      We provide a bespoke stone worktop templating, fabrication, and installation service custom tailored to your individual requirements and budget. Our highly experienced and professional team have decades of experience in the stone industry. We work with a wide range of materials and superior manufacturers who are renowned for their innovation, reliability, and aesthetics. Whether you are looking for a worktop to compliment your brand new kitchen or would like to update the worktop on your existing kitchen, we can help you choose the best materials. We can also provide window sills, upstands, and fireplaces. You can be confident that we will work with you to choose the materials that will drive your imagination and improve your home.
                    </p>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="GLASS SPLASHBACKS" title="GLASS SPLASHBACKS">
                <Row>
                  <Col md={6}>
                    <img src={Image2} alt="Glass Splashbacks" className="service-image img-fluid p-0" />
                  </Col>
                  <Col md={6}>
                    <p className="Servicesp m-0">
                      Have you considered what will cover the area between the top of your worktop and the bottom of the wall cabinets? We recommend using a glass splashback. This special toughened glass is engineered to withstand extreme heat and is shatterproof. Glass splashbacks offer a clean and modern finish to your kitchen. They can be painted in any color of your choice and are easy to clean, making them a practical and stylish choice for your kitchen.
                    </p>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="SINKS" title="SINKS">
                <Row>
                  <Col md={6}>
                    <img src={Image3} alt="Sinks" className="service-image img-fluid p-0" />
                  </Col>
                  <Col md={6}>
                    <p className="Servicesp m-0">
                      We have trade discounts with well-known sink manufacturers from Europe. We can supply the sink together with your worktop for a discount, or you can purchase the sink separately. Explore the extensive range of different styles of sinks and contact us for pricing.
                    </p>
                  </Col>
                </Row>
              </Tab>
            </Tabs>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
