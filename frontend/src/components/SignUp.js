import React from 'react';
import './SignUp.css'
// import {loginBtn, signupBtn, signupLink} from './LoginFunction'

function SignUp() {
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
          <input className="form__password" type="text" placeholder="create password"/>
          <input className="form__password" type="text" placeholder="confirm password"/>
          <input className="form__submit-btn" type="submit" value="Sign Up"/>
        </form>
        <p> <a className="form__link" href="/login">Already have an account?</a></p>
      </div>
    </div>
  </div>
</div>
        </div>

    );
}

export default SignUp;

