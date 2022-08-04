import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = () => {
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    {/* <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/signin'>Sign In</Link></li>
                        </ul>
                    </div> */}
                    <Link className="btn btn-ghost normal-case text-xl" to="/">Bulk Email</Link>
                </div>
                <div className="navbar-end">
                    <Link className='btn btn-ghost' to='/signin'>Sign In</Link>
                    <Link className='btn btn-primary' to='/signup'>Sign Up</Link>
                    <Link className='btn btn-primary' to='/dashboard'>Dashboard</Link>
                </div>
            </div>
        </div>
    );
};

export default HeaderNav;