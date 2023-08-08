let metric = document.querySelector(".metric")
let imperial = document.querySelector(".imperial")

let unitsRadio = document.getElementsByName("unit")

let cminput = document.getElementById("cm")
let kginput = document.getElementById("kg")
let ftinput = document.getElementById("ft")
let ininput = document.getElementById("in")
let stinput = document.getElementById("st")
let lbtinput = document.getElementById("lbt")

let enterText = document.querySelector(".result-enter_text")

let resultTitle = document.querySelector(".result-title")

let resultBox = document.querySelector(".div-result_row")
let yourBMI = document.querySelector(".yourBMI")

resultBox.classList.add("hidden")


function changeText(element, newtext) {
    element.innerHTML = newtext;
}


cminput.addEventListener("input", function () {
    sum()
    enterText.classList.add("hidden")
    resultBox.classList.remove("hidden")
 changeText(document.querySelector(".result-title"), "Your BMI is...") 
   

})
kginput.addEventListener("input", function () {
    sum()
    enterText.classList.add("hidden")
    resultBox.classList.remove("hidden")
 changeText(document.querySelector(".result-title"), "Your BMI is...") 
})
ftinput.addEventListener("input", function () {
    sum()
    enterText.classList.add("hidden")
    resultBox.classList.remove("hidden")
 changeText(document.querySelector(".result-title"), "Your BMI is...") 
})
ininput.addEventListener("input", function(){
    sum()
    enterText.classList.add("hidden")
    resultBox.classList.remove("hidden")
 changeText(document.querySelector(".result-title"), "Your BMI is...") 
})
stinput.addEventListener("input", function(){
    sum()
    enterText.classList.add("hidden")
    resultBox.classList.remove("hidden")
 changeText(document.querySelector(".result-title"), "Your BMI is...") 
})
lbtinput.addEventListener("input", function(){
    sum()
    enterText.classList.add("hidden")
    resultBox.classList.remove("hidden")
 changeText(document.querySelector(".result-title"), "Your BMI is...") 
})

let divResult = document.querySelector(".result")

function divCheck(bit, div1, div2, name) {
    if (bit.value === name) {
        div2.classList.add("hidden")
        div1.classList.remove("hidden")
    }
    else {
        div2.classList.remove("hidden")
        div1.classList.add("hidden")
    }
}
unitsRadio.forEach(function (element, index) {
    if (element.checked) {
        divCheck(element, metric, imperial, element.value)
    }

    element.addEventListener("change", function (event) {
        event.preventDefault()

        divCheck(element, metric, imperial, "metric")
    })
})

let sentense = document.getElementById("sentense")
console.log(sentense);

function sum() {
    let bodyIndex = 0
    let selectedUnit = ""
    unitsRadio.forEach(function (element, index) {
        if (element.checked === true) {
            selectedUnit = element.value
        }
    })
    if (selectedUnit === "metric") {
        bodyIndex = bodyIndexMetric(kginput.value, cminput.value / 100)

    }
    else {
        let heightMeters = ftinput.value * 0.3 + ininput.value * 0.025
        let weightKg = stinput.value/0.15747 + lbtinput.value *0.035274
        console.log(heightMeters)
        console.log(weightKg)
      
        bodyIndex = bodyIndexMetric( weightKg, heightMeters)
    }
    divResult.innerHTML = bodyIndex.toFixed(1)
  
    if(bodyIndex < 16){
        sentense.innerHTML = "Your BMI suggests you’re a severe thinness"
    } 
    else if(bodyIndex >=16 && bodyIndex<17){
        sentense.innerHTML = "Your BMI suggests you’re a moderate thinness"
    } 
     else if(bodyIndex >=17 && bodyIndex<18.5){
        sentense.innerHTML = "Your BMI suggests you’re a mild thinness"
    } 
    else if(bodyIndex >=18.5 && bodyIndex<25){
        sentense.innerHTML = "Your BMI suggests you’re a normal"
    } 
    else if(bodyIndex >=25 && bodyIndex<30){
        sentense.innerHTML = "Your BMI suggests you’re an overweight"
    } 
    else if(bodyIndex >=30 && bodyIndex<35){
        sentense.innerHTML = "Your BMI suggests you’re an obese class I"
    } 
    else if(bodyIndex >=35 && bodyIndex<40){
        sentense.innerHTML = "Your BMI suggests you’re an obese class II"
    } 
    else if(bodyIndex >=40){
        sentense.innerHTML = "Your BMI suggests you’re an obese class III"
    } 
}

function bodyIndexMetric(weightKg, heightM) {
    return weightKg / Math.pow(heightM, 2)
}


