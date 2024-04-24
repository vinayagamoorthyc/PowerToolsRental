import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './/AppBar.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartDetails from '../otherPages/CartDetails';
import 'typeface-montserrat';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function AppBar() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [cartProducts, setCartProducts]=useState([]);
  const [subtotal, setSubtotal]=useState(0);
  const count = cartProducts.length;
  const [hide,setHide]=useState(true);
  

  const navigate = useNavigate();
  const userid = window.localStorage.getItem("userid");
  const token = window.localStorage.getItem("token");
  const cartpros=cartProducts.map(e=>
    <CartDetails imgurl={e.imgurl} proname={e.proname} _id={e._id} prorate={e.prorate} days={e.days}/>
  );
  useEffect(()=>{
    if(token!=null){
      axios.get('https://powerlendbackend.onrender.com/getCart/'+userid)
    .then(e =>setCartProducts(e.data))
    .catch(err=>console.log(err));
      setHide(false);
    }else{
      setHide(true);
    }
    let total=0;
    cartProducts.forEach((e)=>{
      total += parseFloat(e.prorate);
    })
    setSubtotal(total);
    }, [cartProducts]);

    

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const Logout=()=>{
    window.localStorage.clear();
    navigate("/");
    window.location.reload();
  }

  return (
    <div>
    <div fluid className='appbar' id='topview' >
      <Navbar fixed='top' expand="lg" className="bg-body-tertiary shadow-lg p-2 mb-1 bg-body navbar">
        <Navbar.Brand><Link to='/About'>
          <img src="https://i.postimg.cc/ZKR8bvHf/Power-Tools.png" alt="" width={100}/></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '150px'}}
          >
            <Nav.Link style={{fontWeight:"500"}} href='/'>Home</Nav.Link>
            <Nav.Link style={{fontWeight:"500"}}href='/About'>About</Nav.Link>
            <NavDropdown title="Products" id="navbarScrollingDropdown" style={{fontWeight:"500",zIndex:"1",color:"black"}}>
              <NavDropdown.Item href="#top_pro" style={{fontWeight:"500",zIndex:"1"}}>Our Products</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item style={{fontWeight:"500",zIndex:"1"}} href='/AllProducts'>
              All Products</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link style={{fontWeight:"600"}} hidden={hide} href='/ProfilePage'>Profile</Nav.Link>
          </Nav>
      
          <Nav>
          <button class="cart_button" onClick={handleShow} style={{zIndex:"0"}} hidden={hide}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bell" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
              </svg>
              <span className="position-absolute top-4 start-100 translate-middle badge bg-warning px-1.8" style={{color:"black",borderRadius:"30px"}}>
                {count}
              </span>
            </button>
          </Nav>
          &nbsp;
          &nbsp;
          <Nav>
          <Link to="/SignIn" style={{textDecoration:'none'}}><button class="ui-btn" hidden={!hide}>
              <span><Link style={{textDecoration:'none' ,color: '#ffc400'}} to="/SignIn">Sign In</Link></span>
            </button></Link>
          </Nav>
          &nbsp;
          <Nav>
          <button class="ui-btn" hidden={hide} onClick={()=>handleShow2()}>
              <span>LogOut</span>
            </button>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  </div>

  <Offcanvas show={show} onHide={handleClose} placement='end' scroll='true' className="offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{fontFamily:"Montserrat, sans-serif",fontWeight:"bold"}}>Your Cart</Offcanvas.Title>
        </Offcanvas.Header><hr style={{backgroundColor:"gray"}}/>
        <Offcanvas.Body style={{fontFamily:"Montserrat, sans-serif"}}>
          <div>
            <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
              {cartpros}
            </div> 
          </div>
        </Offcanvas.Body>
        <div><center>
          <p style={{fontFamily:'Montserrat, sans-serif',fontWeight:"800",color:"black"}}>Sub Total: ₹ {subtotal}</p>
          <Link to={`/CheckOut/${subtotal}`}>
              <button class="checkout_btn">
                <b>Check Out</b>
              </button></Link>
              </center>
            </div>
      </Offcanvas>
      <Modal show={show2} onHide={handleClose2} backdrop="static" contentClassName='modal-bg'>
                    <Modal.Header closeButton>
                      <Modal.Title>Confirm Alert!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Ensure whether you want to logout your session from our site?
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="dark" onClick={()=>handleClose2()}>
                        Cancel
                      </Button>
                      <Button variant="warning" onClick={()=>Logout()}>
                        Confirm
                      </Button>
                    </Modal.Footer>
                  </Modal>
  </div>
  );
}

export default AppBar;