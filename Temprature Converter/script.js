const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

// WINDOW LOADING RESET
window.addEventListener("load", () => {
    degree.value = "";
    celsiusField.innerHTML = "";
})
 

convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius();

    // ADD LOADING FEATURE
convertBtn.innerHTML = "<span><i class='fa-solid fa-spinner fa-spin'></i> Converting....</span>";
setTimeout(() => {
    convertBtn.innerHTML = "<span>Convert...</span>"
}, 1000)
 })
 

function convertToCelsius() {
let inputValue = degree.value;

if(tempType.value === "fahrenheit") {
    const fahrenheitToCelssius = (inputValue -32) * (5/9);
    celsiusField.innerHTML = `${fahrenheitToCelssius.toFixed(3)} &deg;c`
}
else if(tempType.value === "kelvin") {
    const kelvinToCelsius = inputValue - 273.15;
    celsiusField.innerHTML = `${kelvinToCelsius.toFixed(3)} &deg;c`
    
}
}