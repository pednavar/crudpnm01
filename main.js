const form = document.getElementById('formRegister');
const codebar = document.getElementById('codebar');
const producto = document.getElementById('producto');



const tablebody = document.getElementById('tablebody');


let data = JSON.parse(localStorage.getItem('formData')) || [];

form.addEventListener('submit', function (event) {

    event.preventDefault();

    const code = codebar.value;
    const prod = producto.value;
    console.log(code.length)


    if (code && prod) {
        if (code.length == 13) {

            const newData = { code, prod };
            data.push(newData);
            saveDataToLocalStorage();
            renderTable();
            // listadesp();
            form.reset();
        } else {
            alert("ingrese un codigo valido (los codigos de barra tienen13 caracteres numericos)")
        }

    }
 else {
    alert('Favor llenar todos los campos');

}})



function saveDataToLocalStorage() {
    localStorage.setItem('formData', JSON.stringify(data));
}


function renderTable() {
    tablebody.innerHTML = '';

    data.forEach(function (item, index) {
        const row = document.createElement('tr');
        const codecell = document.createElement('td');
        const prodcell = document.createElement('td');
        const actionCell = document.createElement('td');

        const editButton = document.createElement('button')
        const deleteButton = document.createElement('button')

        codecell.textContent = item.code;
        prodcell.textContent = item.prod;

        editButton.textContent = 'EDT';
        deleteButton.textContent = 'DLT';

        editButton.classList.add('button', 'button--secundary');
        deleteButton.classList.add('button', 'button--terciary');

        editButton.addEventListener('click', function () {
            editData(index);
        })

        deleteButton.addEventListener('click', function () {
            deleteData(index);
        })

        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);

        row.appendChild(codecell);
        row.appendChild(prodcell);
        row.appendChild(actionCell);

        tablebody.appendChild(row);
        fbuscardup();

        //var el = document.getElementById("tablebody");
        // el.setAttribute("style", "border:black 7px solid");

    })
}



function editData(index) {
    const item = data[index];
    codebar.value = item.code;
    producto.value = item.prod;
    data.splice(index, 1);
    saveDataToLocalStorage();
    renderTable();
}

function deleteData(index) {
    data.splice(index, 1);
    saveDataToLocalStorage();
    renderTable();
}




function fbuscardup() {
    //imprime array data
    for (let i = 0; i < data.length; i++) {
    }
    //data 2 tiene solo los code de el array data
    const data2 = []
    //se imprimen los objetos del array
    for (let i = 0; i < data.length; i++) {
        //se guardan los codigos repetidos en data2
        data2.push(data[i].code)

    }

    //define duplicados2 como un arreglo vacio
    let duplicados2 = [];
    //permite ordenar el array data2 u guarda en temparray2
    const tempArray2 = [...data2].sort();
    //para el arreglo, lo recorre con un for toda la length y compara el presente y el siguiente, todo lo guarda en duplicados2
    for (let i = 0; i < tempArray2.length; i++) {
        if (tempArray2[i + 1] === tempArray2[i]) {
            //guarde el duplicado
            duplicados2.push(tempArray2[i])

        }
    }
    if (duplicados2.length > 0) {
        let expresionduplicada = "Existe un codigo repetido, el codigo es: "
        let expresionduplicada2 = duplicados2
        let expresionduplicada3 = expresionduplicada + expresionduplicada2
        document.getElementById("codigosrepetidos").innerHTML = ""
        document.getElementById("codigosrepetidos").innerHTML = expresionduplicada3
    } else {
        document.getElementById("codigosrepetidos").innerHTML = "Sin reportes";

    }
}





//function listadesp() {
// const tempArray3 = [...data].sort();
//let data3 = [];
//let data4 = [];
//for (let i = 0; i < tempArray3.length; i++) {

//let lista = "<option>" + data3 + "</option><option>" + "</option>"

//data4.push(tempArray3[i].prod)
// let selector1 = "<option>" + tempArray3[i].prod + "</option>"
// data3.push(selector1)

//data4.push(" :) ")






//console.log(selector1);

// console.log(data);
//console.log(data3);
//console.log(data4);
//let lista = "<form><label><select><option>1</option>" + data4 + "<option>2</option></select></label></form>";
// document.getElementById("forminout").innerHTML = data3;
// console.log(lista);






