import React from "react";
const Header = () => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            document.querySelector("#header").classList.add("header--scroll");
        }else{
            document.querySelector("#header").classList.remove("header--scroll");
        }
    })
    return (
        <div id="header" >
            <div>
                <div id="brandName">
                    <h1>
                        <a href="#">ARSHA</a>
                    </h1>
                </div>
                <div id="menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Team</a></li>
                        <li className="sub-menu">
                            <a href="#">Drop Down</a>
                            <i class="fa-solid fa-chevron-down"></i>
                            <ul>
                                <li><a href="#">Drop Down 1</a></li>
                                <li>
                                    <a href="#">Deep Drop Down</a>
                                    <i class="fa-solid fa-chevron-right"></i>
                                    <ul>
                                        <li><a href="">Drop Down 1</a></li>
                                        <li><a href="">Drop Down 2</a></li>
                                        <li><a href="">Drop Down 3</a></li>
                                        <li><a href="">Drop Down 4</a></li>
                                        <li><a href="">Drop Down 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Drop Down 2</a></li>
                                <li><a href="#">Drop Down 3</a></li>
                                <li><a href="#">Drop Down 4</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#" className="btn_begin">Get Started</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Header;