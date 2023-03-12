import { Alert, Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CartItemComponent from "../components/CartItemComponent";
const CartPage = () => {
  return (
    <Container fluid>
      <Row className="mt-4">
        <Col md={8}>
          <h1>Shopping Cart</h1>
          <ListGroup variant="flush">
            {Array.from({ length: 3 }).map((_, idx) => (
              <CartItemComponent key={idx} />
            ))}
          </ListGroup>
          <Alert variant="info">Your cart is empty</Alert>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>Subtotal (2 Items)</ListGroup.Item>
            <ListGroup.Item>
              Price: <span className="fw-bold">$543</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <LinkContainer to="/user/order-details">
                <Button className="button">Proceed to checkout</Button>
              </LinkContainer>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
