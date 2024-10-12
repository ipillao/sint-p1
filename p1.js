const botonSubmit = document.getElementById("b_enviar");

function enviar(){
    comprobar();

}

function comprobar(){
    const listaInputsText = document.querySelectorAll("input[type='text']");
    const inputsPassword = document.getElementById("f_password");
    const inputEmail = document.getElementById("f_email");
    console.log(listaInputs);
    
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
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
}