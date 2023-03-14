import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap";
import CartItemComponent from "../../components/CartItemComponent";
const UserCartDetailsPage = () => {
  return (
    <Container fluid>
      <Row className="mt-4">
        <h1>Cart Details</h1>
        <Col md={8}>
          <br />
          <Row>
            <Col md={6}>
              <h2>Shipping</h2>
              <b>Name</b>: John Doe <br />
              <b>Address</b>: Galaxy IT park, sector 62, Noida, UP 110011 <br />
              <b>Phone</b>: +91-123123123123 <br />
            </Col>
            <Col md={6}>
              <h2>Payment Method</h2>
              <Form.Select>
                <option value={"pp"}>PayPal</option>
                <option value={"cod"}>
                  Cash On Delivery(Delivery may be delayed)
                </option>
              </Form.Select>
            </Col>
            <Row>
              <Col>
                <Alert className="mt-3" variant="danger">
                  Not delivered. In order to make order, fill out your profile
                  with correct address, city etc.
                </Alert>
              </Col>
              <Col>
                <Alert className="mt-3" variant="success">
                  Not Paid yet
                </Alert>
              </Col>
            </Row>
          </Row>
          <br />
          <h2>Order Items</h2>
          <ListGroup variant="flush">
            {Array.from({ length: 3 }).map((_, idx) => (
              <CartItemComponent key={idx} />
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Order Summary</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Items price (after tax): <span className="fw-bold">$100</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Shipping: <span className="fw-bold">included</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Tax: <span className="fw-bold">included</span>
            </ListGroup.Item>
            <ListGroup.Item className="text-danger">
              Total price: <span className="fw-bold ">$100</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-grid">
                <Button size="lg" variant="danger" type="button">
                  Pay for the order
                </Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default UserCartDetailsPage;
