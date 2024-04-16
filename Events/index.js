// Events
document.querySelector("#images").addEventListener("click",function (e) {
    console.log(e.target.tagName)
    if(e.target.tagName==='IMG'){
        console.log(e.target.id)
        let removeIt=e.target.parentNode
        removeIt.remove()    
    }
    console.log(e.target.parentNode)
})

// document.getElementById("Forest").onclick=function() 
// {
//     alert("This is forest images")
    
// }

// document.getElementById("images").addEventListener('click',function (e) 
// {
// console.log("Inside the url ")    
// })
// document.getElementById("Forest").addEventListener('click',function (e) 
// {
//     e.stopPropagation()
    
//     console.log("This is a forest images ")    
// },true)

// document.getElementById('google').addEventListener('click',function (e) {
//     e.preventDefault()
//     e.stopPropagation()
//     console.log("Google Clicked")
    
// })