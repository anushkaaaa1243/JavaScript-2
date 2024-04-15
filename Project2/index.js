let form= document.querySelector("form")
form.addEventListener("submit",function(e) {
    console.log("Click event")

    e.preventDefault()
    let height=parseInt(document.querySelector("#height").value)
    let weight=parseInt(document.querySelector("#weight").value)
    let result=document.querySelector("#result")

    console.log("Height", height)
    console.log("Weight",weight)

    if(height === ""|| height<0|| isNaN(height)){
        result.innerHTML=`Please give a valid height ${height}`
    }else if (weight === ""|| weight<0|| isNaN(weight)){
        result.innerHTML=`Please give a valid weight ${weight}`

    }else {
        const BMI = (weight/((height*height)/10000)).toFixed(2)
        result.innerHTML=`<span>${BMI}</span>`
    }
})
