import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function Navigation() {
    return (
        <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/">QUANTIFIRE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Devices" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/stations">Stations</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Add Node</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
                <Nav.Link href="/contact">Contact Us</Nav.Link>
                <Nav.Link href="/about">Our Story</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#login">Sahil Patil</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
    );
}

export default Navigation;