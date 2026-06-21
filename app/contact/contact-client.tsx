"use client";

import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Geo, Telephone, Newspaper, Envelope, Globe } from "react-bootstrap-icons";

type PhoneNumber = { number: string };

export type Department = {
  id?: string;
  title: string;
  address: string;
  phone: PhoneNumber[];
  fax: PhoneNumber[];
  email: string;
  website: string;
};

export default function ContactForm({ departments }: { departments: Department[] }) {
  const [selectedDept, setSelectedDept] = useState(0);
  const [validated, setValidated] = useState(false);

  const dept = departments[selectedDept];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;

    // Validation-only: there is no backend, so never POST. Stop the default
    // navigation and just toggle Bootstrap validation styling.
    e.preventDefault();
    e.stopPropagation();

    form.checkValidity();
    setValidated(true);
  }

  return (
    <Container>
      <Row>
        <Col className="py-1" lg={8}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formSelect" className="mb-3">
              <Form.Label>Select Department</Form.Label>
              <Form.Select
                onChange={(e) => setSelectedDept(Number(e.target.value))}
                name="dept"
                value={selectedDept}
                required
              >
                {departments.map((node, ind) => (
                  <option value={ind} key={`option_${ind}`}>
                    {node.title}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Row className="g-2 mb-3">
              <Form.Group as={Col} controlId="formFirstName" lg>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  placeholder="Min 2 characters"
                  pattern="[a-zA-Z]{2,}"
                  name="firstName"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  First Name should have minimum 2 characters
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="formLastName" lg>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  placeholder="Min 2 characters"
                  pattern="[a-zA-Z]{2,}"
                  name="lastName"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Last Name should have minimum 2 characters
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Your Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email address
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formTextarea" className="mb-3">
              <Form.Label>Your message</Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                placeholder="Min 5 characters"
                name="message"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter your message
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formCheckbox" className="mb-3">
              <Form.Check
                type="checkbox"
                label="Agree to terms and conditions"
                feedback="You must agree to T&C before sending"
                feedbackType="invalid"
                name="checkAgree"
                required
              />
            </Form.Group>

            <br />
            <Button variant="outline-light" type="submit" style={{ float: "right" }}>
              Send message
            </Button>
          </Form>
        </Col>

        <Col className="py-1" lg={4}>
          <h3 className="text-center my-1">Contact Information</h3>

          {dept.address.length > 0 && (
            <Row className="m-1" style={{ border: "1px solid gray" }}>
              <Col className="p-1 my-auto text-center" xs={4}>
                <Geo width="32" height="32" />
              </Col>
              <Col className="p-1 my-auto" xs={8}>
                <p>{dept.address}</p>
              </Col>
            </Row>
          )}

          {dept.phone.length > 0 && (
            <Row className="m-1" style={{ border: "1px solid gray" }}>
              <Col className="p-1 my-auto text-center" xs={4}>
                <Telephone width="32" height="32" />
              </Col>
              <Col className="p-1 my-auto" xs={8}>
                {dept.phone.map((phone, ind) => (
                  <p key={`phone_${ind}`}>
                    <u>
                      <a href={`tel:${phone.number}`}>{phone.number}</a>
                    </u>
                  </p>
                ))}
              </Col>
            </Row>
          )}

          {dept.fax.length > 0 && (
            <Row className="m-1" style={{ border: "1px solid gray" }}>
              <Col className="p-1 my-auto text-center" xs={4}>
                <Newspaper width="32" height="32" />
              </Col>
              <Col className="p-1 my-auto" xs={8}>
                {dept.fax.map((fax, ind) => (
                  <p key={`fax_${ind}`}>{fax.number}</p>
                ))}
              </Col>
            </Row>
          )}

          {dept.email.length > 0 && (
            <Row className="m-1" style={{ border: "1px solid gray" }}>
              <Col className="p-1 my-auto text-center" xs={4}>
                <Envelope width="32" height="32" />
              </Col>
              <Col className="p-1 my-auto" xs={8}>
                <u>
                  <a href={`mailto:${dept.email}`}>{dept.email}</a>
                </u>
              </Col>
            </Row>
          )}

          {dept.website.length > 0 && (
            <Row className="m-1" style={{ border: "1px solid gray" }}>
              <Col className="p-1 my-auto text-center" xs={4}>
                <Globe width="32" height="32" />
              </Col>
              <Col className="p-1 my-auto" xs={8}>
                <a
                  href={/^https?:\/\//.test(dept.website) ? dept.website : `https://${dept.website}`}
                  target="_blank"
                  rel="noreferrer external"
                >
                  {dept.website}
                </a>
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
}
