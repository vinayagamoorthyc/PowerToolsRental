import React from 'react';
import { Link, useParams } from 'react-router-dom';
import "../payments/CheckOut.css";
import phonepe from "../asset/phonepe-1.svg";
import toast, {Toaster} from "react-hot-toast";

export default function CheckOut() {
    const {subtotal} = useParams();
    const total = parseInt(subtotal)+24;
  return (
    <center>
        <div className='payment_view' style={{fontFamily:"Montserrat, sans-serif",paddingTop:"20px"}}>
            <div>
                <div class="form-container2" style={{backgroundColor:"#ffc400"}} tabindex="0">
                    <div class="form-container__block">
                        <div class="form-container__header">
                        <p style={{fontWeight:"700",fontSize:"20px"}}><u>Order Summary</u></p>
                        <form class="form-container__form" style={{gap:"1px"}}>
                            <p style={{fontWeight:"500",textAlign:"initial"}}><b style={{}}>Subtotal:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹ {subtotal}.00</p>
                            <p style={{fontWeight:"500",textAlign:"initial"}}><b>Shipping Address:</b>&nbsp;&nbsp;<u>No 7, Karpaga Vinayagar Nagar,Bus stop, Othakalmandapam</u></p>
                            <p style={{fontWeight:"500",textAlign:"initial"}}><b>shipping Fees:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FREE</p>
                            <p style={{fontWeight:"500",textAlign:"initial"}}><b>Sales Tax:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹ 24.00</p>
                            <h4 style={{border:"1px solid black",backgroundColor:"black",color:"white",borderRadius:"5px"}}>Order Total:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ₹ {total}</h4>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
             <div>
            </div>
            &nbsp;
            <div class="form-container2" style={{backgroundColor:"#ffc400"}} tabindex="0">
                    <div class="form-container__block">
                        <div class="form-container__header">
                        <p style={{fontWeight:"700",fontSize:"20px"}}><u>Payment Options</u></p>
                        <form class="form-container__form" style={{gap:"1px"}}>

                        <div class="payment--options">
                                    <button name="Paytm" type="button" onClick={()=>toast.success('Order was Placed')}> {/* Paytm */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0"
                                        y="0"
                                        enableBackground="new 0 0 122.88 38.52"
                                        version="1.1"
                                        viewBox="0 0 122.88 38.52"
                                        xmlSpace="preserve"
                                        >
                                        <path fill='#00BAF2'
                                            d="M122.47 11.36c-1.12-3.19-4.16-5.48-7.72-5.48h-.08c-2.32 0-4.41.97-5.9 2.52a8.16 8.16 0 00-5.9-2.52h-.07c-2.04 0-3.91.75-5.34 1.98v-.62c-.05-.63-.56-1.12-1.2-1.12h-5.48c-.67 0-1.21.54-1.21 1.21v29.74c0 .67.54 1.21 1.21 1.21h5.48a1.2 1.2 0 001.19-1.04V15.89c0-.08 0-.14.01-.21.09-.95.79-1.74 1.89-1.83h1.01c.46.04.85.2 1.15.45.48.38.74.96.74 1.6l.02 21.24c0 .67.54 1.22 1.21 1.22h5.48a1.2 1.2 0 001.2-1.15V15.88c0-.7.32-1.34.89-1.71.28-.18.62-.3 1.01-.34h1.01c1.19.1 1.9 1 1.9 2.05l.02 21.22c0 .67.54 1.21 1.21 1.21h5.48c.64 0 1.17-.5 1.21-1.13V13.91c-.03-1.31-.2-1.92-.42-2.55zM85.39 6.2h-3.13V1.12 1.1A1.105 1.105 0 0080.94.02c-3.47.95-2.78 5.76-9.12 6.17h-.61c-.09 0-.18.01-.27.03h-.01.01c-.53.13-.94.61-.94 1.19v5.48c0 .67.54 1.21 1.21 1.21h3.3l-.01 23.22c0 .66.54 1.2 1.2 1.2h5.42c.66 0 1.2-.54 1.2-1.2V14.1h3.07c.66 0 1.21-.55 1.21-1.21V7.41c0-.67-.54-1.21-1.21-1.21z"
                                            className="st1"
                                        ></path>
                                        <path fill='#20336B'
                                            d="M65.69 6.2h-5.48c-.66 0-1.21.54-1.21 1.21v11.33c-.01.7-.58 1.26-1.28 1.26h-2.29c-.71 0-1.29-.57-1.29-1.28l-.02-11.31c0-.67-.54-1.21-1.21-1.21h-5.48c-.67 0-1.21.54-1.21 1.21v12.41c0 4.71 3.36 8.08 8.08 8.08 0 0 3.54 0 3.65.02.64.07 1.13.61 1.13 1.27 0 .65-.48 1.19-1.12 1.27-.03 0-.06.01-.09.02l-8.01.03c-.67 0-1.21.54-1.21 1.21v5.47c0 .67.54 1.21 1.21 1.21h8.95c4.72 0 8.08-3.36 8.08-8.07V7.41c.01-.67-.53-1.21-1.2-1.21zm-31.16.03h-7.6c-.67 0-1.22.51-1.22 1.13v5.14c0 .66.58 1.21 1.29 1.21h7.24c.57.09 1.02.51 1.09 1.16v.71c-.06.62-.51 1.07-1.06 1.12h-3.58c-4.77 0-8.16 3.17-8.16 7.61v6.37c0 4.42 2.92 7.56 7.65 7.56h9.93c1.78 0 3.23-1.35 3.23-3.01V14.45c0-5.04-2.6-8.22-8.81-8.22zm.87 22.86v.86c0 .07-.01.14-.02.2s-.03.12-.05.18c-.17.48-.65.83-1.22.83h-2.28c-.71 0-1.29-.54-1.29-1.21v-1.03V25.26c0-.66.58-1.2 1.29-1.2h2.28c.71 0 1.29.54 1.29 1.21v3.82zM13.16 6.19H1.19C.53 6.19 0 6.73 0 7.38V37.14c0 .66.49 1.2 1.11 1.21h5.58c.67 0 1.21-.54 1.21-1.21l.02-8.32h5.24c4.38 0 7.44-3.04 7.44-7.45v-7.72c0-4.4-3.06-7.46-7.44-7.46zm-.48 10.04v3.38c0 .71-.57 1.29-1.28 1.29H7.93v-6.77h3.47c.71 0 1.28.57 1.28 1.28v.82z"
                                            className="st0"
                                        ></path>
                                        </svg>
                                    </button>
                                    <button name="PhonePay" type="button" onClick={()=>toast.success('Order was Placed')}> {/* PhonePay */}
                                        <img src={phonepe} alt="" width={80} />
                                    </button>
                                    <button name="google-pay" type="button" onClick={()=>toast.success('Order was Placed')}> {/* GooglePay */}
                                <svg fill="none" viewBox="0 0 80 39" height="39" width="80" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_134_34)">
                                <path fill="#5F6368" d="M37.8 19.7V29H34.8V6H42.6C44.5 6 46.3001 6.7 47.7001 8C49.1001 9.2 49.8 11 49.8 12.9C49.8 14.8 49.1001 16.5 47.7001 17.8C46.3001 19.1 44.6 19.8 42.6 19.8L37.8 19.7ZM37.8 8.8V16.8H42.8C43.9 16.8 45.0001 16.4 45.7001 15.6C47.3001 14.1 47.3 11.6 45.8 10.1L45.7001 10C44.9001 9.2 43.9 8.7 42.8 8.8H37.8Z"></path>
                                <path fill="#5F6368" d="M56.7001 12.8C58.9001 12.8 60.6001 13.4 61.9001 14.6C63.2001 15.8 63.8 17.4 63.8 19.4V29H61V26.8H60.9001C59.7001 28.6 58 29.5 56 29.5C54.3 29.5 52.8 29 51.6 28C50.5 27 49.8 25.6 49.8 24.1C49.8 22.5 50.4 21.2 51.6 20.2C52.8 19.2 54.5 18.8 56.5 18.8C58.3 18.8 59.7 19.1 60.8 19.8V19.1C60.8 18.1 60.4 17.1 59.6 16.5C58.8 15.8 57.8001 15.4 56.7001 15.4C55.0001 15.4 53.7 16.1 52.8 17.5L50.2001 15.9C51.8001 13.8 53.9001 12.8 56.7001 12.8ZM52.9001 24.2C52.9001 25 53.3001 25.7 53.9001 26.1C54.6001 26.6 55.4001 26.9 56.2001 26.9C57.4001 26.9 58.6 26.4 59.5 25.5C60.5 24.6 61 23.5 61 22.3C60.1 21.6 58.8 21.2 57.1 21.2C55.9 21.2 54.9 21.5 54.1 22.1C53.3 22.6 52.9001 23.3 52.9001 24.2Z"></path>
                                <path fill="#5F6368" d="M80 13.3L70.1 36H67.1L70.8 28.1L64.3 13.4H67.5L72.2 24.7H72.3L76.9 13.4H80V13.3Z"></path>
                                <path fill="#4285F4" d="M25.9 17.7C25.9 16.8 25.8 15.9 25.7 15H13.2V20.1H20.3C20 21.7 19.1 23.2 17.7 24.1V27.4H22C24.5 25.1 25.9 21.7 25.9 17.7Z"></path>
                                <path fill="#34A853" d="M13.1999 30.5999C16.7999 30.5999 19.7999 29.3999 21.9999 27.3999L17.6999 24.0999C16.4999 24.8999 14.9999 25.3999 13.1999 25.3999C9.7999 25.3999 6.7999 23.0999 5.7999 19.8999H1.3999V23.2999C3.6999 27.7999 8.1999 30.5999 13.1999 30.5999Z"></path>
                                <path fill="#FBBC04" d="M5.8001 19.8999C5.2001 18.2999 5.2001 16.4999 5.8001 14.7999V11.3999H1.4001C-0.499902 15.0999 -0.499902 19.4999 1.4001 23.2999L5.8001 19.8999Z"></path>
                                <path fill="#EA4335" d="M13.2 9.39996C15.1 9.39996 16.9 10.1 18.3 11.4L22.1 7.59996C19.7 5.39996 16.5 4.09996 13.3 4.19996C8.3 4.19996 3.7 6.99996 1.5 11.5L5.9 14.9C6.8 11.7 9.8 9.39996 13.2 9.39996Z"></path>
                                </g>
                                <defs>
                                <clipPath id="clip0_134_34">
                                <rect fill="white" height="38.1" width="80"></rect>
                                </clipPath>
                                </defs>
                                </svg>
                                    </button>
                                </div>
                                &nbsp;
                        <div class="form-container__register-buttons">
                        <Link to="/"><button class="form-container__sign">Cancel</button></Link>
                        </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        <div>
        </div>
        <Toaster
        position='bottom-center'
        />
    </center>
  )
}
