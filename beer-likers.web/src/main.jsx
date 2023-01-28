import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {createRouterAction} from "./actions/createRouterAction.jsx";
import axios from "axios";
import SnackbarState from "./components/snackbar/snackbarState.jsx";

const router = createRouterAction();

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? token : '';
    return config;
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
      <SnackbarState />
  </React.StrictMode>
)
