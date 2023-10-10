import React from 'react';
import './Login.css'
// import {loginBtn, signupBtn, signupLink} from './LoginFunction'

function Login() {
    return (
        <div className="container">

            
<div className="container form my-5">
  <div className="form__box">
    <div className="form__left">
      <div className="form__padding"><img class="form__image" src="https://i.pinimg.com/736x/74/bd/bd/74bdbd42fabc616a1837e4854329618f.jpg"/></div>
    </div>
    <div className="form__right">
      <div className="form__padding-right">
        <form>
          <h1 className="form__title">Member Login</h1>
          <input className="form__email" type="text" placeholder="Email"/>
          <input className="form__password" type="text" placeholder="******"/>
          <input className="form__submit-btn" type="submit" value="Login"/>
        </form><span>Forgot<a className="form__link" href="#">Username</a><a>/</a><a class="form__link" href="#">Password</a></span>
        <p> <a className="form__link" href="signup">Create your account</a></p>
      </div>
    </div>
  </div>
</div>
        </div>

    );
}

export default Login;

