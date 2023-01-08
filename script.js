/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


// const meter = 3.281
// const liter = 0.264
// const kilogram = 2.204
// const feet = 0.3048
// const gallon = 3.785
// const pound = 0.4537
// let mtf = document.getElementById("mtf")
// let ftm = document.getElementById("ftm")
// let ltg = document.getElementById("ltg")
// let gtl = document.getElementById("gtl")
// let ktp = document.getElementById("ktp")
// let ptk = document. )
const switcher = document.querySelector(".shifter")
let theme = localStorage.getItem("theme") || "light";

switcher.addEventListener("click", function(){
    if(theme === "dark") {
        document.querySelector("body").classList.remove("dark")
        document.querySelector("body").classList.add("light")
        theme = "light"
    } else {
        document.querySelector("body").classList.remove("light") 
        document.querySelector("body").classList.add("dark")
        
        theme = "dark"
    }
    localStorage.setItem("theme", theme)
})

if(theme === "dark") {
    document.querySelector("body").classList.add("dark")
}


let value = document.getElementById("input-number").value
let conBtn = document.getElementById("convert-btn")
let placeholder = document.getElementById("input-number").getAttribute("placeholder")
document.getElementById("input-number").value = placeholder

function unitConvert (firstUnit, secondUnit, ratio) {
    return `${value} ${firstUnit} = ${(value * ratio).toFixed(3)} ${secondUnit}  | ${value} ${secondUnit} = ${(value / ratio).toFixed(3)} ${firstUnit} `
}

conBtn.addEventListener("click", function(){
    value = document.getElementById("input-number").value
    document.getElementById("length").textContent = unitConvert("meters", "feet", 3.281)
    document.getElementById("volume").textContent = unitConvert("liters", "gallons", 0.264)
    document.getElementById("mass").textContent = unitConvert("kilograms", "pounds", 2.204)
})




