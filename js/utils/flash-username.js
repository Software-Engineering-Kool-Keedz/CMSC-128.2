const usernam = document.querySelector('#username')
usernam.innerHTML = `${sessionStorage.getItem('user')}`