import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { useState } from 'react';
import { useFormik } from 'formik';

const Form1 = () => {
    // const [firstname, setFirstname] = useState('');
    // const handleFirstName = (e) => {
    //     // console.log(e.target.value);
    //     setFirstname(e.target.value)
    // }
    // const [lastname, setLastname] = useState('');
    // const handleLastName = (e) => {
    //     // console.log(e.target.value);
    //     setLastname(e.target.value)
    // }
    // const [values, setValues] = useState({
    //     firstname: "",
    //     lastname: "",
    //     hobby: false,
    // })
    // const handleInputChange = (e) => {
    //     e.preventDefault();
    //     setValues({
    //         [e.target.name] : type === "checkbox" ? e.target.checked : e.target.value
    //     })
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(firstname);
        // console.log(lastname)
    } 
    const [errors, setErrors] = useState(false);
    const handleError = (e) => {
        if(e.target.value.length > 10) {
            setErrors(true);
        }else setErrors(false)
    }
    return (
        <form className='px-7 py-8'>
            <label htmlFor="firtname">First Name</label> <br />
            <input 
                type="text"
                name="firstname"
                className='w-full, max-w-[300px] p-5, border
                 border-gray-200 rounded-lg' 
                 placeholder='Enter your first name'
                //  onChange={handleFirstName}
                //  onChange={handleInputChange}
                onChange={handleError}
            />
            <br />
            {errors && errors ? <div className='text-red-700'>Qua 10 ky tu roi</div> 
            : <div></div> }
            <br />
            <label htmlFor="lastname">Last Name</label> <br />
            <input 
                type="text"
                name="lastname"
                className='w-full, max-w-[300px] p-5, border
                 border-gray-200 rounded-lg' 
                 placeholder='Enter your lastname'
                //  onChange={handleInputChange}
                onChange={handleLastName}
            />
            <br />
            <input type="checkbox"
            //  onChange={handleInputChange}
             /> <br />
             <button type='submit' onClick={handleSubmit}>Submit</button>
        </form>
    );
};

export default Form1;