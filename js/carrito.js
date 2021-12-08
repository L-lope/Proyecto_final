// Variables

const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
const CartProduct = document.querySelector('.content-cart')
const buttonComprar = document.querySelector('.button-comprar');
const contentCart = document.querySelector('.content-cart')
let articulosCarrito = [];
 if(CartProduct){
	  console.log(CartProduct)
 }

// Listeners
if(buttonComprar) {
 buttonComprar.addEventListener('click', buttonClick)
}

function buttonClick() {
 window.location.href = 'expotec/comprar/';
}
cargarEventListeners();
function cargarEventListeners() {
// Dispara cuando se presiona "Agregar Carrito"
if(listaCursos) {
	  listaCursos.addEventListener('click', agregarCurso);
}
 // Cuando se elimina un curso del carrito
 if(carrito) {
	  carrito.addEventListener('click', eliminarCurso);
 }
 if(vaciarCarritoBtn) {
	  vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
 }
 // Al Vaciar el carrito
 

 document.addEventListener('DOMContentLoaded', () => {
	  articulosCarrito = JSON.parse( localStorage.getItem('carrito') ) || []  ;
	  // console.log(articulosCarrito);
	  carritoHTML();
 });
}



function agregarCurso(e) {
e.preventDefault();
// Delegation para agregar-carrito
if(e.target.classList.contains('agregar-carrito')) {
	 const curso = e.target.parentElement.parentElement;
	 // Enviamos el curso seleccionado para tomar sus datos
	 leerDatosCurso(curso);
}
}
// Lee los datos del curso
function leerDatosCurso(curso) {
const infoCurso = {
	 imagen: curso.querySelector('.image-product').src,
	 titulo: curso.querySelector('.title').textContent,
	 precio: curso.querySelector('.price').textContent,
	 id: curso.querySelector('a').getAttribute('data-id'), 
	 cantidad: 1
}


//     if( articulosCarrito.some( curso => curso.id === infoCurso.id ) ) { 
//          const cursos = articulosCarrito.map( curso => {
//               if( curso.id === infoCurso.id ) {
//                    curso.cantidad++;
//                     return curso;
//                } else {
//                     return curso;
//             }
//          })
//          articulosCarrito = [...cursos];
//     }  else {
//          articulosCarrito = [...articulosCarrito, infoCurso];
//     }

//     console.log(articulosCarrito)

//     carritoHTML();
const existe = articulosCarrito.some(curso => curso.id === infoCurso.id)
if(existe) {
	 const curso = articulosCarrito.map( curso => {
		  if(curso.id === infoCurso.id) {
		   curso.cantidad++;
		   return curso;
		  } else {
		   return curso;
		  }
	 })
	 articulosCarrito = [...curso];
} else {
 articulosCarrito = [...articulosCarrito, infoCurso];
}
console.log(articulosCarrito)

carritoHTML();
}
function eliminarCurso(e) {
 e.preventDefault();
 if(e.target.classList.contains('borrar-curso') ) {
	  const cursoId = e.target.getAttribute('data-id');

	  articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId)
	  console.log(articulosCarrito)

	  carritoHTML();
 }

}

function carritoHTML() {
 vaciarCarrito();
articulosCarrito.forEach(curso => {
	 const row = document.createElement('tr');
	 row.innerHTML = `
		  <td class="image_product">  
			   <img src="${curso.imagen}" width=100>
		  </td>
		  <td>${curso.titulo}</td>
		  <td>${curso.precio}</td>
		  <td>${curso.cantidad} </td>
		  <td>
			   <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
		  </td>
	 `;
	  if(contenedorCarrito) {
		   contenedorCarrito.appendChild(row);
	  }
	  
});
sincronizarStorage();
}    
function sincronizarStorage() {
 localStorage.setItem('carrito', JSON.stringify(articulosCarrito))
}
// Elimina los cursos del carrito en el DOM
function vaciarCarrito() {
 // forma lenta
 // contenedorCarrito.innerHTML = '';


 // forma rapida (recomendada)
 while(contenedorCarrito.firstChild) {
	  contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
