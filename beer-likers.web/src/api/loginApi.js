import axios from "axios";
import RoutesConstants from "../const/RoutesConstants.js";

export async function tryLogin({username, password}) {
    const url = RoutesConstants.AUTH.LOGIN;
    const response = await axios.post(url, {username, password});
    localStorage.setItem("token", response.data.value);
    return response.data.value;
}

export async function logout() {
    const url = RoutesConstants.AUTH.LOGOUT;
    const item = localStorage.getItem("token");
    if (item) {
        const response = await axios.delete(url);
        console.log(response);
        localStorage.removeItem("token");
        return response;
    }
    return null;
}
