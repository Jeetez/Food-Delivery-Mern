import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { MdLocalOffer } from "react-icons/md";

const TopBar = () => {
  return (
    <div className="style1">
      <Navbar bg="dark" variant="dark" expand="lg" >
        <Container fluid >
          
          <Nav className="navvv">
            <LinkContainer to="/" activeClassName="" className="home" >
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" activeClassName="" className="about">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" activeClassName="" className="contact">
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/policy" activeClassName="" className="terms">
              <Nav.Link>Terms and Policies</Nav.Link>
            </LinkContainer>

            
          </Nav>
          <h6 className="freedel">
            <MdLocalOffer className="text-warning" />&nbsp;Free Home
            Delivery on Order Above 500/- Rupees
          </h6>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopBar;
