import React from 'react'
import LoginWithEmail from '../LoginWithEmail/LoginWithEmail'
import LoginWithGoogle from '../LoginWithGoogle/LoginWithGoogle'
import LogOut from '../LogOut/LogOut'
import SignUpWithEmail from '../SignUpWithEmail/SignUpWithEmail'
import Logo from '../Logo/Logo'

const LoginScreen = () => {
  return (
    <div>
        <LoginWithEmail />
        <SignUpWithEmail />
        <Logo />
    </div>
  )
}

export default LoginScreen