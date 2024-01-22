import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './/AppBar.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartDetails from '../otherPages/CartDetails';
import 'typeface-montserrat';
import { Link } from 'react-router-dom';

function AppBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className=''>
    <div fluid className='appbar' id='topview' >
      <Navbar fixed='top' expand="lg" className="bg-body-tertiary shadow-lg p-2 mb-1 bg-body navbar">
        <Navbar.Brand><Link to="/About">
          <img src="https://i.postimg.cc/ZKR8bvHf/Power-Tools.png" alt="" width={100}/></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '150px'}}
          >
            <Nav.Link style={{fontWeight:"500"}}><Link to="/" style={{textDecoration:"none",color:"black"}}>Home</Link></Nav.Link>
            <Nav.Link style={{fontWeight:"500"}}><Link to="/About" style={{textDecoration:"none",color:"black"}}>About</Link></Nav.Link>
            <NavDropdown title="Products" id="navbarScrollingDropdown" style={{fontWeight:"500",zIndex:"1",color:"black"}}>
              <NavDropdown.Item href="#top_pro" style={{fontWeight:"500",zIndex:"1"}}>Our Products</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item style={{fontWeight:"500",zIndex:"1"}}>
              <Link to="/AllProducts" style={{textDecoration:"none",color:"black"}}>All Products</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link hidden={false} style={{fontWeight:"600"}}><Link to="/ProfilePage" style={{textDecoration:"none",color:"black"}}>Profile</Link></Nav.Link>
          </Nav>
      
          <Nav>
          <button class="cart_button" onClick={handleShow} style={{zIndex:"0"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bell" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
              </svg>
              <span className="position-absolute top-3 start-100 translate-middle badge bg-warning px-1" style={{color:"black",borderRadius:"30px"}}>
                3
              </span>
            </button>
          </Nav>
          &nbsp;
          &nbsp;
          <Nav>
          <Link to="/SignIn" style={{textDecoration:'none'}}><button class="ui-btn">
              <span><a style={{textDecoration:'none' ,color: '#ffc400'}} href="/SignIn">Sign In</a></span>
            </button></Link>
          </Nav>
          &nbsp;
          <Nav>
          <Link to="/SignIn" style={{textDecoration:'none'}}><button class="ui-btn">
              <span><a style={{textDecoration:'none' ,color: '#ffc400'}} href="/SignIn">LogOut</a></span>
            </button></Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  </div>

  <Offcanvas show={show} onHide={handleClose} placement='end' scroll='true' className="offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{fontFamily:"Montserrat, sans-serif",fontWeight:"bold"}}>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{fontFamily:"Montserrat, sans-serif"}}>
          <div>
            <div>
            <CartDetails/>&nbsp;
            <CartDetails/>&nbsp;
            <CartDetails/>&nbsp;
            <CartDetails/>&nbsp;
            <CartDetails/>&nbsp;
            <CartDetails/>&nbsp;
            <CartDetails/>&nbsp;
            <CartDetails/>&nbsp;
            <CartDetails/>&nbsp;
            </div> 
          </div>
        </Offcanvas.Body>
        <div><center>
          <p style={{fontFamily:'Montserrat, sans-serif',fontWeight:"800",color:"black"}}>Sub Total: ₹ 63.00</p>
          <a href="/CheckOut">
              <button class="checkout_btn">
                <b>Check Out</b>
              </button></a>
              </center>
            </div>
      </Offcanvas>

  </div>
  );
}

export default AppBar;