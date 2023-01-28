import React from 'react';
import SurveysAnswersTable from "../../components/surveysAnswersTable/surveysAnswersTable.jsx";
import "./loginPage.css";
import {useNavigate} from "react-router-dom";
import * as loginApi from "../../api/loginApi.js";
import LoginForm from "../../components/loginForm/loginForm.jsx";
import snackbarStore from "../../store/snackbarStore.js";

const LoginPage = () => {
    const navigate = useNavigate();
    const [isAuthorized, setIsAuthorized] = React.useState(false);

    React.useEffect(() => {
        if (localStorage.getItem("token")) {
            setIsAuthorized(true);
        }
    }, []);

    const onLogoutClick = (e) => {
        e.preventDefault();
        loginApi.logout().then(() => {
                setIsAuthorized(false);
            }
        ).catch((e) => {
            snackbarStore.enable("error", "Что-то пошло не так");
            console.log(e);
            localStorage.removeItem("token");
            setIsAuthorized(false);
        });
    }

    const onBackClick = (e) => {
        e.preventDefault();
        navigate("/");
    }

    const onLogin = (e) => {
        setIsAuthorized(true);
    }

    return (
        <div className="container">
            <button className="m1" onClick={onBackClick}>Back</button>
            <button className="m1" onClick={onLogoutClick} disabled={!isAuthorized}>Logout</button>
            {isAuthorized ? <SurveysAnswersTable/> : <LoginForm onLogin={onLogin}/>}
        </div>
    );
};

export default LoginPage;
