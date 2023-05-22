import React from 'react';
import { useNavigate } from 'react-router-dom';

const dataProfile = [
    {
        id: 1,
        title: "ABC",
        description: "Description",
        tags: "HTML, Css"
    },
    {
        id: 2,
        title: "ABC",
        description: "Description",
        tags: "HTML, Css"
    },
    {
        id: 3,
        title: "ABC",
        description: "Description",
        tags: "HTML, css"
    },
    {
        id: 4,
        title: "ABC",
        description: "Description",
        tags: "HTML, css"
    },
    , {
        id: 5,
        title: "ABC",
        description: "Description",
        tags: "HTML, css"
    }
    , {
        id: 6,
        title: "ABC",
        description: "Description",
        tags: "HTML, css"
    }
    , {
        id: 7,
        title: "ABC",
        description: "Description",
        tags: "HTML, css"
    }
    , {
        id: 8,
        title: "ABC",
        description: "Description",
        tags: "HTML, css"
    },
    {
        id: 9,
        title: "ABC",
        description: "Description",
        tags: "HTML, css"
    },
    {
        id: 10,
        title: "ABC",
        description: "Description",
        tags: "HTML, css"
    }
]

const Profile = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/HIT_REACT_2023/');
    }
    return (
        <div className='profile'>
            <div className='profileLeft'>
                <div onClick={handleBack} style={{ display: "flex", marginBottom: 60, marginTop: 60 }}>
                    <div className="header--top__item1"></div>
                    <div className="header--top__item2"></div>
                </div>
                <p>Posts</p> <br />
                <p>Logout</p>
            </div>
            <div className='profileRight'>
                <div>
                    <button className='btn'
                    >
                        Add new
                    </button>
                    <div>
                        <div className="input"><input type="text" placeholder='Title' /></div>
                        <div className="input">
                            <input type="text" placeholder='Tags' />
                            <i className="fa-solid fa-arrow-down"></i>
                        </div>
                    </div>
                </div>
                <div className="table">
                    <table align='center' cellPadding={16} cellSpacing={16} border={1}>
                        <tr>
                            <td>ID</td>
                            <td>Title</td>
                            <td>Description</td>
                            <td>Tags</td>
                            <td>Actions</td>
                        </tr>
                        {
                            dataProfile.length && dataProfile.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                    <td>{item.tags}</td>
                                    <td>
                                        <i className="fa-solid fa-pen"></i>
                                        <i className="fa-solid fa-trash"></i>
                                    </td>
                                </tr>
                            ))
                        }
                    </table>
                </div> <br />
                <button>Phần phân trang</button>
            </div>
        </div>
    );
};

export default Profile;