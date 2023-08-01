let metric = document.querySelector(".metric")
let imperial = document.querySelector(".imperial")

let unitsRadio = document.getElementsByName("unit")

let cminput = document.getElementById("cm")
let kginput = document.getElementById("kg")
let ftinput = document.getElementById("ft")
let ininput = document.getElementById("in")
let stinput = document.getElementById("st")
let lbtinput = document.getElementById("lbt")

cminput.addEventListener("input", function () {
    sum()
})
kginput.addEventListener("input", function () {
    sum()
})
ftinput.addEventListener("input", function () {
    sum()
})
ininput.addEventListener("input", function(){
    sum()
})
stinput.addEventListener("input", function(){
    sum()
})
lbtinput.addEventListener("input", function(){
    sum()
})

let divResult = document.querySelector(".result")

// array.forEach(function(element, index){
//     if(element.checked){
//         if(element.value ==="metric"){
//             imperial.classList.add("hidden")
//             metric.classList.remove("hidden")
//         }
//         else{
//             imperial.classList.remove("hidden")
//             metric.classList.add("hidden")
//         } 
//     }
//     element.addEventListener('change', function(event){
//         event.preventDefault()
//         console.log(element.checked, element.value);
//         if(element.value ==="metric"){
//             imperial.classList.add("hidden")
//             metric.classList.remove("hidden")
//         }
//         else{
//             imperial.classList.remove("hidden")
//             metric.classList.add("hidden")
//         } 
//     })
// })

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
        let weightKg = stinput.value/2.2046 + lbtinput.value *0.071429
        console.log(heightMeters)
        console.log(weightKg)
      
        bodyIndex = bodyIndexMetric( weightKg, heightMeters)
    }
    divResult.innerHTML = "your index: " + bodyIndex.toFixed(1)
}

function bodyIndexMetric(weightKg, heightM) {
    return weightKg / Math.pow(heightM, 2)
}


// function bmi(weight, height) {
//     let bmi = weight / (height**2);

//     if(bmi < 18.5){
//       return "Underweight";
//     }else if (bmi < 25){
//       return "Normal";
//     }else if (bmi < 30){
//       return "Overweight";
//     }else{
//       return "Obese";
//     }
//   }

// США Единицы
// 703 X Вес в фунтах / (высота в дюймах) 2
//     = 703 * 176 / (59.84) 2
// Ваш индекс массы тела в США Единицы35, 21.