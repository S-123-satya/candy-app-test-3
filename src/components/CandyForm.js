import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function CandyForm() {

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

  };

  return (
    <Container>
      <Row>
        <Col>
          <Form className="m-3 border  rounded p-2 bg-success opacity-2" onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4">
                <Form.Label>Candy name</Form.Label>
                <Form.Control required type="text" placeholder="Cadbury" />
              </Form.Group>
              <Form.Group as={Col} md="4">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter description"
                />
              </Form.Group>
              <Form.Group as={Col} md="4">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  required
                  type="number"
                  min="1"
                  max="100"
                  step="1"
                  placeholder="Enter price"
                />
              </Form.Group>
            </Row>
            <div className="text-center">
              <Button type="submit">Submit form</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default CandyForm;
