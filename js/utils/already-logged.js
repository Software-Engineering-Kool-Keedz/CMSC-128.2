if(sessionStorage.getItem('user') != null){
    alert('You are already logged in. Redirecting you to home');
    location.href = '/';
}