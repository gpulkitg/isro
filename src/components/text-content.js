import React from 'react'
import Container from 'react-bootstrap/Container';

const TextContent = ({ title, children }) => (
  <Container className="my-2">
    <h2 className="text-center">{title}</h2>
    <br />
    {children}
  </Container>
)

export default TextContent
