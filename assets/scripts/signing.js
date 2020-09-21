function validarFormulario(evento){
    evento.preventDefault()
    const inputUser = document.getElementById('user')
    const inputPsw = document.getElementById('psw')

    if (inputUser.value != '' && inputPsw.value != '') {
       const testUser = inputUser
       const testPwd = inputPsw

        const usuarioGuardadosEnStorage =()=>{
            const usuariosEnStorage = JSON.parse(localStorage.getItem('toDoUsuarios'))

            for (let i = 0; i < usuariosEnStorage.length; i += 1) {
                if (usuariosEnStorage[i].email == inputUser.value &&  usuariosEnStorage[i].pwd == inputPsw.value) {
                    console.log(inputUser.value)
                    console.log(usuariosEnStorage[i].email)
                    swal("Muy bien", "Información correcta", "success")
                    setTimeout(() => {
                        window.location = 'tabla.html'
                    }, 2000)
                } else {
                    swal("Error", "Usuario y COntraseña Incorrecto", "error")
                }
            }
        }
        usuarioGuardadosEnStorage()
    } else {
        swal("error", "Hay campos sin diligenciar", "error")
    }
}



