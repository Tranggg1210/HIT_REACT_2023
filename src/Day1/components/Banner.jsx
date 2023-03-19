import React from "react";

const Banner = () => {
    return (

        <div id="banner">
            <div id="banner__content" className="banner__item">
                <div>
                    <h1>
                        Better Solutions For Your Business
                    </h1>
                    <h2>
                        We are team of talented designers making websites with Bootstrap
                    </h2>
                    <div className="btn__banner">
                        <a href="">Get Started</a>
                        <a href="">
                            <i class="fa-regular fa-circle-play"></i>
                            <span>Watch Video</span>
                        </a>
                    </div>
                </div>
            </div>
            <div id="banner__img" className="banner__item">
                <img className="animation__img" src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/hero-img.png" alt="" />
            </div>
        </div>

    )
}

export default Banner;