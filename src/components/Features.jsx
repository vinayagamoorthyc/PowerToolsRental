import React from 'react'
import ".//Features.css";
import 'typeface-montserrat';

export default function Features() {
  return (
    <center>
      <div className='feature' id='feature'>
        <div className='view'>
            <div>
                <h5><i class="bi bi-hourglass-split"></i> &nbsp;24X7 Support</h5>
                <p>Dedicated support</p>
            </div>
            <div>
                <h5><i class="bi bi-credit-card-fill"></i> &nbsp;Secure Payment</h5>
                <p>100% secure payment</p>
            </div>
            <div>
                <h5><i class="bi bi-box-seam-fill"></i> &nbsp;Return Policy</h5>
                <p>If goods have problems</p>
            </div>
            <div>
                <h5><i class="bi bi-truck"></i> &nbsp;Free Delivery</h5>
                <p>For all goods over $5</p>
            </div>
        </div>
      </div>
    </center>
  )
}
