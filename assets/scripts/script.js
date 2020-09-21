/* FUNCIONA BIEN 19-09-20 - 16:19 */
const mensajeNombre = document.getElementById('mensajeAlertaNombre')
console.log(mensajeNombre)

const mensajeAlertaTyC = document.getElementById('mensajeAlertaTyC')
console.log(mensajeAlertaTyC)

const mensajeAlertaCorreo = document.getElementById('mensajeAlertaCorreo')
console.log(mensajeAlertaCorreo)

const mensajeAlertapwd = document.getElementById('mensajeAlertaPwd')
console.log(mensajeAlertapwd)

const listaDeUsuarios = []

function validarFormulario(e){
    e.preventDefault()
    let inputName = document.getElementById('name').value
    console.log(inputName)

    const inputTyC = document.getElementById('inputTyC')
    console.log(inputTyC)

    let inputCorreo = document.getElementById('correo').value
    console.log(inputCorreo)

    let inputPwd = document.getElementById('pwd').value
    console.log(inputPwd)
 
 
    if(inputPwd == ''){
        mensajeAlertapwd.innerText = "Por favor llena el campo Contraseña"
        //inputCorreo.classlist.add(BgcAlert)
        swal("Error!", "Falta la contraseña !", "error");
        }
 

    if(inputName == ''){
    mensajeNombre.innerText = "Por favor llena el campo Nombre"
    //inputName.classlist.add(BgcAlert)
    swal("Error!", "Falta el campo Nombre!", "error");
    }
    if(inputTyC.checked ==false){
        mensajeAlertaTyC.innerText = 'Debes Aceptar Terminos'
        swal("Error!", "Falta Aceptar terminos!", "error");
        
    }
    if(inputCorreo == ''){
        mensajeAlertaCorreo.innerText = "Por favor llena el campo Correo"
        //inputCorreo.classlist.add(BgcAlert)
        swal("Error!", "Falta El correo !", "error");
        }

        const toDoUsuario ={
            email: inputCorreo,
            pwd: inputPwd
            
        }
    
    //    listaDeUsuarios.push(toDoUsuario)
        console.log(toDoUsuario)
     //   console.log(listaDeUsuarios)
    
        guardarEnStorage(toDoUsuario)




    if(inputCorreo != "" && inputTyC.checked && inputPwd != ""  ) {
        swal("Muy Bien!", "Registro Exitoso!", "Success");
        setTimeout(()=>{window.location = './assets/pages/login.html'},2000)
    }

    
}


const guardarEnStorage = (toDoUsuario)=>{
    if(localStorage.getItem('toDoUsuarios') == null){
            listaDeUsuarios.push(toDoUsuario)
            const usuariosString = JSON.stringify(listaDeUsuarios)
            localStorage.setItem('toDoUsuarios', usuariosString)
    }else{
        
        //const listaEnStorage = JSON.parse(localStorage.getItem('toDoUsuarios'))

        const listaEnStorage = JSON.parse(localStorage.getItem('toDoUsuarios'))

        console.log(listaEnStorage)
        listaEnStorage.push(toDoUsuario)
        const usuariosString = JSON.stringify(listaEnStorage)
        localStorage.setItem('toDoUsuarios', usuariosString)
    }
}

