import {isNumeric} from "../utils/utils.js";

export function nameFilter(name) {
    return !(name === undefined ||
        name === null ||
        isNumeric(name) ||
        name.trim() === "" ||
        name.length < 3 ||
        name.length > 25);
}

export function ageFilter(age) {
    return !(age === undefined ||
        age === null ||
        !isNumeric(age) ||
        age < 18 ||
        age > 100);
}

export function beerPerMonthFilter(beerPerMonth) {
    return !(beerPerMonth === undefined ||
        beerPerMonth === null ||
        !isNumeric(beerPerMonth) ||
        beerPerMonth < 0);
}
