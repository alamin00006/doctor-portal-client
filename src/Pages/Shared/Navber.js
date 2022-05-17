import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navber = () => {

  const logOut = () =>{
    signOut(auth)
    localStorage.removeItem('accessToken')
  }
  const [user, loading, error] = useAuthState(auth);
    const menuver = <>
         <li><Link to ="/">Home</Link></li>
        <li><Link to ="/appointment">Apointment</Link></li>       
         <li><Link to ="/Reviwe">Reviwes</Link></li>
        <li><Link to ="/Contact">Contact</Link></li>
        <li><Link to ="/about">About</Link></li>

        {user && <li><Link to ="/dashboard">Dashboard</Link></li>}
        
        <li>{user? <button 
          onClick={logOut} 
          className="btn btn-active btn-ghost">SignOut</button> : 
          <Link to ="/Login">Login</Link>}</li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {menuver}
      
        
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    {menuver}
    </ul>
  </div>
  <div className="navbar-end">
  <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
  
  </div>
  
</div>
        </div>
    );
};

export default Navber;