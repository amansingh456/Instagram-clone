import navbar from "./components/navbar.js";
import appendData from "./scripts/append.js";

let navbar_div = document.getElementById("navbar")
navbar_div.innerHTML = navbar()



let div_posts = document.getElementById("newfeed")

const getData = async () => {
    try {
        let res = await fetch(`http://localhost:3000/posts`)
        let data = await res.json()
        console.log('data: ', data);
        appendData(data,div_posts)
    } catch (error) {
        console.log('error: ', error);
        
    }
}
getData()