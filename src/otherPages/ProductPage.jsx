import React, { useEffect, useState } from 'react'
import './/ProductPage.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'typeface-montserrat';
import Footer from '../components/Footer';
import Aos from 'aos';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AppBar from '../components/AppBar';

export default function ProductPage() {

  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const userid = window.localStorage.getItem("userid");
  const {id} = useParams();
  const [proname,setProname]=useState();
    const [prorate,setProrate]=useState();
    const [desc,setDesc]=useState();
    const [overview,setOverview]=useState();
    const [avail,setAvail]=useState();
    const [category,setCategory]=useState();
    const [imgurl,setImgurl]=useState();
    const [days,setDays]=useState();
    const navigate = useNavigate();
    const [hide,setHide]=useState(true);
    const token = window.localStorage.getItem("token");

  useEffect(()=>{
    axios.get("https://powerlendbackend.onrender.com/getUp/"+id)
      .then(e=>{ console.log(e)
        setProname(e.data.proname)
        setProrate(e.data.prorate)  
        setDesc(e.data.desc)    
        setOverview(e.data.overview)
        setAvail(e.data.avail)
        setCategory(e.data.category)
        setImgurl(e.data.imgurl)
      })
      .catch(err=>console.log(err));
      if(token!=null){
        setHide(false);
      }else{
        setHide(true);
      }
    Aos.init({duration: 1500});
    }, []);

    const InsertCart=(e)=>{
      e.preventDefault();
      setAvail(avail-1);
      axios.post("https://powerlendbackend.onrender.com/createCart/"+userid, {proname, prorate, days, imgurl})
      .then(()=>{
        handleShow();
      }).catch(err=>console.log(err))
    }

  return (
    <div>
      <AppBar/>
        <div className='pro_view'>
          <div  data-aos="zoom-in">
            <img className='pro_img' src={imgurl} width={350} alt="" />
          </div>
          <div className='pro_details_view'>
            <div>
              <h4>{proname}</h4>
            </div>
            <div>
              <div class="rating">
                <input value="5" name="rating" id="star5" type="radio"/>
                <label for="star5"></label>
                <input value="4" name="rating" id="star4" type="radio"/>
                <label for="star4"></label>
                <input value="3" name="rating" id="star3" type="radio"/>
                <label for="star3"></label>
                <input value="2" name="rating" id="star2" type="radio"/>
                <label for="star2"></label>
                <input value="1" name="rating" id="star1" type="radio"/>
                <label for="star1"></label>
              </div>
            </div>
            <div style={{display:"flex", flexDirection:"row"}}>
              <h4 style={{color:"#ffc506"}}>₹ {prorate}.00</h4>
            </div>
            <div>
              <div>
                {desc}
              </div>
            </div>
            &nbsp;
            <form onSubmit={InsertCart}>
            <div className='day_input'>
              <h5>How many days?</h5>
              <input type="number" required={true} placeholder='Required Days' onChange={(e)=>setDays(e.target.value)}
              style={{border:"1.9px solid rgba(0, 0, 0, 0.707)", width:"50%"}}
              disabled={hide}
              />
            </div>
            &nbsp;
            <div>
              <p>
                <button type='submit' class="cssbuttons-io-button" hidden={hide}>
                  Get now
                  <div class="icon">
                    <i class="bi bi-cart"></i>
                  </div>
                </button>
                <p hidden={!hide} style={{fontWeight:"bold",textDecoration:'underline'}}>Please! SignIn to add this product to your Cart!</p>
              </p>
            </div>
            </form>
            <div style={{fontWeight:"bold"}}>
              Availability: &nbsp;{avail} products in stock
            </div>
            <div style={{fontWeight:"bold"}}>
              Category:&nbsp;&nbsp;{category}
            </div>
          </div>
        </div>
        <div className='overview'>
          <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
            style={{fontSize:"20px",fontWeight:"bold"}}
          >
            <Tab eventKey="home" title="Overview">
              {overview}
            </Tab>
          </Tabs>
        </div>&nbsp;
        <Modal show={show} onHide={handleClose} backdrop="static" contentClassName='modal-bg'>
                    <Modal.Header closeButton>
                      <Modal.Title>Add to Cart</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>You have added this product to your cart and now you can checkout that in cart!
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="warning" onClick={()=>navigate('/AllProducts')}>
                        Ok
                      </Button>
                    </Modal.Footer>
                  </Modal>
        <Footer/>
    </div>
  )
}
