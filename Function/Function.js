function calculateCartPrice (...num1){
    return num1
}
console.log(calculateCartPrice(5, 7,8,9,0));


const user ={
    name:"Anu",
    price :2000
}
function handelObject (anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
}
handelObject(user)


const myNewArray =[200,400,500,600]
function returnSecondValue (getArray) {
    return getArray[3]

}

console.log(returnSecondValue(myNewArray))
