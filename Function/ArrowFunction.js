const user ={
    username:"Anu",
    price:100,

    welComeMessage : function(){
        // console.log(`${this.username},welcome to website`)
        // console.log(this)
    }
}
// user.welComeMessage()  // Anu, welcome to website
// user. username ="Kit"
// user.welComeMessage()    // Kit, welcome to website

// console.log(this)


// function one(){
//     let username="anu"
//     console.log(this.userName )

// }
// one()

// ArrowFunction
 
 const two =()=>{
    let username ="Anu"
    // console.log(this.username)
    console.log(this)
 }

 two ()