import React from 'react'

export default function Registration() {
    const handleRegistration=(event)=>{
    event.preventDefault();
    const form= event.target;
    const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value;
    console.log(name,email,password);
    


  }
  return (
    <section>
      <div className="hero  min-h-screen">
          
  <div className="hero-content flex-col lg:flex-row-reverse w-2xl   ">
    <h4 className='text-4xl text-center mt-10'>Registration now!</h4>
 
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
<form action="" onSubmit={handleRegistration}>      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="name" className="input" placeholder="Name" name='name'  required/>
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name='email' required />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" name='password' required />
          <button className="btn btn-neutral mt-4">Registration</button>
        </fieldset>
      </div></form>
    </div>
  </div>
</div>
    </section>

  )
}
