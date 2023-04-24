import React, { useState } from 'react';
import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
const Login = () => {
    return (
        <div>
            <Formik
                initialValues={{
                    Email: "",
                    Password: ""
                }}
                validationSchema={
                    Yup.object({
                        Email: Yup.string()
                            .required("Required!")
                            .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Not an email!"),
                        Password: Yup.string()
                            .required("Required!")
                            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
                            , "Passwords must have a minimum of eight characters: at least one uppercase letter, one lowercase letter, and one number.")
                    })
                }
                onSubmit={
                    async (values) => {
                        try {
                            console.log(values);
                            const result = await axios.post('https://reqres.in/api/login', values)
                            alert('Successfully')
                        } catch (error) {
                            console.log(error);
                            alert('Login fail')
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
                    <form onSubmit={handleSubmit}
                        action="">
                        <div className='login'>
                            <div className="login__elements">
                                <h1>LOGIN</h1>
                                <div className="login__elements--group email">
                                    <label htmlFor="Email">Email</label> <br />
                                    <Field type="email"
                                        size={36}
                                        name='Email'
                                        className='field--style'
                                        placeholder='Nhập email của bạn...'
                                    />

                                    <div className='userErrors'>
                                        <ErrorMessage name='Email'></ErrorMessage>
                                    </div>
                                </div>
                                <div className="login__elements--group password">
                                    <label htmlFor="Password">Password</label> <br />
                                    <Field type="password"
                                        size={36}
                                        name='Password'
                                        placeholder='Nhập password của bạn...'
                                        className='field--style'
                                    />
                                    <div className='userErrors'>
                                        <ErrorMessage name='Password'></ErrorMessage>
                                    </div>
                                </div>
                                <div className="login__elements--group">
                                    <button type='submit'>Submit</button>
                                </div>
                            </div>

                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default Login;