import React from 'react';
import { Formik, useFormik } from 'formik';

const Form2 = () => {
    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
      return (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">First Name</label> <br />
          <input
          className='w-full, max-w-[300px] p-5, border
          border-gray-200 rounded-lg' 
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          /> <br />
          <label htmlFor="lastName">Last Name</label> <br />
          <input
          className='w-full, max-w-[300px] p-5, border
          border-gray-200 rounded-lg' 
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          /> <br />
          <label htmlFor="email">Email Address</label>  <br />
          <input
          className='w-full, max-w-[300px] p-5, border
          border-gray-200 rounded-lg' 
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          /> <br />
          <button type="submit">Submit</button>
        </form>
      );
};

export default Form2;