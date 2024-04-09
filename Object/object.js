const tinderUser = new Object ()

tinderUser.id ="1234abcd"
tinderUser.name ="Anushka"
tinderUser.isLoggedIn =false
// console.log(tinderUser)


const user = {
    email:"anushka@gmail.com",
    username:{
        fullName :{
            firstName: "Anushka",
            lastName:"Gandhi"
        }
    }
}
// console.log(user.username.fullName.firstName.lastName)  // undefined


const target = {1:"a",2:"b"}
const source = {3:"c",4:"d"}
// const result = {target,source}
const result = Object.assign (target,source)
// console.log(result)



const user2 =
[
    {
        id:1,
    email :"anu@gmail.com"
        
    },
    {
        id:2,
        email :"girish@gmail"
    }
]
user2[1].email
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))   // returns array of keys ["email","username"]
// console.log(Object.values(tinderUser))     // returns array of
// console.log(Object.entries(tinderUser))      //returns an array of arrays [["email","anu@gmail.]]

// console.log(tinderUser.hasOwnProperty("name"));       // false