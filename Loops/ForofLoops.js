let arr =[1,2,3,4,5,6,7,8,9,10]
for(const num of arr){
    // console.log(num)
}


let greetings = "Hello world !"
for (const greet of greetings) {
    // console.log(`Each Char is ${greet}`)
    ""
}



// Maps


let map =new Map ()
map.set("IN","India")
// map.set("IN","India")
map.set("USA","United States of American")
map.set("Fr","France")
console.log(map.get("USA"))



for (const [key,value] of map) {
    console.log(key, ":-", value)
}


let myObject ={
    "cartoon1":"Shinchan",
    "cartoon2":"Doraemon"
}

// for (const [key,value] of myObject) {
//     console.log(key, ":-", value)
    
// }


// For in

let language = {
    js:"Javascript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in language) {
    // console.log(language[key])
    // console.log(`${key} shortcut is for ${language[key]}`)
   
}


// const programming = ["js","rb","py","java","cpp"]
// for (const key in programming) {
//    console.log(programming[key])
// }

let myarr = ["Orange","Apple","Mango"];

// myarr.map((item,index)=>{
//     console.log(item,index);
// })


// For of // for each // for in
// myarr.forEach(element => {
//     console.log(element);
// });

// for (const iterator of object) {
    
// }

let a = "Orange"



