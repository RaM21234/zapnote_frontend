import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BiLogOut, BiSolidZap } from 'react-icons/bi';

import {
    Link, useLocation
} from 'react-router-dom';



const Navbar = () => {
    let navigate = useNavigate();
    const location = useLocation();
    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }
    return (
        <>

            <div class="navbar bg-base-100 shadow-lg">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>

                        </label>
                        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link className={` nav-link ${location.pathname === "/land" ? "active" : ""}`} aria-current="page" to="/land">Home</Link>
                            </li>
                            <li>
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Note</Link>
                            </li>
                            <li>
                                <Link className={`mx-2 nav-link ${location.pathname === "/calender" ? "active" : ""}`} aria-current="page" to="/calender">Calender</Link>
                            </li>
                            <li>
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} aria-current="page" to="/about">About</Link>
                            </li>
                        </ul>
                    </div>

                    <BiSolidZap size={25} />
                    <Link className="text-xl m-2 font-bold" to="/land">ZapNote</Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal px-1">
                        <li>
                            <Link className={` mx-2 nav-link ${location.pathname === "/land" ? "active" : ""}`} aria-current="page" to="/land">Home</Link>
                        </li>
                        <li>
                            <Link className={`mx-2 nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Note</Link>
                        </li>
                        <li>
                            <Link className={`mx-2 nav-link ${location.pathname === "/calender" ? "active" : ""}`} aria-current="page" to="/calender">Calender</Link>
                        </li>
                        <li>
                            <Link className={`mx-2 nav-link ${location.pathname === "/about" ? "active" : ""}`} aria-current="page" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
                <div class="navbar-end">
                    {!localStorage.getItem('token') ? <div>
                        <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
                        <Link className="btn btn-primary mx-2" to="/signup" role="button">Signup</Link></div>
                        : <div>

                            <button type="button" className="btn btn-primary mx-5" onClick={handleLogout}><BiLogOut size={23} />Logout</button>

                        </div>}
                </div>
            </div>


        </>
    )
}

export default Navbar
