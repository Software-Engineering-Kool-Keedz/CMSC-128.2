window.onload = () => {
    if (sessionStorage.getItem('user') != undefined || sessionStorage.getItem('user') != null) {
        location.href = '/'
    }
}

const username = document.querySelector('#username')
const password = document.querySelector('#password')
const login = document.querySelector('#login')

login.onclick = () => {
    fetch('/post/login', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify({
            username: username.value,
            password: password.value
        })
    })
        .then(res => res.json())
        .then(data => {
            if (data[0].event === 'login success') {
                sessionStorage.setItem('id', data[0].id)
                sessionStorage.setItem('user', data[0].username)
                sessionStorage.setItem('role', data[0].role)
                location.href = '/'
            }
            else if (data[0].event === 'password incorrect') { 
                alert('Incorrect password')
            }
            else if (data[0].event === 'user not found') {
                alert(`User ${username.value} not found`)
            }
        })
    
}