//adquirimos los elementos del DOM donde vamos a ingresar los datos de usuario:
//declaramos constantes que son variables que no cambian en el tiempo//
const form = document.getElementById('formRegister');
const codebar = document.getElementById('codebar');
const producto = document.getElementById('producto');



//donde vamos a pintar los datos de Usuario//
const tablebody = document.getElementById('tablebody');

// Para almacenar estos datos en el localStore, al actualizar, no se borre la info:
// Se crea una variable "let" que es dinamica, con el nombre "data" porque será nuesta base de datos
// Json.parse porque esos datos los adquirimos y convertimos en objetos almacenables como los arrays
// Guardamos en localStore en el navegador bajo la función formData() que son los datos de nuestro formulario:

let data = JSON.parse(localStorage.getItem('formData')) || [];

// Creamos funcion para que al evento "submit" click al boton (agregar), almacene la información en memoria
form.addEventListener('submit', function (event) {

    //elimina comportamientos por defecto del formulario
    event.preventDefault();

    const code = codebar.value;
    const prod = producto.value;


    if (code && prod) {
        const newData = { code, prod };
        data.push(newData);
        saveDataToLocalStorage();
        renderTable();
        listadesp();

        //Función para borrar y volver a iniciar de JavaScript no se necesita crear
        form.reset();
    } else {
        alert('Favor llenar todos los campos');
    }
})

//Función para guardar los datos del formulario:
function saveDataToLocalStorage() {
    localStorage.setItem('formData', JSON.stringify(data));
}


//Función para renderizar o actualizar el formulario, limpia el contenido de la tabla para nuevo registro:
function renderTable() {
    tablebody.innerHTML = '';

    //Para generar todos los registros del formulario en una tabla necesitamos iterar el "data" (toda la información) y crear la tabla
    // compuesta de un item e index, cada elemento tendrá su puesto en la tabla.
    data.forEach(function (item, index) {
        const row = document.createElement('tr');
        const codecell = document.createElement('td');
        const prodcell = document.createElement('td');
        const actionCell = document.createElement('td');

        // Dentro de la celda "action" o acciones creamos dos botones un editar y otro eliminar.
        const editButton = document.createElement('button')
        const deleteButton = document.createElement('button')

        // Agregamos el contenido de la celda, texto para name y email.
        codecell.textContent = item.code;
        prodcell.textContent = item.prod;

        // Agregamos el texto en los botones.    
        editButton.textContent = 'EDT';
        deleteButton.textContent = 'DLT';

        // asignamos las clases a los botones que aparecen en la celda "acciones".
        editButton.classList.add('button', 'button--secundary');
        deleteButton.classList.add('button', 'button--terciary');

        // Eventos de escucha con funciones para los botones de la celda "acciones" editar y eliminar.
        editButton.addEventListener('click', function () {
            editData(index);
        })

        deleteButton.addEventListener('click', function () {
            deleteData(index);
        })

        // Agregamos los botones a la celda de acciones.
        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);

        // Creamos las filas o celdas para los textos que capture en la data:
        row.appendChild(codecell);
        row.appendChild(prodcell);
        row.appendChild(actionCell);

        // Creamos las filas para nuestro tablebody "la que aparece con la data":
        tablebody.appendChild(row);
        fbuscardup();


    })
}



// Confección de las funciones de editar y eliminar
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
        document.getElementById("codigosrepetidos").innerHTML = ""
        document.getElementById("codigosrepetidos").innerHTML = "Existe un codigo repetido () , debe ser editado o eliminado"
    } else {
        document.getElementById("codigosrepetidos").innerHTML = "Sin reportes";

    }
}





function listadesp() {
    const tempArray3 = [...data].sort();
    let data3 = [];
    //let data4 = [];
    for (let i = 0; i < tempArray3.length; i++) {

        let lista = "<option>" + data3 + "</option><option>" + "</option>"

        //data4.push(tempArray3[i].prod)
        let selector1 = "<option>" + tempArray3[i].prod + "</option>"
        data3.push(selector1)

        //data4.push(" :) ")






        console.log(selector1);

       // console.log(data);
        console.log(data3);
        //console.log(data4);
        //let lista = "<form><label><select><option>1</option>" + data4 + "<option>2</option></select></label></form>";
        document.getElementById("forminout").innerHTML = data3;
       // console.log(lista);



    }


}

















