import React from 'react';

export default function CheckOut() {
  return (
    <center>
        <div className='payment_view' style={{fontFamily:"Montserrat, sans-serif"}}>
            <div>
                <div class="form-container2" style={{backgroundColor:"#ffc400"}} tabindex="0">
                    <div class="form-container__block">
                        <div class="form-container__header">
                        <p style={{fontWeight:"700",fontSize:"20px"}}><u>Order Summary</u></p>
                        <form class="form-container__form" style={{gap:"1px"}}>
                            <p style={{fontWeight:"500",textAlign:"initial"}}><b style={{}}>Subtotal:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$63.00-</p>
                            <p style={{fontWeight:"500",textAlign:"initial"}}><b>Shipping Address:</b>&nbsp;&nbsp;<u>No 7, Karpaga Vinayagar Nagar,Bus stop, Othakalmandapam</u></p>
                            <p style={{fontWeight:"500",textAlign:"initial"}}><b>shipping Fees:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FREE</p>
                            <p style={{fontWeight:"500",textAlign:"initial"}}><b>Sales Tax:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$24.00</p>
                            <h4 style={{border:"1px solid black",backgroundColor:"black",color:"white",borderRadius:"5px"}}>Order Total:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $87.00</h4>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
             <div>
            </div>
            <div class="form-container2" style={{backgroundColor:"#ffc400"}} tabindex="0">
                    <div class="form-container__block">
                        <div class="form-container__header">
                        <p style={{fontWeight:"700",fontSize:"20px"}}><u>Payment Options</u></p>
                        <form class="form-container__form" style={{gap:"1px"}}>

                        <div class="form-container__register-buttons">
                        <button class="form-container__sign"><a href="/" style={{textDecoration:"none",color:"white"}}>Cancel</a></button>
                        </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        <div>
        </div>
    </center>
  )
}
