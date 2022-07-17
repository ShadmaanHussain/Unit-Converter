const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const darkBtn = document.getElementById("dark-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const body = document.querySelector("body")
const metricEl = document.querySelectorAll(".metric-el")
let darkModeOn = false
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// Convert Function
convertBtn.addEventListener("click", function(){
    const inputVal = Number(inputEl.value)
    const meterToFeet = (inputVal * 3.281).toFixed(3)
    const feetToMeter = (inputVal / 3.281).toFixed(3)
    const literToGallon = (inputVal * 0.264).toFixed(3)
    const gallonToLiter = (inputVal / 0.264).toFixed(3)
    const kgToPound = (inputVal * 2.204).toFixed(3)
    const poundToKg = (inputVal / 2.204).toFixed(3)
    lengthEl.textContent = `${inputVal} meters = ${meterToFeet} feet | ${inputVal} feet = ${feetToMeter} meters`
    volumeEl.textContent = `${inputVal} liters = ${literToGallon} gallons | ${inputVal} gallons = ${gallonToLiter} liters`
    massEl.textContent = `${inputVal} kilograms = ${kgToPound} pounds | ${inputVal} pounds = ${poundToKg} kilograms`
})

// Dark Mode Function
darkBtn.addEventListener("click", function(){
    if(darkModeOn === false) {
        body.classList.add("body-back")
        for(let i = 0; i < metricEl.length; i++) {
            metricEl[i].classList.add("metric-el-dark")
        }
        darkModeOn = true
    } else {
        body.classList.remove("body-back")
        for(let i = 0; i < metricEl.length; i++) {
            metricEl[i].classList.remove("metric-el-dark")
        }
        darkModeOn = false
    }
})
