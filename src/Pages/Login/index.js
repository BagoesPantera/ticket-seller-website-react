import React from 'react'
import { NavLink } from 'react-router-dom'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

const Login = (props) => {

    //Getting the props from routes
    const {user, email, setEmail, password, setPassword, rememberMe, setRM, handleLogin, hasAccount, setHasAccount, emailError, passwordError} = props;

    

    //Restrict the page
    if(user){
        return <Redirect to="/"></Redirect>
    }

    return (
        <div className="flex min-h-screen bg-gray-100 justify-center items-center">
            <div className="w-full lg:w-4/12">
                <div className="bg-white min-h-screen lg:min-h-0 px-16 py-12 shadow-md rounded-lg ">
                    <div className="flex text-red-500 font-bold text-xl justify-center mb-12">
                        LOGO
                    </div>
                    <div className="font-bold text-xl bg-gradient-to-l from-rose-600 to-red-400 inline text-transparent bg-clip-text">
                        Login Kuy
                    </div>
                    <div className="flex flex-col mt-4">
                        <form action="">
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-500">Email</label>
                                <input className=" bg-white text-sm font-semibold text-gray-400 focus:text-black hover:bg-gray-100 w-full border shadow-sm focus:bg-white focus:border-red-500 focus:ring focus:ring-red-100 transition duration-200 rounded-md h-10 focus:outline-none px-3" type="email" placeholder="email" autoFocus required value={email} onChange={(e)=> setEmail(e.target.value)} />
                                <p>{emailError}</p>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="password" className="block mb-2 text-sm font-semibold text-gray-500">Kata sandi</label>
                                <input className="bg-white text-sm font-semibold text-gray-400 focus:text-black hover:bg-gray-100 w-full border shadow-sm focus:bg-white focus:border-red-500 focus:ring focus:ring-red-100 transition duration-200 rounded-md h-10 focus:outline-none px-3" type="password" placeholder="kata sandi" required value={password} onChange={(e)=> setPassword(e.target.value)}/>
                                <p>{passwordError}</p>
                            </div>
                            <div className="flex flex-row items-center mx-1">
                                <input className="mr-4" type="checkbox" onChange={(e) => setRM(e.target.checked)}/>
                                <label htmlFor="checkbox" className="block text-sm font-semibold text-gray-500">Ingat saya</label>
                            </div>
                        </form>
                        <div className="flex justify-center mt-6">
                            <button className="w-full px-4 py-2 font-semibold bg-gradient-to-tr from-rose-600 to-red-500 text-white rounded-md focus:outline-none border focus:border-red-300 focus:ring focus:ring-red-100" onClick={handleLogin}>
                                LOGIN
                            </button>
                        </div>
                        <div className="flex flex-row mt-8">
                            <a  className="text-gray-500 font-semibold text-sm" >
                                Belum punya akun?
                            </a>
                            <NavLink to="/daftar" className="text-red-400 font-semibold text-sm ml-2" >
                                Daftar dulu 
                            </NavLink>
                        </div>
                        <div className="flex flex-row mt-4">
                            <a  className="text-gray-500 font-semibold text-sm" >
                                Lupa kata sandi?
                            </a>
                            <NavLink to="/forgot-password" className="text-red-400 font-semibold text-sm ml-2" >
                                Klik disini 
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
