// import React from 'react';
// import './Login.css'


// function Login() {
//     return (
//         <div className="container">

            
// <div className="container form my-5">
//   <div className="form__box">
//     <div className="form__left">
//       <div className="form__padding"><img class="form__image" src="https://i.pinimg.com/736x/74/bd/bd/74bdbd42fabc616a1837e4854329618f.jpg"/></div>
//     </div>
//     <div className="form__right">
//       <div className="form__padding-right">
//         <form>
//           <h1 className="form__title">Member Login</h1>
//           <input className="form__email" type="text" placeholder="Email"/>
//           <input className="form__password" type="text" placeholder="******"/>
//           <input className="form__submit-btn" type="submit" value="Login"/>
//         </form><span>Forgot<a className="form__link" href="#">Username</a><a>/</a><a class="form__link" href="#">Password</a></span>
//         <p> <a className="form__link" href="Login">Create your account</a></p>
//       </div>
//     </div>
//   </div>
// </div>
//         </div>

//     );
// }

// export default Login;

import React, { Component } from 'react'
import './Login.css'

export default class Login extends Component {
  render() {
    return (
      <div className="container">
      <div className="container inner_container my-5">
      <form>
        <h3>Login</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control" id='login_email'
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control" id='login_password'
            placeholder="Enter password"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-light">
            Login
          </button>
        </div>
        <p className="forgot-password text-right">
          Don't have an account? <a href="/signup">sign up?</a>
        </p>
      </form>
      </div>
      </div>
    )
  }
}