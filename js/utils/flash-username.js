const username = document.querySelector('#username')
console.log(sessionStorage.getItem('user'))
username.innerHTML = `${sessionStorage.getItem('user')}`