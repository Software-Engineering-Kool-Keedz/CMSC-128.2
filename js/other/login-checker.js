// checks if the user is logged in, if not, user is redirected to /login
if (sessionStorage.getItem('username') == null){
    location.href = '/login'
}
