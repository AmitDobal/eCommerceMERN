import React, { useState } from "react";
import {
  Alert,
  Button,
  CloseButton,
  Col,
  Container,
  Form,
  Image,
  Row,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminEditProductPage = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  const onHover = {
    cursor: "pointer",
    position: "absolute",
    left: "5px",
    top: "-10px",
    transform: "scale(2.7)",
  };

  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col md={1}>
          <Link to="/admin/products" className="btn btn-info my-3">
            Go Back
          </Link>
        </Col>
        <Col md={6}>
          <h1>Edit product</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                defaultValue={"Panasonic"}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                as="textarea"
                name="description"
                rows={3}
                defaultValue={"Product description"}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCount">
              <Form.Label>Count in stock</Form.Label>
              <Form.Control
                required
                type="number"
                name="count"
                defaultValue={"2"}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                required
                type="text"
                name="price"
                defaultValue={"$18"}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCategory">
              <Form.Label>Category</Form.Label>
              <Form.Select
                required
                name="category"
                aria-label="default select example"
              >
                <option value="">Choose category</option>
                <option value="1">Laptops</option>
                <option value="2">TV</option>
                <option value="3">Games</option>
              </Form.Select>
            </Form.Group>
            <Row className="mt-5">
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicAttributes">
                  <Form.Label>Choose attribute and set value</Form.Label>
                  <Form.Select
                    name="atrrKey"
                    aria-label="Default select example"
                  >
                    <option value="">Choose attribute</option>
                    <option value="red">color</option>
                    <option value="2">TV</option>
                    <option value="3">Games</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicAttributeValue"
                >
                  <Form.Label>Attribute value</Form.Label>
                  <Form.Select
                    name="atrrVal"
                    aria-label="Default select example"
                  >
                    <option value="">Choose attribute value</option>
                    <option value="red">color</option>
                    <option value="2">TV</option>
                    <option value="3">Games</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Table hover>
                <thead>
                  <tr>
                    <th>Attribute</th>
                    <th>Value</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>attr key</td>
                    <td>attr value</td>
                    <td>
                      <CloseButton />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicNewAttribute">
                  <Form.Label>Create new attribute</Form.Label>
                  <Form.Control
                    disabled={false}
                    type="text"
                    placeholder="First choose or create category"
                    name="newAttrValue"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicNewAttributeValue"
                >
                  <Form.Label>Attribute value</Form.Label>
                  <Form.Control
                    disabled={false}
                    required={false}
                    type="text"
                    placeholder="First choose or create category"
                    name="newAttrValue"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Alert variant="primary">
              After typing attribute key value press enter on one of the field
            </Alert>
            <Form.Group className="mb-3 mt-3" controlId="formFileMultiple">
              <Form.Label>Images</Form.Label>
              <Row>
                <Col style={{ position: "relative" }} xs={3}>
                  <Image src="/Images/monitors-category.png" fluid />
                  <i style={onHover} className="bi bi-x text-danger"></i>
                </Col>
                <Col style={{ position: "relative" }} xs={3}>
                  <Image src="/Images/monitors-category.png" fluid />
                  <i style={onHover} className="bi bi-x text-danger"></i>
                </Col>
              </Row>
              <Form.Control required type="file" multiple />
            </Form.Group>
            <Button variant="primary" type="submit">
              UPDATE
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminEditProductPage;
