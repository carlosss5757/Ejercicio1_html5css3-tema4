window.onload = function() {

    // Foco automático en nombre al cargar
    document.getElementById("nombre").focus();

    // Validación passwords en tiempo real
    document.getElementById("password1").onkeyup = validarPasswords;
    document.getElementById("password2").onkeyup = validarPasswords;

    // Validación al pulsar el botón enviar
    document.getElementById("registro-submit").onclick = function() {
        if (validarFecha()) {
            document.getElementById("registro").submit();
        }
    };

    // Validación de campos obligatorios al perder/ganar foco
    var obligatorios = ["nombre", "email", "password1", "password2", "fechaInicio"];
    obligatorios.forEach(function(id) {
        var campo = document.getElementById(id);
        campo.onfocus = function() {
            if (campo.validity.valid && campo.value !== "") {
                campo.style.backgroundImage = "url(../imgs/valid.png)";
            } else {
                campo.style.backgroundImage = "url(../imgs/invalid.png)";
            }
        };
        campo.onblur = function() {
            if (campo.validity.valid && campo.value !== "") {
                campo.style.backgroundImage = "url(../imgs/valid.png)";
            } else {
                campo.style.backgroundImage = "url(../imgs/required.png)";
            }
        };
    });
};

function validarPasswords() {
    var p1 = document.getElementById("password1");
    var p2 = document.getElementById("password2");
    if (p1.value !== p2.value) {
        p2.setCustomValidity("Las passwords deben coincidir");
    } else {
        p2.setCustomValidity("");
    }
}

function validarFecha() {
    var fechaInicio = document.getElementById("fechaInicio");
    var fechaActual = new Date();
    var fechaIni = new Date(fechaInicio.value);
    fechaActual.setHours(0, 0, 0, 0);
    if (fechaIni < fechaActual) {
        alert("La fecha de inicio debe ser mayor o igual que la fecha actual");
        return false;
    }
    return true;
}