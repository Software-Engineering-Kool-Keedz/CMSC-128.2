const logoutBtn = document.querySelector('#logout-btn')

logoutBtn.addEventListener('click', () => {
    sessionStorage.clear()
    location.href = '/login'
})