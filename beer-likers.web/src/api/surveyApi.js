import axios from "axios";
import RoutesConstants from "../const/RoutesConstants.js";

export async function getAll() {
    const url = RoutesConstants.FORMS.GET_ALL;
    const config = {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }
    const response = await axios.get(url, config);
    return response.data;
}

export async function postNewAnswer({isLoveBeer, beerType, name, age, beerPerMonth}) {
    const url = RoutesConstants.FORMS.POST_NEW;
    const response = await axios.post(url, {
        isLoveBeer,
        beerType,
        name,
        age,
        beerPerMonth
    });
    return response.data;
}
