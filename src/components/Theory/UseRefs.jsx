import React, { useEffect, useRef } from 'react';

const UseRefs = () => {
    const domRef = useRef(true);
    const countRef = useRef(0);
    useEffect(() => {
        console.log(domRef.current);
    },[])
    const handleClick = () => {
        // console.log(countRef.current);
        countRef.current++;
    }
    return (
        <div>
            <p ref={domRef}>Hello world</p>
            <p>You clicked {countRef.current} </p>
            <button onClick={handleClick}>Click me!</button>
            <div>
                <input type="text" placeholder='Nhập dữ liệu' 
               
                />
            </div>
        </div>
    );
};

export default UseRefs;