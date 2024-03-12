export default function Footer(){
    return(
        <>
            <div id="footer">
                <div id="footer-links">
                    <div className="links">
                        <h3>CONTACT INFO</h3>
                        <p>(+91) 7877061041</p>
                        <a href="#">sales@beautybebo.com</a>
                        <p>Open time: 10:00AM - 7:00PM</p>
                        <div id="social-logo">
                            <a href="#">
                            <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/facebook-new.png" alt="facebook-new"/>
                            </a>
                            <a href="#">
                            <img width="30" height="30" src="https://img.icons8.com/color/144/instagram-new--v1.png" alt="instagram-new--v1"/>
                            </a>
                        </div>
                    </div>
                    <div className="links">
                        <h3>QUICK LINKS</h3>
                        <a href="#">About us</a>
                        <a href="#">Contact us</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Return and Refund Policy</a>
                        <a href="#">Shipping Policy</a>
                    </div>
                    <div className="links">
                        <h3>CUSTOMER INFO</h3>
                        <a href="#">My Account</a>
                        <a href="#">Track Your Order</a>
                        <a href="#">Order Returns</a>
                        <a href="#">Wishlists</a>
                        <a href="#">News & Events</a>
                        <a href="#">FAQ</a>
                    </div>
                    <div className="links">
                        <h3>CATEGORIES</h3>
                        <a href="#">Makeup</a>
                        <a href="#">Skin</a>
                        <a href="#">Hair</a>
                        <a href="#">Personal Care</a>
                        <a href="#">Mom & Baby Care</a>
                        <a href="#">Fragrance</a>
                        <a href="#">Ayurveda</a>
                    </div>
                </div>
                <hr />
                <div id="bottom-footer">
                    <div id="left-footer">
                        <img src="https://www.beautybebo.com/pub/media/wysiwyg/payment.png" alt="" />
                    </div>
                    <div id="right-footer">
                        <p>Signup For Newsletter</p>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Signup For Newsletter" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}