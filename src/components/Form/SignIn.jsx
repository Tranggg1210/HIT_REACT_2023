import { ErrorMessage, Field, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
    const navigate = useNavigate();
    return (
        <Formik
            initialValues={{
                Username: ""
            }}
            validationSchema={
                Yup.object({
                    Username: Yup.string()
                        .required("Username is not be empty!")
            })}
            onSubmit={
                async (values) => {
                    try {
                        const result = await axios.post('https://test-react.agiletech.vn/auth/login', values);
                        // console.log(result);

                        if(!result.data.code !== 401)
                        {
                            alert('Successfully');
                            navigate('/HIT_REACT_2023/homesignin');
                        }else{
                            alert('Username does not exist');
                        }
                    } catch (error) {
                        console.log(error);
                    }
                }
            }
        >
            {({
                values,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit}>
                    <div className='signIn' >
                        <div>
                            <div style={{ display: "flex", marginBottom: 60, marginTop: 60 }}>
                                <div className="header--top__item1"></div>
                                <div className="header--top__item2"></div>
                            </div>
                            <h1>
                                Sign In
                            </h1> <br />
                            <div style={{ display: "flex", justifyContent: "center", width: 100 + "%" }}>
                                <div style={{ width: 40 + "%" }}>
                                    <label htmlFor="Username">Username</label> <br />
                                    <Field 
                                        type="text"
                                        name='Username'
                                        className='input' /> 
                                    <div style={{color:"red", fontSize: 18, marginTop: 8}}>
                                        <ErrorMessage name='Username'></ErrorMessage>
                                    </div>
                                        <br /><br /> <br />
                                    <button type="submit" className='btn'>Sign In</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            )}
            
        </Formik>
    );
};

export default SignIn;