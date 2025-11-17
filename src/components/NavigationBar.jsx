import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <Navbar
      expand="lg"
      className="navigation-bar shadow-sm"
      bg="dark"
      data-bs-theme="dark"
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          QuestForge Labs
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="primary-nav" />
        <Navbar.Collapse id="primary-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/authoring">
              Author Tools
            </Nav.Link>
            <Nav.Link as={NavLink} to="/engagement">
              Engagement Lab
            </Nav.Link>
          </Nav>
          <div className="d-flex gap-2">
            <Button variant="outline-light" size="sm">
              Join Demo Course
            </Button>
            <Button variant="warning" size="sm">
              Start Authoring
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
