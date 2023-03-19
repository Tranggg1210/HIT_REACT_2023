import React, { useState } from "react";
import '../Toggle/Toggle.css';

const Toggle = () => {
    const [show, setShow] = useState(false);
    const handleToggle = () => {
        setShow(!show)
    }
    return (
        <div className={`toggle ${show ? "active" : ""}`} onClick={handleToggle}>
            <div className={`sub-toggle ${show ? "active" : ""}`}>
                <i className={`fa-solid ${show ? "fa-moon" : "fa-sun"}`}></i>
            </div>
        </div>
    )
}

export default Toggle;