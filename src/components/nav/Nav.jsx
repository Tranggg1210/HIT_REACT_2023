import React from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate();
    const accessToken = localStorage.getItem("accessToken");
    const handleClick = () => { navigate('/HIT_REACT_2023/signin') }
    const handleClickProfile = () => { navigate('/HIT_REACT_2023/profile') }
    const handleClickLogout = () => {
        navigate('/HIT_REACT_2023/');
        localStorage.clear();
    }
    return (
        <div className='container'>
            <div className="nav">
                <div style={{ display: "flex" }}>
                    <div className="nav-item1"></div>
                    <div className="nav-item2"></div>
                </div>
                {
                    accessToken ?
                        <div>
                            <button onClick={handleClickProfile} className='btn' style={{ marginRight: 20 }}>
                                Profile
                            </button>
                            <button onClick={handleClickLogout} className='btn' style={{ marginRight: 200 }}>
                                Log out
                            </button>
                        </div>
                        :
                        <div>
                            <button className='btn'
                                style={{ marginRight: 200 }}
                                onClick={handleClick}
                            >
                                Sign in
                            </button>
                        </div>
                }
            </div>
        </div>
    );
};

export default Nav;