import React from 'react';
import Table from 'react-bootstrap/Table';

export default function Reports() {
  return (
    <div>
      <div style={{padding:"5px"}}>
            <a href="/AdminPortal"><button class="Back_Btn">
            <a href='/AdminPortal' class="back_icon"><svg class="svg-icon" viewBox="0 0 20 20">
                                <path fill="black" d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
                            </svg></a>
            <a href='/AdminPortal' class="back_text">Back</a>
            </button></a>
            <h3 style={{textAlign:"center",fontFamily:'Montserrat, sans-serif',fontWeight:"bolder",marginTop:"-40px"}}>Error Reports</h3>
            <hr />
        </div>
        <div>
          <div className="container mt-4" ><center>
          <Table striped bordered hover variant="light" style={{width:"90%",fontFamily:'Montserrat, sans-serif',textAlign:"center"}}>
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>Error Reported</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>Sanjay</td>
                    <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</td>
                  </tr>
                  <tr>
                    <td>Randip Leon</td>
                    <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</td>
                  </tr>
              </tbody>
            </Table>
            </center>
          </div>
        </div>
    </div>
  )
}
