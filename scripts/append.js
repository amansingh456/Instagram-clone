
const appendData = (data, container) => {
    container.innerHTML = null
    data.forEach(({ caption, img_url }) => {
        let singleUser = document.createElement("div")
        singleUser.className = "single-user"

        let postNav = document.createElement("div")
        postNav.className = "post-nav"

        let userPro = document.createElement("div")
        userPro.className = "user-pro"
        let img1 = document.createElement("img")
        img1.src = img_url
        let p1 = document.createElement("p")
        p1.innerText = caption 

        let dotdot = document.createElement("div")
        dotdot.className = "dotdot"
        
        userPro.append(img1,p1)
        postNav.append(userPro,dotdot)






        let postPicture = document.createElement("div")
        postPicture.className = "post-picture"
        let img2 = document.createElement("img")
        img2.src = img_url
        postPicture.append(img2)








        let details = document.createElement("div")
        details.className = "details"



        let likedBy = document.createElement("div")
        likedBy.className = "liked-by"


        let img3 = document.createElement("img")
        img3.src = img_url
        let p2 = document.createElement("p")
        let s1 = document.createElement("span")
        s1.innerText="Liked by"
        let s2 = document.createElement("span")
        s2.innerText="Others.."
        let b1 = document.createElement("b")
        b1.innerText = "earthfever and 12,276"
        p2.append(s1,b1,s2) 
        likedBy.append(img3,p2)





        let postText = document.createElement("div")
        postText.className = "post-text"
        let b2 = document.createElement("b")
        b2.innerText = "tripfever"
        let s3 = document.createElement("span")
        s3.innerText = ` The beautiful beaches of Italy 🏖 Get your photos posted in our account,
        apply for a feature visiting tripfever.net 👉🏼 the link is in our bio: @tripfever
        Which of these spots is your favorite? 🇮🇹 `
        postText.append(b1,s3)





        let hoursAgo = document.createElement("div")
        hoursAgo.className = "hours-ago"
        let s4 = document.createElement("span")
        s4.innerText = "18 hours ago"
        hoursAgo.append(s4)



        details.append(likedBy,postText,hoursAgo)

        singleUser.append(postNav,postPicture,details)

        container.append(singleUser)
    })
}


export default appendData