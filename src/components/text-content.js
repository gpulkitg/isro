import React from 'react'
import Container from 'react-bootstrap/Container';

const TextContent = ({ title, children }) => (
  <Container className="pt-3 pb-2">
    <h2 className="text-center mb-2">{title}</h2>
    {children}
  </Container>
)

export default TextContent
