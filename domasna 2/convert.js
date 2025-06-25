function convertMilesToKm(param) {
    const conversionValue = 1.6; 

    if (typeof param !== "number") {
        return "Invalid Input: Expected a number for miles.";
    }
    return param * conversionValue;
}

function convertCelsiusToFahrenheit(param) { 
    if (typeof param !== "number") {
        return "Invalid Input: Expected a number for Celsius.";
    }
    return (param * 1.8) + 32;
}

function convertPoundsToKilogram(param) {
    const conversionValue = 0.453592;
    if (typeof param !== "number") {
        return "Invalid Input: Expected a number for pounds.";
    }
    return param * conversionValue;
}

function convertFeetToMetres(param) {
    const conversionValue = 0.3048;
    if (typeof param !== "number") {
        return "Invalid Input: Expected a number for feet.";
    }
    return param * conversionValue;
}

module.exports = {
    convertMilesToKm,
    convertCelsiusToFahrenheit, 
    convertPoundsToKilogram,
    convertFeetToMetres
};