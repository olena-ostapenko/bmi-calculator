let metric = document.querySelector(".metric")
let imperial = document.querySelector(".imperial")

let array = document.getElementsByName("button")
console.log(array);

array.forEach(function(element, index){
    if(element.checked){
        if(element.value ==="metric"){
            imperial.classList.add("hidden")
            metric.classList.remove("hidden")
        }
        else{
            imperial.classList.remove("hidden")
            metric.classList.add("hidden")
        } 
    }
    element.addEventListener('change', function(event){
        event.preventDefault()
        console.log(element.checked, element.value);
        if(element.value ==="metric"){
            imperial.classList.add("hidden")
            metric.classList.remove("hidden")
        }
        else{
            imperial.classList.remove("hidden")
            metric.classList.add("hidden")
        } 
    })
})