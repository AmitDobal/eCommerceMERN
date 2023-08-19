import React from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";

const CartItemComponent = ({ item, orderCreated = false }) => {
  return (
    <>
      <ListGroup.Item>
        <Row>
          <Col md={2}>
            <Image
              crossOrigin="anonymous"
              src={item.image ? item.image.path ?? null : null}
              fluid
            />
          </Col>
          <Col md={2}>{item.name}</Col>
          <Col md={2}>
            <span className="fw-bold">${item.price}</span>
          </Col>
          <Col md={3}>
            <Form.Select onChange={() =>{}} disabled={orderCreated} value={item.quantity}>
              {[...Array(item.count).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col md={3}>
            <Button
              type="button"
              variant="danger"
              onClick={() => window.confirm("Are you sure")}
            >
              <i className="bi bi-trash" />
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
      {/* <br /> */}
    </>
  );
};

export default CartItemComponent;
