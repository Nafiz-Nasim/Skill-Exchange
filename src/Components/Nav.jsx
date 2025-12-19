import React from 'react'
import { Link } from 'react-router'

export default function Nav() {
  return (
 <section className='w-11/12 mx-auto flex items-center py-10 justify-between'>
      <div className="left flex items-center gap-5">
        <div className="laptop hidden md:flex flex-row items-center justify-center gap-5"> 
            <Link to={'/'}><button className="btn btn-outline">Home</button></Link>
            <Link to={'/myProfile'}><button className="btn btn-outline">My Profile</button></Link>
        </div>
        <div className="navbar-start block md:hidden">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> 
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><Link to={'/'}>Homepage</Link></li>
              <li><Link to={'/myProfile'}>Profile</Link></li>
              <li><a>About</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Logo in the center */}
      <div className="logo">
        <h3 className='md:text-xl font-semibold'>Skill Exchange Platform</h3>
      </div>

      {/* Right side login button */}
      <div className="right">
        <Link to={'/login'}> <button className="btn btn-neutral">Login</button></Link>
        <Link to={'/registration'}> <button className="btn btn-dash">Don't have an account?</button></Link>
       
      </div>
    </section>
    

  )
}
