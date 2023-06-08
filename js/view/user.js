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
            if(data[i].role != 'administrator'){
                const btn = document.createElement('button')
            btn.innerHTML = 'Delete'
            btn.className = 'delete-btn'
            btn.addEventListener('click', () => {
                fetch(`/delete/user/${data[i].id}`, {
                    method: 'DELETE',
                    headers: new Headers({'Content-Type': 'application/json'})
                })
                .then((res) => res.json())
                .then((data) => {
                    if(data[0].event === 'delete success') {
                        alert('deleted successfully')
                        window.location.reload()
                    }
                    else alert('failed to delete')
                })
            })
            const td = document.createElement('td')
            td.appendChild(btn)
            tdata.appendChild(td)
            }
            tableBody.appendChild(tdata)
        }  
    })
}

const usernamed = document.querySelector('#usernameA')
const password = document.querySelector('#password')
const role = document.querySelector('#role')

const addBtn = document.querySelector('.add-btn')
addBtn.addEventListener('click', () =>{
    fetch('/post/add-user', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify({
            username: usernamed.value,
            password: password.value,
            role: role.value
        })
    })
    .then((res) => res.json())
    .then((response) => {
        if(response[0].event == 'add-user error'){
            alert(`username ${usernamed.value} is already added`)
        }
        else window.location.reload()
    })
})
