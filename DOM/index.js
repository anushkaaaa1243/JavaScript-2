// const parent=document.querySelectorAll(".parent")
// const dayOne=document.querySelector(".day")

// console.log("NODES:",parent.childNodes)

// const div = document.createElement("div")
// console.log(div);
// div.className = "main"
// div.id = "myId"
// div.setAttribute("title","Generated title")
// div.style.background="green"
// div.style.padding="12px"
// const addText= document.createTextNode("Anushka")
// div.appendChild(addText)
// document.body.appendChild(div)


function addLanguage(languageName){
let li =document.createElement("li");
li.innerHTML=`${languageName}`
document.querySelector(".language").appendChild(li)
}
addLanguage("C++")
addLanguage("C")


function addOptiLanguage(languageName){
    let li =document.createElement('li')
    li.appendChild(document.createTextNode(languageName))
    document.querySelector(".language").appendChild(li)
}
addOptiLanguage("Java")


// Edit

let secondLang=document.querySelector("li:nth-child(2)")
// secondLang.innerHTML="Python"
let newLi=document.createElement("li")
newLi.textContent="Mojo"
secondLang.replaceWith(newLi)


// Edit

let FirstLang=document.querySelector("li:first-child")
FirstLang.outerHTML='<li>TypeScript</li>'



// Remove

const lastLang = document.querySelector("li:last-child")
lastLang.remove()
