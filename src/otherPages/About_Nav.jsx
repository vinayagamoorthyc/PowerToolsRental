import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'typeface-montserrat';

export default function About_Nav() {
  return (
    <div>
      <center>
    <div fluid className='appbar' id='topview'>
      <Navbar fixed='top' expand="lg" className="bg-body-tertiary shadow-lg p-2 mb-1 bg-body rounded">
        <Navbar.Brand href="#"><img src="https://i.postimg.cc/ZKR8bvHf/Power-Tools.png" alt="" width={100}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '150px',fontFamily:"Montserrat, sans-serif"}}
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="#footer">Contact</Nav.Link>
            <NavDropdown title="Products" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/AllProducts">
                All Products</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link hidden={false} style={{fontWeight:"bold"}} href="/ProfilePage">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  </div>
  </center>
    </div>
  )
}
