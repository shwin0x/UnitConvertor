/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

*/

let convertBtn = document.getElementById("convertbtn")
let lengthConvertjs = document.getElementById("lengthConvert")
let volumeConvertjs = document.getElementById("volumeConvert")
let massConvertjs = document.getElementById("massConvert")
let inputBoxjs = document.getElementById("inputBox")

convertBtn.addEventListener("click",function()
{
    
    if(inputBoxjs.value != null && inputBoxjs.value>0)
    {
        inputNum = Number(inputBoxjs.value)
        lengthConvertjs.textContent= `${inputNum.toFixed(3)} meters = ${(inputNum.toFixed(3)*3.281).toFixed(3)} feet | ${inputNum.toFixed(3)} feet = ${(inputNum.toFixed(3)/3.281).toFixed(3)} meters`
        volumeConvertjs.textContent=`${inputNum.toFixed(3)} liters = ${(inputNum.toFixed(3)*0.264).toFixed(3)} gallons | ${inputNum.toFixed(3)} gallons = ${(inputNum.toFixed(3)/0.264).toFixed(3)} liters`
        massConvertjs.textContent= `${inputNum.toFixed(3)} kilos = ${(inputNum.toFixed(3)*2.204).toFixed(3)} pounds | ${inputNum.toFixed(3)} pounds = ${(inputNum.toFixed(3)/2.204).toFixed(3)} kilos`
    }

})
