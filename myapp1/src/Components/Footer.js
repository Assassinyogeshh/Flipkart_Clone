import React from 'react'
import '../Components Css/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer>
                <div className="footerDetails">
                    <div className="firstDetails">
                        <ul className="about_details">
                            <span className="gray_Headings">ABOUT</span>

                            <li>Contact Us</li>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Flipkart Stories</li>
                            <li>Press</li>
                            <li>Flipkart Wholesale</li>
                            <li>Corporate Information</li>

                        </ul>
                        <ul className="help_details">
                            <span className="gray_Headings">HELP</span>
                            <li>Payments</li>
                            <li>Shipping</li>
                            <li>Cancellation & Returns</li>
                            <li>FAQ</li>
                            <li>Report Infringement</li>
                        </ul>
                        <ul className="consumer_policy">
                            <span className="gray_Headings">CONSUMER POLICY</span>
                            <li>Cancellation & Returns</li>
                            <li>Terms Of Use</li>
                            <li>Security</li>
                            <li>Privacy</li>
                            <li>Sitemap</li>
                            <li>Grievance Redressal</li>
                            <li>EPR Compliance</li>
                        </ul>
                        <ul className="social">
                            <span className="gray_Headings">Social</span>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Youtube</li>
                        </ul>
                    </div>
                    <div className="secondDetails">
                        <div className="footer_email">

                            <span className="gray_Headings">Mail Us:</span>
                            <p>Flipkart Internet Private Limited,

                                Buildings Alyssa, Begonia &

                                Clove Embassy Tech Village,

                                Outer Ring Road, Devarabeesanahalli Village,

                                Bengaluru, 560103,

                                Karnataka, India</p>
                        </div>

                        <div className="footer_address">

                            <span className="gray_Headings">
                                Registered Office Address:
                            </span>
                            <p>Flipkart Internet Private Limited,

                                Buildings Alyssa, Begonia &

                                Clove Embassy Tech Village,

                                Outer Ring Road, Devarabeesanahalli Village,

                                Bengaluru, 560103,

                                Karnataka, India

                                CIN : U51109KA2012PTC066107

                                Telephone: <p style={{color:'#2874f0',cursor:'pointer'}}>044-45614700</p></p>
                        </div>
                    </div>
                    <div className="thirdDetails">
                        <ul className="footer_with_img">
                            <li>
                                <img src="/footer_img/download (1).svg" alt="" />
                                <p>Become a Seller</p>
                            </li>
                            <li> <img src="/footer_img/download (2).svg" alt="" />
                                <p>Advertise</p>
                            </li>
                            <li> <img src="/footer_img/download.svg" alt="" />
                                <p>Gift Cards</p>
                            </li>
                            <li> <img src="/footer_img/download (3).svg" alt="" />
                                <p>Help Center</p></li>
                            <li><p>© 2007-2023 Flipkart.com</p></li>
                            <li id='paymnt_img'> <img src="/footer_img/payment.svg" alt="" /></li>
                        </ul>

                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer
