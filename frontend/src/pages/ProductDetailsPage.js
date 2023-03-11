import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import AddedToCartMessageComponent from "../AddedToCartMessageComponent";
import ImageZoom from "js-image-zoom";
import { useEffect } from "react";

const ProductDetailsPage = () => {
  var options = {
    // width: 400,
    // zoomWidth: 500,
    scale: 2,
    offset: { vertical: 0, horizontal: 0 },
  };
  console.log("Product Details Page");
  useEffect(() => {
    new ImageZoom(document.getElementById("first"), options);
    new ImageZoom(document.getElementById("second"), options);
    new ImageZoom(document.getElementById("third"), options);
    new ImageZoom(document.getElementById("fourth"), options);
  });
  return (
    <Container>
      <AddedToCartMessageComponent />
      <Row className="mt-5">
        <Col style={{ zIndex: 1 }} md={4}>
          <div id="first">
            <Image
              crossOrigin="anonymous"
              fluid
              src="/images/games-category.png"
            />
          </div>
          <div id="second">
            <Image fluid src="/images/monitors-category.png" />
          </div>
          <div id="third">
            <Image fluid src="/images/tablets-category.png" />
          </div>
          <div id="fourth">
            <Image fluid src="/images/games-category.png" />
          </div>
        </Col>
        <Col md={8}>
          <Row>
            <Col md={8}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h1>Product Name</h1>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating readonly size={20} initialValue={4} />
                  (1)
                </ListGroup.Item>
                <ListGroup.Item>
                  Price: <span className="fw-bold">$232</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Porta ac consectetur ac Porta ac consectetur ac Porta ac
                  consectetur ac Porta ac consectetur a cPorta ac consectetur ac
                  Porta ac consectetur ac Porta ac consectetur ac
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item>Status: in Stock</ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  Price: <span className="fw-bold">$232</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Form.Select size="lg" aria-label="Default select example">
                    <option>Quantity: </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </Form.Select>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button variant="danger">Add to Cart</Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row className="mt-5">
            <h5>REVIEWS</h5>
            <ListGroup variant="flush">
              {Array.from({ length: 10 }).map((_, idx) => (
                <ListGroup.Item key={idx}>
                  John Doe <br />
                  <Rating readonly size={20} initialValue={4.4} /> <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Row>
          <hr />
          Send Review Form
          <Alert variant="danger">Login first to write a review</Alert>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Write a Review</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Select aria-label="Default select example">
              <option>Your Rating</option>
              <option value="5">5 (very good)</option>
              <option value="4">4 (good)</option>
              <option value="3">3 (average)</option>
              <option value="2">2 (bad)</option>
              <option value="1">1 (awful)</option>
            </Form.Select>
            <Button variant="warning" className="mb-3 mt-3">
              Button
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailsPage;
