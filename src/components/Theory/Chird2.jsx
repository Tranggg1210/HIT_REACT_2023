import React, { useContext } from 'react';
import Child1OfChild2 from './Child1OfChild2';

const Chird2 = ({data,increaseAgeById}) => {
    const handleincreaseAgeById = () => {
        if(!data.id) return
        increaseAgeById(data.id)
    }
    return (
        <div>
            <hr />
            <div>Hello I'm Chird 2</div>
            <div>
                My name is: {data.name}
            </div>
            <div>
                My age is: {data.age}
            </div> <br />
            <button onClick={handleincreaseAgeById}>Tang tuoi</button>
            <hr />
            <Child1OfChild2 dataName={data.name}/>
           
        </div>
    );
};

export default Chird2;