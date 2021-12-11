import { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import classes from './AuthForm.module.css';

const AuthForm = () => {
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState (false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    let url
    if (isLogin){
      url = 'http://localhost:8080/user/name?userName='+enteredEmail;
    } else {
      url = 'http://localhost:8080/user/name?userName='+enteredEmail;
    }
    fetch(url,
        {
          method: 'GET',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json'
          }
        }
    ).then(res => res.json()).then(data => console.log(data));
    //  setIsLoading(false);
   //  if (res.ok) {
   //    return res.json();
   //    //do something
   //  } else {
   //    return res.json().then(data => {
   //      let errorMessage = 'Authentication failed!';
   //      if (data && data.error && data.error.message) {
   //        errorMessage = data.error.message;
   //      }
   //      throw new Error(errorMessage)
   //    });
   //  }
   // }).then(data => {
   //    // const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000));
   //    // authCtx.login(data.idToken, expirationTime.toISOString());
   //    console.log(data);
   //    navigate('/');
   // })
   // .catch((err) => {
   //  alert(err.message);
   // });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit = {submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your UserName</label>
          <input type='text' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Sending request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
