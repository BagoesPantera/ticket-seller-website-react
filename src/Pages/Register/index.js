import React from 'react'
import { NavLink } from 'react-router-dom'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

const Register = (props) => {

    //Getting props from routes
    const {email, setEmail, username, setUname, password, setPassword, user, setUser,handleRegister,submitUser, hasAccount, setHasAccount, emailError, passwordError} = props;

    //Restrict the page
    if(user){
        return <Redirect to="/"></Redirect>
    }

    return (
        <div className="flex min-h-screen bg-gray-100 justify-center items-center">
            <div className="w-full lg:w-8/12">
                <div className="bg-white px-16 py-12 min-h-screen lg:min-h-0 shadow-md rounded-lg ">
                    <div className="flex text-red-500 font-bold text-xl justify-center mb-12">
                        LOGO
                    </div>
                    <div className="font-bold text-xl bg-gradient-to-l from-rose-600 to-red-400 inline text-transparent bg-clip-text">
                        Ayo Buat Akun
                    </div>
                    <div className="flex flex-col mt-4">
                        <form action="">
                            <div className="mb-5">
                                <label htmlFor="username" className="block mb-2 text-sm font-semibold text-gray-500">Username</label>
                                <input className=" bg-white text-sm font-semibold text-gray-400 focus:text-black hover:bg-gray-100 w-full border shadow-sm focus:border-red-500 focus:bg-white focus:ring focus:ring-red-100 transition duration-200 rounded-md h-10 focus:outline-none px-3" type="username" placeholder="username" autoFocus required value={username} onChange={(e)=> setUname(e.target.value)} />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-500">Email</label>
                                <input className=" bg-white text-sm font-semibold text-gray-400 focus:text-black hover:bg-gray-100 w-full border shadow-sm focus:border-red-500 focus:bg-white focus:ring focus:ring-red-100 transition duration-200 rounded-md h-10 focus:outline-none px-3" type="email" placeholder="email" required value={email} onChange={(e)=> setEmail(e.target.value)} />
                                <p>{emailError}</p>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:justify-between">
                                <div className="mb-5 lg:w-5/12">
                                    <label htmlFor="password" className="block mb-2 text-sm font-semibold text-gray-500">Kata sandi</label>
                                    <input className="bg-white text-sm font-semibold text-gray-400 focus:text-black hover:bg-gray-100 w-full border shadow-sm focus:border-red-500 focus:bg-white focus:ring focus:ring-red-100 transition duration-200 rounded-md h-10 focus:outline-none px-3" type="password" placeholder="kata sandi" required value={password} onChange={(e)=> setPassword(e.target.value)}/>
                                    <p>{passwordError}</p>
                                </div>
                                <div className="mb-5 lg:w-5/12">
                                    <label htmlFor="password" className="block mb-2 text-sm font-semibold text-gray-500">Konfirmasi kata sandi</label>
                                    <input className="bg-white text-sm font-semibold text-gray-400 focus:text-black hover:bg-gray-100 w-full border shadow-sm focus:border-red-500 focus:bg-white focus:ring focus:ring-red-100 transition duration-200 rounded-md h-10 focus:outline-none px-3" type="password" placeholder="konfirmasi kata sandi" />
                                </div>
                            </div>
                        </form>
                        <div className="flex justify-center mt-4">
                            <button className="w-full px-4 py-2 font-semibold bg-gradient-to-tr from-rose-600 to-red-500 text-white rounded-md focus:outline-none border focus:border-red-300 focus:ring focus:ring-red-100" onClick={handleRegister}>
                                DAFTAR
                            </button>
                        </div>
                        <div className="flex flex-row mt-8 justify-center">
                            <a className="text-gray-500 font-semibold text-sm" >
                                Sudah punya akun?
                            </a>
                            <NavLink to="/login" className="text-red-400 font-semibold text-sm ml-2" >
                                Login lah
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
