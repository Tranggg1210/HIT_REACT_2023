import React from "react";

const Footer = () => {
    return (
        <div id="footer">
            <div id="footer--top">
                <div className="footer--top--item1 footer--top--item">
                    <h3>ARSHA</h3>
                    <p>
                        A108 Adam Street <br />
                        New York, NY 535022 <br />
                        United States <br /> <br />
                        <strong>Phone: </strong>
                        +1 5589 55488 55 <br />
                        <strong>Email: </strong>
                        info@example.com
                        <br />
                    </p>
                </div>
                <div className="footer--top--item2 footer--top--item">
                    <h4>Useful Links</h4>
                    <ul>
                        <li>
                            <i class="fa-sharp fa-solid fa-chevron-right"></i>
                            <a href="#">
                                Home
                            </a>
                        </li>
                        <li>
                            <i class="fa-sharp fa-solid fa-chevron-right"></i>
                            <a href="#">
                                About us
                            </a>
                        </li>
                        <li>
                            <i class="fa-sharp fa-solid fa-chevron-right"></i>
                            <a href="#">
                                Services
                            </a>
                        </li>
                        <li>
                            <i class="fa-sharp fa-solid fa-chevron-right"></i>
                            <a href="#">
                                Terms of service
                            </a>
                        </li>
                        <li>
                            <i class="fa-sharp fa-solid fa-chevron-right"></i>
                            <a href="#">
                                Privacy policy
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer--top--item2 footer--top--item">
                    <h4>Our Services</h4>
                    <ul>
                        <li>
                            <i class="fa-sharp fa-solid fa-chevron-right"></i>
                            <a href="#">
                                Web Design
                            </a>
                        </li>
                        <li>
                            <i class="fa-sharp fa-solid fa-chevron-right"></i>
                            <a href="#">
                                Web Development
                            </a>
                        </li>
                        <li>
                            <i class="fa-sharp fa-solid fa-chevron-right"></i>
                            <a href="#">
                                Product Management
                            </a>
                        </li>
                        <li>
                            <i class="fa-sharp fa-solid fa-chevron-right"></i>
                            <a href="#">
                                Marketing
                            </a>
                        </li>
                        <li>
                            <i class="fa-sharp fa-solid fa-chevron-right"></i>
                            <a href="#">
                                Graphic Design
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer--top--item3 footer--top--item">
                    <h4>Our Social Networks</h4>
                    <p>
                        Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies
                    </p>
                    <div className="footer__infor">
                        <a href="">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                        <a href="">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="">
                            <i class="fa-brands fa-skype"></i>
                        </a>
                        <a href="">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div id="footer--bottom">
                <div className="footer-container">
                    <div>
                        <div>

                            © Copyright
                        </div>
                        <strong>
                            Arsha
                        </strong>
                        <div>
                            . All Rights Reserved
                        </div>
                    </div>
                    <div>
                        Designed by 
                        <a href="">BootstrapMade</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;