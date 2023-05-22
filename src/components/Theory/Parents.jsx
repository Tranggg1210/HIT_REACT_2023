import React, { useState } from 'react';
import data from '../mock.json'
import Chird2 from './Chird2';


const Parents = () => {
    const [data1, setData] = useState(data);
    // console.log(data);
    const increaseAgeById = id => {
        const idx = data1.findIndex(item => item.id === id)
        if (idx === -1) return
    
        const newData = [...data1]
        newData[idx].age += 1
    
        setData(newData)
        // saveState('data', newData)
      }
    return (
        <div>
            {
                data1.map( d => (
                    <li key={d.id}>
                        ID: {d.name} - Name: {d.name} - Age: {d.age}
                    </li>
                ))
            }
            <Chird2 data={data1[1]} increaseAgeById={increaseAgeById} />
        </div>
    );
};

export default Parents;