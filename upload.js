import navbar from "./components/navbar.js";

let navbar_div = document.getElementById("navbar")
navbar_div.innerHTML = navbar()







let create_btn = document.getElementById("create_btn")
create_btn.addEventListener("click",()=>{
    addPost()
})
create_btn.disabled=true


const addPost = async () =>{
    let id = document.getElementById("id").value
    let caption = document.getElementById("caption").value

    let send_this_data = {
        caption,
        id,
        img_url
    }


    let res = await fetch('http://localhost:3000/posts',{
        method:'POST',
        body:JSON.stringify(send_this_data),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    let data = await res.json()
    console.log('data: ', data);



}




let inp = document.getElementById("image")
inp.addEventListener("change",()=>{
    handelI(event)
})



let img_url;

const handelI = async (event) =>{
    let image = document.getElementById("image")
    // console.log('image: ', image);  
    let actual_img = image.files[0]
    console.log('actual_img: ', actual_img);



    let form = new FormData()
    form.append("image", actual_img)

    try {
        let res = await fetch(`https://api.imgbb.com/1/upload?key=6c34c9ed23fcad50382d9a3265554006`, {
            method:"POST",
            body: form
        })
        
        let data = await res.json()
        console.log('data: ', data);

        img_url = data.data.display_url
        console.log('img_url: ', img_url);
        if(img_url!=null && id!="" && caption!=""){
            create_btn.disabled=false
        }
       

    } catch (error) {
        console.log('error: ', error); 
    }
}





// update code .............


let upd_btn = document.getElementById("upd_btn")
upd_btn.addEventListener("click", ()=>{
    updatePost()
})



const updatePost = async() =>{
    try {
        let id_to_upd = document.getElementById("upd_id").value
        let new_cmnt = document.getElementById("new_cpt").value
        let send_data = {
            "caption":new_cmnt
        }
        let res = await fetch(`http://localhost:3000/posts/${id_to_upd}`,{
            method:"PATCH",
            body: JSON.stringify(send_data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        let data = res.json()

    } catch (error) {
        console.log('error: ', error);
        
    }
}






// Delete code .....

let del_btn = document.getElementById("dlt_btn")
del_btn.addEventListener("click", ()=>{
    deletePost()
})


const deletePost = async() =>{
    try {
        let id_to_delete = document.getElementById("del_id").value
        let res = await fetch(`http://localhost:3000/posts/${id_to_delete}`,{
            method:"DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        let data = res.json()

    } catch (error) {
        console.log('error: ', error);
        
    }
}