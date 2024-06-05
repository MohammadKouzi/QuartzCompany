import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Image1 from '../../Images/Q.jpg';

const Quartz = () => {
  const imageTexts = [
    "Text for image 1",
    "Text for image 2",
    "Text for image 3",
    "Text for image 4",
    "Text for image 5",
    "Text for image 6",
    "Text for image 7",
    "Text for image 8",
    "Text for image 9",
    "Text for image 10",
    "Text for image 11",
    "Text for image 12",
    "Text for image 13",
    "Text for image 14",
    "Text for image 15",
    "Text for image 16",
    "Text for image 17",
    "Text for image 18",
    "Text for image 19",
    "Text for image 20",
    "Text for image 21",
    "Text for image 22",
    "Text for image 23",
    "Text for image 24",
  ];

  return (
    <div>
      <br />
      <h1 className='text-center'>Quartz</h1>
      <Container fluid className="body px-4">
        <div className='photo-gallery'>
          <Row className="justify-content-center">
            {[...Array(24)].map((_, index) => (
              <Col key={index} xs={6} sm={4} md={3} lg={2}>
                <div className="gallery-item">
                  <div className="image-container">
                    <img src={Image1} alt={`Quartz sample ${index + 1}`} className="gallery-image" />
                    <div className="overlay"></div> {/* Overlay for hover effect */}
                  </div>
                  <div className="overlay-text">
                    <p>{imageTexts[index]}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Quartz;
