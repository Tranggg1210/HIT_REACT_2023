import FeaturesItem from "../FeaturesList/FeaturesItem";
import Toggle from "../Toggle/Toggle";
import {FeaturesData} from "../data.js";

const Features = () => {
    return (
        <div className="features" >
            <div className="features-top">
                <h1 className="features-title text-white">
                    Features
                </h1>
                <p className="features-describle text-white">
                    Some of the features and advantages that we
                    provide for those of you <br /> who store data in this
                    Data Warehouse.
                </p>
                <Toggle />
            </div>
            <div className="features-bottom">
                <div className="features-container">
                    {FeaturesData.map((item) =>
                        <FeaturesItem background={ item.background}  image={item.image} title={item.title} content={item.content}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Features;

