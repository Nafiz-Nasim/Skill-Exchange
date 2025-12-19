import React from 'react'
import { Link } from 'react-router'

export default function Login() {
  const handleLogin=(event)=>{
    event.preventDefault();
    const form= event.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password);
    


  }
  return (
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
     <form onSubmit={handleLogin}>
       <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name='email'  required/>
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password"  name='password' required/>
          <div><a className="link link-hover">Forgot password?</a>  <Link to="/registration"><p className='text-red-600'> Don't have an account ?</p> </Link></div> 
         
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
     </form>
    </div>
  </div>
</div>
  )
}
