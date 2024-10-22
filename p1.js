

const box_marcarTodas = document.getElementById('f_marcar_todas');
box_marcarTodas.addEventListener("change", function(){
    if(this.checked){
        marcarTodas();
    }
} );


document.getElementById("f_desmarcar_todas").addEventListener("change", function(){
    if(this.checked){
        desmarcarTodas();
    }
})




//-----------COMPROBAR Y ENVIAR FORMULARIO----------------------------------

document.getElementById('formulario').addEventListener("submit", function(event){
    event.preventDefault(); //Evita que se envie el formulario

    if(enviarFormulario() == false) return false;

    this.onsubmit();    //Envía el formulario
    return;
})


function enviarFormulario(){
    const infoNavegador = obtenerInfoNavegador();
    document.getElementById("cinfo").value = infoNavegador;
    if(comprobar()==false) return false;


    const form = document.getElementById("formulario");

    const fMethodGet = document.getElementById("f_get");
    const fMethodPost = document.getElementById("f_post");

    if(fMethodGet.checked == true){
        form.setAttribute('method', 'GET');
    }

    if(fMethodPost.checked == true){
        form.setAttribute('method', 'POST');
    }

    const fEncodeUrl = document.getElementById("f_urlencode");
    const fEncodeMultipart = document.getElementById("f_multipart");

    if(fEncodeUrl.checked == true){
        form.setAttribute('enctype', 'application/x-www-form-urlencoded');
    }
    if(fEncodeMultipart.checked == true){
        form.setAttribute('enctype', 'multipart/form-data');
    }


    return true; //Se envía

}

function comprobar(){
    const inputsLogin = document.getElementById("f_login");
    const inputsPassword = document.getElementById("f_password");
    const inputEmail = document.getElementById("f_email");
    const inputDni = document.getElementById("f_dni")

    console.log("ejecuta comprobar...")

    if(check_login(inputsLogin.value) == false) return false;
    console.log("ha pasado login")
    if(check_password(inputsPassword.value) == false) return false;
    console.log("ha pasado password");
    if(check_email(inputEmail.value) == false) return false;
    if(check_dni(inputDni.value) == false) return false;

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
    console.log(length);
    if(length < 4 || length > 8){
        alert("El login debe tener entre 4 y 8 caracteres");
        return false;
    }
    return true;
}

function obtenerInfoNavegador(){
    return navigator.userAgent;
}

//--------CONTROL INTERNO DEL FORMULARIO---------

function marcarTodas(){
    let boxMarcarTodos = document.getElementById("f_marcar_todas");
    if(boxMarcarTodos.checked == true){
        let checkTodos = Array.from(document.querySelectorAll("input[type='checkbox']"));
        checkTodos = checkTodos.filter(cb => cb.id != 'f_marcar_todas' && cb.id != 'f_desmarcar_todas');
        
        checkTodos.forEach(cb => cb.checked = true);
        boxMarcarTodos.checked = false;

        return;
    }
}

function desmarcarTodas(){
    let boxDesmarcarTodos = document.getElementById("f_desmarcar_todas");
    let checkTodos = Array.from(document.querySelectorAll("input[type='checkbox']"));
    checkTodos = checkTodos.filter(cb => cb.id != 'f_marcar_todas' && cb.id != 'f_desmarcar_todas');

    checkTodos.forEach(cb => cb.checked = false);
    boxDesmarcarTodos.checked = false;
    
    return;
}