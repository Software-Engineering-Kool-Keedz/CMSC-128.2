const recordno = sessionStorage.getItem('record_no');

window.onload = () => {
    fetch(`/get/record/${recordno}`, {
        method: 'GET',
        headers: new Headers({'Content-Type': 'application/json'})
    })
    .then(res => res.json())
    .then((data) => {
        //console.log(data)
    })
}