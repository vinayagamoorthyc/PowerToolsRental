import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'typeface-montserrat';
import { Link } from 'react-router-dom';

export default function About_Nav() {
  return (
    <div>
    <div fluid className='appbar' id='topview'>
      <Navbar fixed='top' expand="lg" className="bg-body-tertiary shadow-lg p-2 mb-1 bg-body rounded">
        <Navbar.Brand href="#"><img src="https://i.postimg.cc/ZKR8bvHf/Power-Tools.png" alt="" width={100}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '150px',fontFamily:"Montserrat, sans-serif"}}
          >
            <Nav.Link href="/" style={{fontWeight:"500"}}>Home</Nav.Link>
            <Nav.Link href="/About" style={{fontWeight:"500"}}>About</Nav.Link>
            <Nav.Link href="#footer" style={{fontWeight:"500"}}>Contact</Nav.Link>
            <NavDropdown title="Products" id="navbarScrollingDropdown" style={{fontWeight:"500"}}>
              <NavDropdown.Item href="/AllProducts" style={{fontWeight:"500"}}>
                All Products</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link hidden={false} style={{fontWeight:"bold"}} href="/ProfilePage">Profile</Nav.Link>
          </Nav>
          <Nav>
          <Link to="/SignIn" style={{textDecoration:'none'}}><button class="ui-btn">
              <span><a style={{textDecoration:'none' ,color: '#ffc400'}} href="/SignIn">LogOut</a></span>
            </button></Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  </div>
    </div>
  )
}
