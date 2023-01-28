import React from 'react';
import {ageFilter, beerPerMonthFilter, nameFilter} from "../../actions/filterActions.js";
import Error from "../error/error.jsx";
import './survey.css';
import {postNewAnswer} from "../../api/surveyApi.js";
import snackbarStore from "../../store/snackbarStore.js";


const Survey = () => {
    const [isLoveBeer, setIsLoveBeer] = React.useState(true);
    const [beerType, setBeerType] = React.useState(0);
    const [name, setName] = React.useState("");
    const [age, setAge] = React.useState(0);
    const [beerPerMonth, setBeerPerMonth] = React.useState(0);

    const [error, setError] = React.useState({nameError: false, ageError: false, beerPerMonthError: false});
    const [isLoading, setIsLoading] = React.useState(false);

    const onBeerTypeChange = (e) => {
        setBeerType(e.target.value);
    }

    const onNameChange = (e) => {
        const value = e.target.value;
        if (nameFilter(value)) {
            setError({...error, nameError: false});
        }

        setName(value);
    }

    const onAgeChange = (e) => {
        const value = e.target.value;
        if (ageFilter(value)) {
            setError({...error, ageError: false});
        }
        setAge(value);
    }

    const onBeerPerMonthChange = (e) => {
        const value = e.target.value;
        if (beerPerMonthFilter(value)) {
            setError({...error, beerPerMonthError: false});
        }
        setBeerPerMonth(value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setError({ nameError: !nameFilter(name), ageError: !ageFilter(age), beerPerMonthError: !beerPerMonthFilter(beerPerMonth)});

        if (nameFilter(name) && ageFilter(age) && beerPerMonthFilter(beerPerMonth)) {
            setIsLoading(true);
            postNewAnswer({isLoveBeer, beerType, name, age, beerPerMonth})
                .then(r => {
                    snackbarStore.enable("success", "Ответ успешно отправлен");
                }
            ).catch(e => {
                console.log(e);
                snackbarStore.enable("error", "Ошибка при отправке ответа");
            }).finally(() => {
                setIsLoading(false);
            });
        }
    }

    const onReset = (e) => {
        e.preventDefault();
        setIsLoveBeer(true);
        setBeerType(0);
        setName("");
        setAge(0);
        setBeerPerMonth(0);
    }

    return (<form>
        <table>
            <tbody>
            <tr>
                <td>
                    Любите ли Вы пиво?
                </td>
                <td>
                    <input type={"radio"} onChange={() => setIsLoveBeer(true)} checked={isLoveBeer}/> Да
                    <input type={"radio"} onChange={() => setIsLoveBeer(false)} checked={!isLoveBeer}/> Нет
                </td>
            </tr>
            <tr>
                <td>
                    Выберите Ваш любимый сорт пива:
                </td>
                <td>
                    <select onChange={onBeerTypeChange} value={beerType}>

                        <option value="0">Пилзнер</option>

                        <option value="1">Лагер</option>

                        <option value="2">Стаут</option>

                        <option value="3">Портер</option>

                        <option value="4">Корневое</option>

                        <option value="5">Фруктовое</option>

                        <option value="6">Пшеничное</option>

                        <option value="7">Индийский пейл-эль</option>

                        <option value="8">Амрериканский пейл-эль</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    Введите имя
                </td>
                <td className="input-label">
                    <input type="text" size="25" onChange={onNameChange} value={name}/>
                    {<Error hide={!error.nameError} text={"Введите имя правильно"}/>}
                </td>
            </tr>
            <tr>
                <td>
                    Введите ваш возраст
                </td>
                <td className="input-label">
                    <input type="text" size="25" onChange={onAgeChange} value={age}/>
                    {<Error hide={!error.ageError} text={"Введите возраст правильно"}/>}
                </td>
            </tr>
            <tr>
                <td>
                    Сколько пиво пьете в месяц
                </td>
                <td className="input-label">
                    <input type="text" size="25" onChange={onBeerPerMonthChange} value={beerPerMonth}/>
                    {<Error hide={!error.beerPerMonthError} text={"Введите значение правильно"}/>}
                </td>
            </tr>
            <tr>
                <td>
                    <input type="submit" disabled={isLoading} value="Отправить" onClick={onSubmit}/>
                </td>
                <td>
                    <input type="reset" value="Очистить" onClick={onReset}/>
                </td>
            </tr>
            </tbody>
        </table>
    </form>);
};

export default Survey;
