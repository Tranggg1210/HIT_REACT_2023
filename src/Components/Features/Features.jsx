import FeaturesItem from "../featuresItem/FeaturesItem";
import {FeaturesData} from "../data.js";

const Features = () => {
    return (
        <div className="features" >
            <div className="features-top">
                <h1 className="features-title">
                    Features
                </h1>
                <p className="features-describle">
                    Some of the features and advantages that we
                    provide for those of you <br /> who store data in this
                    Data Warehouse.
                </p>
            </div>
            <div className="features-bottom">
                <div className="features-container">
                    {FeaturesData.map((item) =>
                        <FeaturesItem key={item.id} background={ item.background}  image={item.image} title={item.title} content={item.content}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Features;

