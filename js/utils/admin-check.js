if(sessionStorage.getItem('role') != 'administrator'){
    console.log(sessionStorage.getItem('role'))
    if(sessionStorage.getItem('role') === null){
        alert('You must be logged in as administrator to access this page.');
        sessionStorage.clear();
        location.href = '/login';
    }
    else{
        alert('You must be an administrator to access this page.');
        location.href = '/';
    }
}