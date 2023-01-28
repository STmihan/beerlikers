import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import HomePage from "../pages/homePage/homePage.jsx";
import HistoryPage from "../pages/historyPage/historyPage.jsx";
import React from "react";
import LoginPage from "../pages/loginPage/loginPage.jsx";
import NewsPage from "../pages/newsPage/newsPage.jsx";
import SurveyPage from "../pages/surveyPage/surveyPage.jsx";

export function createRouterAction() {
    return createBrowserRouter([
        {
            path: '/',
            element: <App page={<HomePage/>}/>
        },
        {
            path: '/news',
            element: <App page={<NewsPage/>}/>
        },
        {
            path: '/history',
            element: <App page={<HistoryPage/>}/>
        },
        {
            path: '/survey',
            element: <App page={<SurveyPage />}/>
        },
        {
            path: '/login',
            element: <LoginPage/>
        }
    ]);
}
