import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { SignupValidationSchema } from '../../schemas/index';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    Link
} from "react-router-dom";


const Signup = () => {
    const [loading, setLoading] = useState(false)
    const [signup, setSignup] = useState(false)
    const initialValues = {
        name: '',
        email: '',
        password: '',
        cpassword: '',
    }
    const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: SignupValidationSchema,
        onSubmit: async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://zapnote-backend.onrender.com/api/auth/createuser`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values)
                });
                const json = await response.json();
                console.log(json)
                if (json.success) {
                    //save jwt token 
                    localStorage.setItem('token', json.token)
                    console.log('token received')
                    setSignup(true)
                    navigate("/land")
                    toast.success('Login successfully')
                } else {
                    alert('invalid credentials')
                    toast.error('Login Failed')
                }
            }
            catch (error) {
                console.log(error)
                toast.error('Login Failed')
            }

            finally {
                setLoading(false)
            }
        }
    })
    
    let navigate = useNavigate();

    return (
        <>

            <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
                <div
                    class="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                    <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                        <div>
                            <img
                                src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
                                class="w-32 mx-auto"
                            />
                        </div>
                        <div class="my-8 flex flex-col items-center">
                            <h1 class="text-2xl xl:text-5xl font-extrabold">
                                Sign up
                            </h1>
                            <div class="w-full flex-1 mt-8">
                                <div class="mx-auto max-w-xs">
                                    <form onSubmit={handleSubmit}>

                                        <input
                                            class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                            type="text" id="name" name="name"
                                            placeholder="Username" onChange={handleChange} onBlur={handleBlur} value={values.name}
                                        />
                                        {errors && errors.name && touched.name ? (<span className='text-red-600 pl-1 font-bold'>{errors.name}</span>) : (null)}
                                        <input
                                            class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                            type="email" id="email" name="email"
                                            placeholder="Email" onChange={handleChange} onBlur={handleBlur} value={values.email}
                                        />
                                        {errors && errors.email && touched.email ? (<span className='text-red-600 pl-1 font-bold'>{errors.email}</span>) : (null)}
                                        <input
                                            class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                            type="password" id="password" name="password"  required minLength={5} placeholder="Password" onChange={handleChange} onBlur={handleBlur} value={values.password}
                                        />
                                        {errors && errors.password && touched.password ? (<span className='text-red-600 pl-1 font-bold'>{errors.password}</span>) : (null)}
                                        <input
                                            class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                            type="password" id="cpassword" name="cpassword" required minLength={5} placeholder="Confirm Password" onChange={handleChange} onBlur={handleBlur} value={values.cpassword}
                                        />
                                        {errors && errors.cpassword && touched.cpassword ? (<span className='text-red-600 pl-1 font-bold'>{errors.cpassword}</span>) : (null)}
                                        {
                                            !loading ? (
                                                <button
                                                    class="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none" type="submit" 
                                                >
                                                    <svg
                                                        class="w-6 h-6 -ml-2"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                                        <circle cx="8.5" cy="7" r="4" />
                                                        <path d="M20 8v6M23 11h-6" />
                                                    </svg>
                                                    <span class="ml-3">
                                                        Sign Up
                                                    </span>
                                                </button>
                                            ) : (
                                                <button
                                                    class="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none" type="submit" disabled
                                                >
                                                    <svg
                                                        class="w-6 h-6 -ml-2"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                                        <circle cx="8.5" cy="7" r="4" />
                                                        <path d="M20 8v6M23 11h-6" />
                                                    </svg>
                                                    <span class="ml-3">
                                                        Loading...
                                                    </span>
                                                </button>
                                            )
                                        }
                                     
                                    </form>
                                    <p class="mt-6 text-sm text-gray-600 text-center">
                                        Already have an Account? <Link to='/login' class="text-blue-600 hover:underline" >Login</Link>

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1 bg-indigo-100 text-center hidden lg:flex">
                        <div
                            class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                            style={{ backgroundImage: "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')" }}
                        ></div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Signup
