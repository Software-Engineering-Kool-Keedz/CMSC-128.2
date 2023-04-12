// login page functionalities
const loginBtn = document.querySelector('#login-button')

loginBtn.addEventListener('click', () => {
    const username = document.querySelector('#username-input').value
    const password = document.querySelector('#password-input').value
    if(username.length == 0 || password.length == 0) alert('Fill all fields')
    else{
        fetch('/request/login', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json'}),
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(res => res.json())
            .then(data => {
                if (data[0].event === 'login success'){
                    sessionStorage.setItem('username', data[0].username)
                    sessionStorage.setItem('role', data[0].role)
                    alert('Login successful.')
                    location.href = '/'
                }
                else if (data[0].event === 'incorrect password'){
                    alert('Password incorrect. Please try again.')
                }
                else if (data[0].event === 'user not found'){
                    alert(`User ${username} not found. Please try again.`)
                }
                else alert('Unnexpected event. Please try again.')
            })
    }
})
