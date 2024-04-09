// function addTwoNumber(number1, number2) {
//     console.log(number1+number2) 
// }

// addTwoNumber(5,5)

// const result =addTwoNumber(5,5)
// console.log("Result" , result)


function addTwoNumber(number1, number2) {
    // let result =  number1 + number2;
    // return result
    // return number1+number2
}

// addTwoNumber(5,5)

const result =addTwoNumber(5,5)
// console.log("Result :" , result)





function loginUserMessage (username) {
    if (!username){
       console.log("Please enter a username")
       return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Anu"))
console.log(loginUserMessage()) // Return  undefined if no argument is passed


function loginUserMessage (username="Khushi") {
    if (!username){
       console.log("Please enter a username")
       return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Anu"))
console.log(loginUserMessage()) // Return  undefined if no argument is passed