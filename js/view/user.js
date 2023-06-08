window.onload = () => {
    fetch(`/get/users`, {
        method: 'GET',
        headers: new Headers({'Content-Type': 'application/json'})
    })
    .then(res => res.json())
    .then(data => {
        const tableBody = document.querySelector('#tableData')
        for(let i = 0; i < data.length; i++) {
            const tdata = document.createElement('tr')
            tdata.innerHTML = `
            <th>${data[i].id}</th>
            <td>${data[i].username}</td>
            <td>${data[i].role}</td>`
            tableBody.appendChild(tdata)
        }  
    })
}

const username = document.querySelector('#username')
const password = document.querySelector('#password')
const role = document.querySelector('#role')

const addBtn = document.querySelector('.add-btn')
addBtn.addEventListener('click', () =>{
    fetch('/post/add-user', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify({
            username: username.value,
            password: password.value,
            role: role.value
        })
    })
    .then((res) => res.json())
    .then((response) => {
        if(response[0].event == 'add-user error'){
            alert(`username ${username.value} is already added`)
        }
        else window.location.reload()
    })
})
