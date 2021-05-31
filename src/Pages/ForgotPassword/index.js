import React from 'react'
import { NavLink } from 'react-router-dom'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

const ForgotPassword = (props) => {

    const {email, setEmail, emailError, handleForgotPass,ForgotpassError} = props;

    return (
        <div>

            <form action="">
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-500">Email</label>
                    <input className=" bg-white text-sm font-semibold text-gray-400 focus:text-black hover:bg-gray-100 w-full border shadow-sm focus:bg-white focus:border-red-500 focus:ring focus:ring-red-100 transition duration-200 rounded-md h-10 focus:outline-none px-3" type="email" placeholder="email" autoFocus required value={email} onChange={(e)=> setEmail(e.target.value)} />
                    <p>{ForgotpassError}</p>
                </div>
            </form>
            <div className="flex justify-center mt-6">
                <button className="w-full px-4 py-2 font-semibold bg-gradient-to-tr from-rose-600 to-red-500 text-white rounded-md focus:outline-none border focus:border-red-300 focus:ring focus:ring-red-100" onClick={handleForgotPass}>
                    LOGIN
                </button>
            </div>
        </div>
    )
}

export default ForgotPassword