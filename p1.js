
function enviarFormulario(){
    const infoNavegador = obtenerInfoNavegador();
    document.getElementById("cinfo").value = infoNavegador;
    if(comprobar()==false) return false;

    return true; //Se envía

}

function comprobar(){
    const inputsLogin = document.getElementById("f_login");
    const inputsPassword = document.getElementById("f_password");
    const inputEmail = document.getElementById("f_email");
    console.log(listaInputs);

    if(check_login() == false) return false;
    if(check_password() == false) return false;
    if(check_email() == false) return false;
    if(check_dni() == false) return false;

    return true;
    
}


function check_email(email){
        const pattern = /.@.+\../g;
        if(pattern.test(email) == false){
            alert("El email no es válido");
            return false;
        }
        return true;
}

function check_dni(dni){
    const pattern = /[0-7]\d{7}[A-Za-z]/g;
    if(pattern.test(dni) == false){
        alert("El DNI no es válido");
        return false;
    }
    return true;
}

function check_password(password){
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\+\-\*])[A-Za-z\d\+\-\*]{6,12}$/;
    if(pattern.test(password) == false){
        alert("La contraseña no es válida\n\nDebe contener al menos:\n- 1 número\n- Una mayúscula y minúscula\n- Un símbolo (+,-,/,*)\n- Debe tener entre 6 y 12 caracteres");
        return false;
    }
    return true;
}

function check_login(login){
    let length = login.length;
    if(length < 4 || length > 8){
        alert("El login debe tener entre 4 y 8 caracteres");
        return false;
    }
    return true;
}

function obtenerInfoNavegador(){
    return navigator.userAgent;
}