if(sessionStorage.getItem('user') === null){
    alert('You must be logged in to access this page.');
    sessionStorage.clear(); 
    location.href = '/login';
}
