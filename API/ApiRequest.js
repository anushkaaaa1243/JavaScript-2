let requestUrl= "https://jsonplaceholder.typicode.com/posts"
let api = new XMLHttpRequest();
api.open("GET",requestUrl)
api.onreadystatechange=function () {
    console.log(api.readyState)
    if (api.readyState===4) {
        let data=JSON.parse (this.responseText)
        
        console.log(data.map((data)=>data.id))
        
    }
}
api.send()




