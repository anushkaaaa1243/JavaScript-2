
// Object Literal


const user ={
    name:"Anushka",
    "full name":"Anushka Gandhi",
    age:"16",
    location:"Bhopal",
    isLoggedIn:false,
    email:"anushkagandhi@gmail.com"

}
console.log(user.name)
// console.log(user["full name"])


user.email="anushka@gmail.com"
// Object.freeze(user);
user.email="purvi@gmail.com";  //this will throw error as object is frozen 
// console.log(user)


user.greeting =function(){
    console.log("Hello")
}
user.greetingTwo =function () {
    console.log(`Hello user, ${this.name}`)
}
console.log(user.greeting())
console.log(user.greetingTwo())