const {
    convertMilesToKm,
    convertCelsiusToFahrenheit, 
    convertPoundsToKilogram,
    convertFeetToMetres
} = require("./convert");


const mile = 31.9;
const celsuis = 200; 
const pounds = 18;
const feet = 20;



function conertInToCorrectValues() {
    const convertedMiles = convertMilesToKm(mile) + " KM";
    const convertedCelsius = convertCelsiusToFahrenheit(celsuis) + " F"; 
    const convertedPounds = convertPoundsToKilogram(pounds) + " KG";
    const convertedFeet = convertFeetToMetres(feet) + " M";

    console.log(convertedMiles);
    console.log(convertedCelsius); 
    console.log(convertedPounds);
    console.log(convertedFeet);
}

conertInToCorrectValues();