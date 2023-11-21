import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (

  <div className="container shadow-lg ">
  
  <h1 className='text-center'>Login Form</h1>
  <hr/>
    <div className="row d-flex mx-auto my-auto bg-warning">
        <div className="col">
        <form>
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" placeholder='Email' id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label for="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" placeholder='Password' id="exampleInputPassword1"/>
    </div>
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  <br/>
  <div className='text-center'>
  <Link className='text-center' to="/SignUp">/SignUp</Link>

  </div>


        </div>
    </div>
  </div>
  )
}

export default Login