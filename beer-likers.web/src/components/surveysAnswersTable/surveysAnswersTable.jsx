import React from 'react';
import {beerToString} from "../../utils/utils.js";
import {getAll} from "../../api/surveyApi.js";
import {CircularProgress} from "@mui/material";
import snackbarStore from "../../store/snackbarStore.js";

const SurveysAnswersTable = () => {
    const [forms, setForms] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const getForms = () => {
        setIsLoading(true);
        getAll().then((data) => {
            snackbarStore.enable("success", "Данные успешно загружены");
            setForms(data);
        }).catch((e) => {
            console.log(e)
            snackbarStore.enable("error", "Ошибка при загрузке данных");
        }).finally(() => {
            setIsLoading(false);
        });
    }

    React.useEffect(() => {
        getForms();
    }, []);

    const onRefresh = (e) => {
        getForms();
    }

    return (<div>
        <button className="m1" onClick={onRefresh} disabled={isLoading}>Refresh</button>
        {isLoading ? (<div className="m1"><br/><CircularProgress/></div>) :
            (<div className="m1">
                {
                    forms.map(({id, name, age, isLoveBeer, beerPerMonth, beerType}) => {
                        return (<div key={id}>
                                <p>{name} {age}</p>
                                <strong className={isLoveBeer ? "like-beer" : "dont-like-beer"}>Love beer:
                                    {isLoveBeer ? "Yes" : "No"}</strong>
                                <p>Beer per month: {beerPerMonth} | Favorite Beer: {beerToString(beerType)}</p>
                            </div>
                        );
                    })
                }
            </div>)
        }
    </div>);
};

export default SurveysAnswersTable;
