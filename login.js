class user {
    constructor() {

    }
    #checkUsername(username) {
        let value = username.includes("#") ? false : true
        return value
    }
    #checkPassword(password) {
        let value = password.length > 8 ? true : false
        return value
    }
    async Signup(n, e, u, p, m, d) {

        let isValidated = this.#checkUsername(u) && this.#checkPassword(p)

        if (isValidated) {
            this.name = n
            this.email = e
            this.username = u
            this.password = p
            this.mobile = m
            this.description = d

            let actual_data = JSON.stringify(this)

            try {
                let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
                    method: "POST",
                    body: actual_data,
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                let data = await res.json()
                console.log('data: ', data);
                // console.log("User registerd succesfully")
            } catch (error) {
                console.log('error: ', error);

            }

        }

    }
    async Logup(u, p) {
        let _this = {}
        _this.password = p
        _this.username = u
        try {
            let login_url = `https://masai-api-mocker.herokuapp.com/auth/login`
            let res = await fetch(login_url, {
                method: "POST",
                body: JSON.stringify(_this),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            let data = await res.json()
            let token = data.token
            console.log('data: ', data)
            getProfile(_this.username, token)
        } catch (error) {
            console.log('error: ', error);
        };
    }
}

let u1 = new user()


function Register() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const mobile = document.getElementById("mobile").value
    const description = document.getElementById("description").value

    u1.Signup(name, email, username, password, mobile, description)
}


function Login() {
    let login_data = {
        password: document.getElementById("login-password").value,
        username: document.getElementById("login-username").value
        
    }
    u1.Logup(login_data.password, login_data.username)
}




async function getProfile(username, token) {
    let apiProfile = `https://masai-api-mocker.herokuapp.com/user/${username}`

    let res = await fetch(apiProfile, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
    let data = await res.json()
    console.log('data: ', data);
    welcomeUser(data.name)

}

function welcomeUser(x) {
    let show = document.querySelector(".result")
    show.innerHTML = null

    let h2 = document.createElement("h2")
    h2.innerText = `Hello, Mr. ${x}`
    setTimeout(() => {
        location.href = 'index.html'
    }, 2000);

    let p = document.createElement("p")
    p.innerHTML = "Welcome Back 😊✌️.."

    show.append(h2, p)
}
// console.log('u1: ', u1); 