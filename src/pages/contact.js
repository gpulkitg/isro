import React, { useState } from "react"
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Phone, Telephone, Geo, Envelope, Globe, Printer, Newspaper } from 'react-bootstrap-icons'

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Sensor from '../components/sensor'


export const query = graphql`
  query {
    deptData: allContactYaml(sort: {fields: title}) {
      edges {
        node {
          id
          title
          address
          phone {
            number
          }
          fax {
            number
          }
          email
          website
        }
      }
    }
    cover: file(relativePath: {eq: "common/isro_hq1.jpeg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`



export default function ContactPage({ data }) {

  const [selectedDept, setSelectedDept] = useState(0)
  const [validated, setValidated] = useState(false)
  const dept = data.deptData.edges[selectedDept].node;


  function handleSubmit(e) {
    const form = e.currentTarget

    Array.prototype.forEach.call(form.elements, function(el) {
      console.log(el.id, el.name, el.value)
    })

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true)
  }



  return (
    <Layout>
      <SEO title="Contact" />

      <div className="w-100" className="cover-img-wrapper">
        <Img
          fluid={data.cover.childImageSharp.fluid}
          className="h-100 w-100"
          imgStyle={{ opacity: `0.7` }}
        />
        <h1 className="text-center display-4" style={{ position: `absolute`, top: `50%`, left: `50%`, transform: `translate(-50%, -50%)` }}>
          Get in touch
        </h1>
      </div>

      <br />

      <Container>

        <Row
          data-sal="fade"
          data-sal-duration="1000"
          data-sal-easing="easeOutCirc"
          >

          <Col className="py-1" lg={8}>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>

              <Form.Group controlId="formSelect">
                <Form.Label>Select Department</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => setSelectedDept(e.target.value)}
                  name="dept"
                  value={selectedDept}
                  required
                  custom
                >
                  {/* <option value="-1"></option> */}
                  { data.deptData.edges.map(({ node }, ind) => (
                    <option value={ind} key={`option_${ind}`}>{node.title}</option>
                  ))}
                </Form.Control>
              </Form.Group>


              <Form.Row>
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

              </Form.Row>

              <Form.Group controlId="formEmail">
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


              <Form.Group controlId="formTextarea">
                <Form.Label>Your message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="10"
                  placeholder="Min 5 characters"
                  name="message"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your message
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Agree to terms and conditions"
                  feedback="You must agree to T&C before sending"
                  name="checkAgree"
                  required
                />
              </Form.Group>

              {/* <Form.Group>
                <Form.File id="formAttachment" label="Attachments (optional)" />
              </Form.Group> */}
              {/* <Form.File id="custom-file" label="Custom file input" custom /> */}

              <br />
              <Button variant="outline-light" type="submit" style={{ float: `right` }}>
                Send message
              </Button>

            </Form>


          </Col>



          <Col className="py-1" lg={4}>
            <h3 className="text-center my-1">Contact Information</h3>

            { dept.address.length > 0 &&
              <Row className="m-1" style={{ border: `1px solid gray` }}>
                <Col className="p-1 my-auto text-center" xs={4}>
                  <Geo width="32" height="32" />
                </Col>
                <Col className="p-1 my-auto" xs={8}>
                  <p>{dept.address}</p>
                </Col>
              </Row>
            }

            { dept.phone.length > 0 &&
              <Row className="m-1" style={{ border: `1px solid gray` }}>
                <Col className="p-1 my-auto text-center" xs={4}>
                  <Telephone width="32" height="32" />
                </Col>
                <Col className="p-1 my-auto" xs={8}>
                  { dept.phone.map( (phone, ind) => (
                    <p key={`phone_${ind}`}>
                      <u><a href={`tel:${phone.number}`}>{phone.number}</a></u>
                    </p>
                  ))}
                </Col>
              </Row>
            }

            { dept.fax.length > 0 &&
              <Row className="m-1" style={{ border: `1px solid gray` }}>
                <Col className="p-1 my-auto text-center" xs={4}>
                  <Newspaper width="32" height="32" />
                </Col>
                <Col className="p-1 my-auto" xs={8}>
                  { dept.fax.map( (fax, ind) => (
                    <p key={`fax_${ind}`}>{fax.number}</p>
                  ))}
                </Col>
              </Row>
            }


            { dept.email.length > 0 &&
              <Row className="m-1" style={{ border: `1px solid gray` }}>
                <Col className="p-1 my-auto text-center" xs={4}>
                  <Envelope width="32" height="32" />
                </Col>
                <Col className="p-1 my-auto" xs={8}>
                  <u><a href={`mailto:${dept.email}`}>{dept.email}</a></u>
                </Col>
              </Row>
            }

            { dept.website.length > 0 &&
              <Row className="m-1" style={{ border: `1px solid gray` }}>
                <Col className="p-1 my-auto text-center" xs={4}>
                  <Globe width="32" height="32" />
                </Col>
                <Col className="p-1 my-auto" xs={8}>
                  <Link to={dept.website}>{dept.website}</Link>
                </Col>
              </Row>
            }

          </Col>
        </Row>



      </Container>


    </Layout>
  )

}
