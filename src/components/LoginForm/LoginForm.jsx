import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AuthActionCreators } from '../../store/reducers/auth/action-creators'
import Loader from '../Loader/Loader'
import './LoginForm.css'

const LoginForm = () => {
    const dispatch = useDispatch()

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const { isLoading } = useSelector((state) => state.auth)

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(AuthActionCreators.login(login, password))
    }

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <form onSubmit={submitHandler}>
                    <div>
                        <input
                            className="login_input"
                            type="text"
                            placeholder="Логин"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className="login_input"
                            type="password"
                            placeholder="Пароль"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="login_input login_btn" type="submit">
                        Войти
                    </button>
                </form>
            )}
        </>
    )
}

export default LoginForm
