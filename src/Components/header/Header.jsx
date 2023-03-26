import '../header/Header.scss';
import imgHeader from '../../img/header1.png';
const Header = () => {
    return (
        <div className="header container">
            <div className="header--top">
                <div className="header--top__item1"></div>
                <div className="header--top__item2"></div>
            </div>
            <div className="header--bottom">
                <div className="header--bottom__item1">
                    <h1>
                        Save your data storage here.
                    </h1>
                    <p>
                        Data Warehouse is a data storage area that has been
                        tested for security, so you can store your data here
                        safely but not be afraid of being stolen by others.
                    </p>
                    <button>Learn more</button>
                </div>
                <div className="header--bottom__item2">
                    <img src={imgHeader} alt="Đây là ảnh phần header" />
                </div>
            </div>
        </div>
    )
}

export default Header;