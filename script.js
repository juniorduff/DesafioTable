var produtos = [
    {
        nome: "Maçã",
        quantidade: 25
    },
    {
        nome: "Banana",
        quantidade: 12
    },
    {
        nome: "Cenoura",
        quantidade: 13
    }
];


const btn = document.querySelector("button");
const tr = document.createElement("tr");
const query = document.querySelectorAll("button");
const btnAddProd = document.getElementById("btnProd");
const tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

console.log(btnAddProd);

btn.addEventListener("click", addtab);
btnAddProd.addEventListener("click", addRow);

function addtab() {
    let body = '';
    for (let prod of produtos) {
        body += `<tr><td>${prod.nome}</td><td>${prod.quantidade}</td></tr>`;
    }
    tableRef.innerHTML = body;
}

function addRow() {
    const produto = {
        nome: document.getElementById("nome").value,
        quantidade: document.getElementById("quantidade").value
    };
    produtos.push(produto);
    console.log(produto);
    const tr = `<tr><td>${produto.nome}</td><td>${produto.quantidade}</td></tr>`;
    tableRef.innerHTML += tr;
}



