import React from 'react';
import * as loginApi from "../../api/loginApi.js";
import snackbarStore from "../../store/snackbarStore.js";

const LoginForm = ({onLogin}) => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [isLoading, setIsLoading] = React.useState(false);

    const onLoginChange = (e) => {
        setUsername(e.target.value);
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onLoginClick = (e) => {
        setIsLoading(true);
        e.preventDefault();
        loginApi.tryLogin({username, password}).then(
            () => {
                snackbarStore.enable("success", "Успешный вход");
                onLogin()
            }
        ).catch((e) => {
            console.log(e);
            snackbarStore.enable("error", "Ошибка при входе");
        }).finally(() => {
            setIsLoading(false);
        });
    }

    return (
        <form>
            <div className="m1">
                <label htmlFor="login">Login</label>
                <input className="m1" type="text" name="login" onChange={onLoginChange} value={username}/>
            </div>
            <div className="m1">
                <label htmlFor="password">Password</label>
                <input className="m1" type="password" name="password" onChange={onPasswordChange} value={password}/>
            </div>
            <input className="m1" type="submit" value="Login" disabled={isLoading} onClick={onLoginClick}/>
        </form>
    );
};

export default LoginForm;
