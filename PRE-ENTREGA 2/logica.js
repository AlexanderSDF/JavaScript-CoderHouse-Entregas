//! SEGUNDA PRE ENTREGA
console.log("Productos Disponibles:");
console.table(productos);
let contenedorProds = document.getElementById('misprods');

//Función para poder filtrar por precio
function filtrarPorPrecio(precio){
    const filtrados = productos.filter((prod)=>prod.precio <= precio);
    return filtrados;
}

//dato de entrada
let precioMax = parseFloat(prompt('Ingresa el precio máximo que puedes abonar 0-para salir'));

while(precioMax != 0){
    if(precioMax < 0){
        alert('Ingrese un numero valido');
    }else{
        //ya tenemos un numero valido
        const prodsFiltrados = filtrarPorPrecio(precioMax);
        console.log("Productos Filtrados:");
        console.table(prodsFiltrados);
        renderizarProductos(prodsFiltrados);
        break
    }
    precioMax = parseFloat(prompt('Ingresa el precio máximo que puedes abonar 0-para salir'));
}

//DOM
function renderizarProductos(listaProds){
    //vaciamos en contenedor para evitar duplicados
    contenedorProds.innerHTML='';
    //cargamos las cartas de los productos solicitados
    for(const prod of listaProds){
        contenedorProds.innerHTML+=`
            <div class="card col-sm-2">
                <img class="card-img-top" src=${prod.foto} alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${prod.nombre}</h5>
                    <p class="card-text">$ ${prod.precio}</p>
                    <button class="btn btn-primary">Comprar</button>
                </div>
            </div>
        `;
    }
}

//renderizarProductos(productos);