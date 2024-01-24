import 'typeface-montserrat';
import "./AdminPortal.css";
import upimg from "../asset/uploader.jpg";
import Table from 'react-bootstrap/Table';
import "../components/AppBar.jsx";
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function AdminPortal() {
    const [image, setImage] = useState(upimg);
    const [products,setProducts]=useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    useEffect(()=>{
      axios.get('https://powerlendbackend.onrender.com/getProduct')
      .then(e =>setProducts(e.data))
      .catch(err=>console.log(err));
      }, []);

    const [proname,setProname]=useState();
    const [prorate,setProrate]=useState();
    const [desc,setDesc]=useState();
    const [overview,setOverview]=useState();
    const [avail,setAvail]=useState();
    const [category,setCategory]=useState();
    const [imgurl,setImgurl]=useState();

    const InsertProduct=(e)=>{
      e.preventDefault();
      axios.post("https://powerlendbackend.onrender.com/createProduct", {proname, prorate, desc, overview, avail, category, imgurl})
      .then(()=>{
        alert("Your Product is added to Inventory!")
        window.location.reload()
      }).catch(err=>console.log(err))
    }

    const handleDelete=(id)=>{
      axios.delete("https://powerlendbackend.onrender.com/deleteProduct/"+id)
      .then(()=>window.location.reload())
      .catch(err=> console.log(err))
    }

  return (
    <div>
        <div className='adminnav'>

        <div style={{padding:"5px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",zIndex:"1"}}>
        <Link to="/SignIn"><button class="Back_Btn">
          <Link to='/SignIn' class="back_icon"><svg style={{color:"black"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left svg-icon" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
                    <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                    </svg></Link>
          <Link to='/SignIn' class="back_text">Quit</Link>
        </button></Link>
        <h3 style={{textAlign:"center",fontFamily:'Montserrat, sans-serif',fontWeight:"bolder",marginTop:"0px",zIndex:"1"}}>Admin Portal</h3>
        <NavDropdown title="Others" id="navbarScrollingDropdown" 
        style={{
            fontFamily:"Montserrat, sans-serif",fontWeight:"800"
            }}>
              <NavDropdown.Item><Link to="/Experience" style={{textDecorationLine:"none",color:"black"}}>Orders Track</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
              <Link to="/Reports" style={{textDecorationLine:"none",color:"black"}}>User Reports</Link></NavDropdown.Item>
                <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/Experience" style={{textDecorationLine:"none",color:"black"}}>User Experience</Link></NavDropdown.Item>
        </NavDropdown>

        </div>
        </div>
        <hr style={{marginTop:"-2px"}} />
        <div className='admin_view'>
        <div class="form-container2" style={{backgroundColor:"#ffc400",marginTop:"-5px"}} tabindex="0">
            <div class="form-container__block">
                <div class="form-container__header">
                <p style={{fontWeight:"800"}}>Add your products into Power Tools Inventory</p>    
                <form class="form-container__form" onSubmit={InsertProduct}>
                    <input placeholder="Product Name" type="text" required={true} onChange={(e)=>setProname(e.target.value)}/>
                    <input placeholder="Product rate" type="number" required={true} onChange={(e)=>setProrate(e.target.value)}/>
                    <textarea placeholder='Describe your product' required={true} onChange={(e)=>setDesc(e.target.value)}></textarea>
                    <textarea placeholder='Product Overview' required={true} onChange={(e)=>setOverview(e.target.value)}></textarea>
                    <input placeholder="Product Availability" type="number" required={true} onChange={(e)=>setAvail(e.target.value)}/>
                    <input placeholder="Product Category" type="text" required={true} onChange={(e)=>setCategory(e.target.value)}/>
                    <input placeholder="Image Url" type="text" required={true} onChange={e=>{
                      setImage(e.target.value)
                      setImgurl(e.target.value)
                    }}/>
                    <div class="error">
                    <div class="error__title"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none"><path fill="#393a37" d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"></path></svg>
                        &nbsp;If you want to add any product to inventory, Details should be valid!</div>
                    </div>
                    <div class="form-container__register-buttons">
                    <input type='submit' class="form-container__sign" value="Add to Inventory"/>
                    <input type='reset' class="form-container__sign" value="Clear
                    "/>
                    </div>
                </form>
                </div>
            </div>
        </div>
        <div className='admin_view2'>
            <div>
            <div className='edit_image2'>
                    <strong>Image Preview</strong>
                    {image && (
                    <div className="image-preview2" style={{ backgroundImage: `url(${image})` }} />
                    )}
                </div>
            </div>
        </div>
        </div>
        <br />
        <h3 style={{textAlign:"center",fontFamily:'Montserrat, sans-serif',fontWeight:"bold",backgroundColor:"black",padding:"10px",color:"#ffc400",fontSize:"20px"}}>Products Catalog</h3>
        <div>
        <center>
            <Table striped bordered hover variant="light" style={{width:"98%",fontFamily:'Montserrat, sans-serif'}}>
            <thead>
                <tr>
                <th>Product</th>
                <th>Product Name</th>
                <th>Product Description</th>
                <th>Product Rate</th>
                <th>Product Availability</th>
                <th>Product Category</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
              {
                products.map((e)=>{
                 return (<tr>
                <td><img src={e.imgurl} alt="" width={100} /></td>
                <td>{e.proname}</td>
                <td>{e.desc}</td>
                <td>{e.prorate}</td>
                <td>{e.avail}</td>
                <td>{e.category}</td>
                <td>
                  <Link to={`/ProUpdate/${e._id}`}><button class="btn btn-warning">Update</button></Link>&nbsp;
                  <button class="btn btn-outline-danger" onClick={handleShow}>Remove</button>

                  <Modal show={show} onHide={handleClose} backdrop="static">
                    <Modal.Header closeButton>
                      <Modal.Title>Remove Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure to permanently delete this product from your inventory?</Modal.Body>
                    <Modal.Footer>
                      <Button variant="outline-secondary" onClick={handleClose}>
                        Cancel
                      </Button>
                      <Button variant="danger" onClick={()=>handleDelete(e._id)}>
                        Remove
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </td>
              </tr>
              )
                })
              }
            </tbody>    
            </Table>
            </center>
        </div>
        
    </div>
  )
}

