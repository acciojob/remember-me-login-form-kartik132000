function createTable() {
    let rn = window.prompt("Input number of rows");
    if (rn === null || rn.trim() === "" || isNaN(rn) || Number(rn) <= 0) return;

    let cn = window.prompt("Input number of columns");
    if (cn === null || cn.trim() === "" || isNaN(cn) || Number(cn) <= 0) return;

    rn = Number(rn);
    cn = Number(cn);
    
    let table = document.getElementById("myTable");
    table.innerHTML = "";

    for (let i = 0; i < rn; i++) {
        let row = table.insertRow();
        for (let j = 0; j < cn; j++) {
            let cell = row.insertCell();
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}