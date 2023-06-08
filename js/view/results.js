const data = [
    { column1: 'Value 1', column2: 'Value 2'},
    { column3: 'Value 3', column4: 'Value 4'}
];

const table = document.getElementById('myTable');

data.forEach(item =>{
    const row = document.createElement('tr');

    const cell1 = document.createElement('td');
    cell1.textContent = item.column1;

    const cell2 = document.createElement('td');
    cell2.textContent = item.column2;

    const cell3 = document.createElement('td');
    cell3.textContent = item.column3;

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);

    table.querySelector('tbody').appendChild(row);

});