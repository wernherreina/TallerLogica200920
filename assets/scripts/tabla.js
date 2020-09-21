function setLetter(letter) {
  document.getElementById('letra').innerHTML = document.getElementById('letra').innerHTML + letter;
}

function teclaBorrar() {
  //document.getElementById('letra').innerHTML = document.getElementById('letra').innerHTML + letter;
  const teclaBorrar = document.getElementById('letra')
  teclaBorrar.innerHTML=""
}
const formRegistro =document.getElementById('formRegistro')

const listaDeUsuarios = []

formRegistro.addEventListener('submit', (e)=>{
    e.preventDefault()

    const inputName = document.getElementById('name').value

    const tarea ={
        nombre: inputName
    }
    
    listaDeUsuarios.push(tarea)
    console.log(listaDeUsuarios)
 
    const tabla = document.getElementById('tablaListas')

    tabla.innerHTML += `
    <tr>
         <td>${tarea.nombre}</td>

   `

   swal("Lista Ingresada!", "Dale Click en Refrescar!", "success"); 

})

function refresh(){
    window.location.reload("Refresh")
  }

  function limpiar(){
    const tabla = document.getElementById('tablaListas')
    tabla.innerHTML=""
  }


const listaDeTareas = []

 const agregarTarea =document.getElementById('agregarTarea')

  agregarTarea.addEventListener('click', (e)=>{
    e.preventDefault()

  const textLetra = document.getElementById('letra').innerHTML
 
  const tarea1 ={
      tareaTxt: textLetra
  }
  
  listaDeTareas.push(tarea1)
  console.log(listaDeTareas)

  const tablaTareas = document.getElementById('tablaTareas')

  tablaTareas.innerHTML += `
  <tr>
       <td>${tarea1.tareaTxt}</td>

 `

 swal("Tarea Ingresada!", "Dale Click en Refrescar!", "success"); 
 
 const Borrar = document.getElementById('letra')
 Borrar.innerHTML=""

}
  )

//Funciona OK hasta las 20-09-20 15:14