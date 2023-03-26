import '../featuresItem/FeaturesItem.scss'
const FeaturesItem = (props) => {
    return (
        <div className="features-item">
            <img src={props.background} alt="" />
            <div className="card">
                <div className="features-item-img">
                    <img src={props.image} alt="Đây là hình ảnh" />
                </div>
                <div className="features-item-content">
                    <h2>{props.title}</h2>
                    <p>
                        {props.content}
                    </p>
                    <div>
                        <span>Learn more</span>
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesItem;