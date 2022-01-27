import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import './LoginPage.css'

const Login = () => {
    return (
        <div className="login-container">
            <h2 className="login_greetings">Добро пожаловать!</h2>
            <LoginForm />
        </div>
    )
}

export default Login
