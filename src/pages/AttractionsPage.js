import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const beaches = [
  { name: "Tannirbhavi Beach", description: "A serene beach perfect for sunsets and picnics.", image: "https://media-cdn.tripadvisor.com/media/photo-s/1a/17/a5/72/tannirbhavi-beach.jpg" },
  { name: "Panambur Beach", description: "Known for watersports and vibrant beach events.", image: "https://th.bing.com/th/id/R.d08c6512c030caae6a6a0a20bb61a7f6?rik=u9pmd8L0Wru7vQ&riu=http%3a%2f%2fwww.coastaltourism.in%2fwp-content%2fuploads%2f2014%2f02%2fPanambur-Beach-Mangalore.jpg&ehk=tLKwiU8hmDSd6Xb%2bvZOuzJ6PL22xcF8aQgpl8X%2fVFKU%3d&risl=&pid=ImgRaw&r=0" },
  { name: "Someshwara Beach", description: "Rocky shores and scenic sunsets.", image: "https://www.holidify.com/images/cmsuploads/compressed/Someshwara-Beach_20200605162022.jpg" },
  { name: "Ullal Beach", description: "Quiet getaway near the city.", image: "https://beachesofindia.in/wp-content/uploads/2017/07/Untitled-design-38-1.jpg" },
  { name: "Surathkal Beach", description: "Great for long walks and photography.", image: "https://th.bing.com/th/id/R.75ae7295aa2f4de223e273bf61819998?rik=1PFm2sPErwbxDA&riu=http%3a%2f%2fwww.mangaloretaxi.com%2fwp-content%2fuploads%2fSurathkal-beach0.jpg&ehk=bXberOGQYGHkB%2finLg45%2bACVFbPjfaikuxkeAUuAyts%3d&risl=&pid=ImgRaw&r=0" },
  { name: "NITK Beach", description: "Student-favorite beach near NITK campus.", image: "https://th.bing.com/th/id/OIP.09QZT3gdp2xk1DW8oSg_7gHaFj?cb=iwp&rs=1&pid=ImgDetMain" },
  { name: "Kapu Beach", description: "Iconic lighthouse and pristine sand.", image: "https://th.bing.com/th/id/OIP.iEQaVPp6LRlzRzIrdasR8wHaFj?cb=iwp&rs=1&pid=ImgDetMain" },
  { name: "Sasihithlu Beach", description: "Ideal for surfing and water sports.", image: "https://rajseafront.com/wp-content/uploads/2024/03/sasihithlu-beach-in-mangalu.jpg" },
  { name: "Chitrapura Beach", description: "Peaceful spot away from crowds.", image: "https://img.paisawapas.com/ovz3vew9pw/2023/04/10172303/Rectangle-1Chitrapura-Beach-mangalore.png" },
  { name: "Hoige Bazaar Beach", description: "Lesser-known beach with local charm.", image: "https://en.bangladeshgurukul.com/wp-content/uploads/2024/05/Coxs-Bazar.jpg" }
];

const AttractionsPage = () => {
  return (
    <Container className="py-5">
      <h2 className="text-white mb-4">Beaches</h2>
      <Row>
        {beaches.map((beach, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card className="bg-dark text-white">
              <Card.Img src={beach.image} alt={beach.name} />
              <Card.ImgOverlay className="bg-dark bg-opacity-50 d-flex flex-column justify-content-end">
                <Card.Title>{beach.name}</Card.Title>
                <Card.Text>{beach.description}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AttractionsPage;
