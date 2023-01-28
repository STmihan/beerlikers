export function isNumeric(str) {
    if (typeof str != "string") return false
    return !isNaN(str) &&
        !isNaN(parseFloat(str))
}

export function beerToString(beer) {
    switch (beer) {
        case 0:
            return "Пилзнер";
        case 1:
            return "Лагер";
        case 2:
            return "Стаут";
        case 3:
            return "Портер";
        case 4:
            return "Корневое";
        case 5:
            return "Фруктовое";
        case 6:
            return "Пшеничное";
        case 7:
            return "Индийский пейл-эль";
        case 8:
            return "Амрериканский пейл-эль";
        default:
            return "Неизвестно";
    }
}
