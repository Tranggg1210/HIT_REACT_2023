import man from '../../asset/img/man.png'
const Testimonials = () => {
    return (
        <div className="testimonials">
            <h1>Testimonials</h1>
            <div className="testimonials__item">
                <div className="testimonials__item-top">
                    <div className="testimonials__item-top__img">
                        <img src={man} alt="Đây là hình ảnh người đàn ông" />
                    </div>
                    <div className="testimonials__item-top__content">
                        <h2>John Fang </h2>
                        <a href="#">wordfaang.com</a>
                        <p>
                            Suspendisse ultrices at diam lectus nullam.
                            Nisl, sagittis viverra enim erat tortor ultricies massa turpis. 
                            Arcu pulvinar aenean nam laoreet nulla.
                        </p>
                    </div>
                </div>
            </div>
            <div className="arrow">
               <i className="fa-solid fa-arrow-left"></i>
               <i className="fa-solid fa-arrow-right"></i>
            </div>
            <div className="box">
                <div className="box__item1"></div>
                <div className="box__item2"></div>
                <div className="box__item3"></div>
                <div className="box__item4"></div>
            </div>
        </div>
    )
}
export default Testimonials;