function navbar(){
    return `
    
        <div class="container">
            <img src="Assets/logo.png" class="logo" />
            <div class="search-box">
                <input placeholder="search"/>
            </div>

            <div class="menus">
                <a><i class="fas fa-home"></i></a>
                <a><i class="fab fa-facebook-messenger"></i></a>
                <a><i class="far fa-compass"></i></a>
                <a><i class="far fa-heart"></i></a>
                <a class="dp"><img src="Assets/2.jpg" ></img></a>
            </div>
        </div>
    
    `
}
export default navbar