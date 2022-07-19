import React from 'react'
import Nav from 'react-bootstrap/Nav';

const Projects = () => {
  return (
    <div>
    <Nav variant="tabs">
      <Nav.Item>
        <Nav.Link eventKey="link-0">Tab One</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" >Tab Two</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Tab Three</Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
  )
}

export default Projects