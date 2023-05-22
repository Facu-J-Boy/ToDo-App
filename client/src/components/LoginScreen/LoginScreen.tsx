import React from 'react'
import LoginWithEmail from '../LoginWithEmail/LoginWithEmail'
import LoginWithGoogle from '../LoginWithGoogle/LoginWithGoogle'
import LogOut from '../LogOut/LogOut'
import SignUpWithEmail from '../SignUpWithEmail/SignUpWithEmail'

const LoginScreen = () => {
  return (
    <div>
        <LoginWithEmail />
        <LoginWithGoogle />
        <LogOut />
        <SignUpWithEmail />
    </div>
  )
}

export default LoginScreen