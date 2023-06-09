const usersbutton = document.querySelector('#adminonly');
if(sessionStorage.getItem('role') != 'administrator') usersbutton.hidden=true;