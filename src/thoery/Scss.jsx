import styled from 'styled-components';
const MainContent = styled.div`
    width: 500px;
    height: 500px;
    background-color: #000;
`
const Scss = () => {
    return (
        // <div className="main">
        //     <div className="cha">
        //         cha
        //         <div className="cha_sub">
        //             con
        //             <div className="cha_sub-sub2">
        //                 cháu
        //             </div>
        //         </div>
        //     </div>
        //     <div className="me">
        //         me
        //     </div>
        // </div>
        <div className="flex bg-blue-300 justify-center items-center w-full h-full">
            <button className="w-28  rounded-2xl bg-pink-600">Button</button>
        </div>
    )
}

export default Scss;