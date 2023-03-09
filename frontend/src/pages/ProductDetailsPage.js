import { Col, Container, Row } from "react-bootstrap";

const ProductDetailsPage = () => {
  return (
    <Container  >
      <Row className="mt-5">
        <Col md={4} >
          Images
        </Col>
        <Col md={8}>
          <Row>
            <Col md={8} >
              Product name, Price, description, rating
            </Col>
            <Col md={4} >
              Product status, quantity
            </Col>
          </Row>
          <Row className="mt-5">
            <h5>REVIEWS</h5>
          </Row>
          <hr />
          Send Review Form
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailsPage;
