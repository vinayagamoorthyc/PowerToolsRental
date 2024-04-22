import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/esm/Table'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function Users() {
    const [users, setUsers]=useState([]);
    const userid = window.localStorage.getItem("userid");
    const filteredUsers=users.filter((e)=>e._id!==userid);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [deleteuserid,setDeleteuserid]=useState();

    const [hide,setHide]=useState(true);
    const token = window.localStorage.getItem("token");

    useEffect(()=>{
        axios.get("https://powerlendbackend.onrender.com/getUserDetails")
        .then(e=>setUsers(e.data))
        .catch(err=>console.log(err));
        if(token!=null){
          setHide(false);
        }else{
          setHide(true);
        }
    }, []);
    const handleDelete=()=>{
      axios.delete("https://powerlendbackend.onrender.com/deleteUser/"+deleteuserid)
      .then(()=>window.location.reload())
      .catch(err=>console.log(err));
    }
  return (
    <div hidden={hide}>
      <div style={{padding:"5px"}}>
            <Link to="/AdminPortal"><button class="Back_Btn">
            <Link to='/AdminPortal' class="back_icon"><svg class="svg-icon" viewBox="0 0 20 20">
                                <path fill="black" d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
                            </svg></Link>
            <Link to='/AdminPortal' class="back_text">Back</Link>
            </button></Link>
            <h3 style={{textAlign:"center",fontFamily:'Montserrat, sans-serif',fontWeight:"bolder",marginTop:"-40px"}}>User Management</h3>
            <hr />
        </div>
        <div>
          <div className="container mt-4" ><center>
          <Table striped bordered hover variant="light" style={{width:"100%",fontFamily:'Montserrat, sans-serif',textAlign:"center"}}>
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>User Email</th>
                  <th>Phone Number</th>
                  <th>Shipping Address</th>
                  <th>Orders Placed</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  filteredUsers.map(e=>{
                   return <tr>
                            <td>{e.username}</td>
                            <td>{e.email}</td>
                            <td>{e.phone}</td>
                            <td>{e.address}</td>
                            <td>{e.orders}</td>
                            <td><button class="btn btn-danger" onClick={()=>{
                              handleShow();
                              setDeleteuserid(e._id);
                            }}>Remove</button></td>
                          </tr>
                  })
                }
              </tbody>
            </Table>
            </center>
          </div>
        </div>
        <Modal show={show} onHide={handleClose} backdrop="static" contentClassName='modal-bg'>
                    <Modal.Header closeButton>
                      <Modal.Title>Remove User!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure to permanently remove this reported user?
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="dark" onClick={handleClose}>
                        Cancel
                      </Button>
                      <Button variant="danger" onClick={()=>handleDelete()}>
                        Remove
                      </Button>
                    </Modal.Footer>
                  </Modal>
    </div>
  )
}
