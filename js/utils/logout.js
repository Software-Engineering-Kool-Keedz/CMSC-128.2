const logoutBtn = document.querySelector('#logout')
logoutBtn.addEventListener('click', () => {
    alert('Logging out');
    sessionStorage.clear();
    location.href = '/login';
})