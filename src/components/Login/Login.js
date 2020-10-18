import { Button } from '@material-ui/core';
import React from 'react';
import './Login.scss';
import { auth, provider } from '../../firebase';
import { actionTypes } from '../../context/reducer';
import { useStateValue } from '../../context/StateProvider';

function Login() {
  const [state, dispatch] = useStateValue();
  console.log(state)
  
  const signIn = event => {
    event.preventDefault();
    
    auth.signInWithPopup(provider)
    .then(result => {
      // console.log(result.additionalUserInfo)
      // console.log(result.additionalUserInfo.profile)
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user
      });
    })
    .catch(error => alert(error.message))
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://www.seekpng.com/png/small/280-2802791_moran-facebook-link-facebook-logo-black.png" alt="fb" />
        <img src="https://about.fb.com/wp-content/uploads/2019/11/FB_Newsroom_Social.png?fit=1200%2C628" alt="fb-text" />
      </div>
      <Button type="submit" onClick={signIn}>Sign In</Button>
    </div>
  );
};

export default Login;
