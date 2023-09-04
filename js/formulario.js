function validar(){
    var nombre, email, telefono, comentario, expresion;
    nombre = document.getElementById("nombre").value; 
    email = document.getElementById("email").value; 
    telefono = document.getElementById("telefono").value; 
    comentario = document.getElementById("comentario").value; 

    expresion = /\w+@\w+\.+[a-z]/;

    if(nombre === "" || email === "" || telefono === "" || comentario === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if(nombre.length>30) {
        alert("El nombre es muy largo"); 
        return false;
    } 
    else if(email.length>30) {
        alert("El email es muy largo"); 
        return false;
    } 
    else if(!expresion.test(correo)) {
        alert("El correo no es valido");
        return false;
    }
    else if(telefono.length>10) {
        alert("El telefono es muy largo"); 
        return false;
    } 
    else if(isNaN(telefono)) {
        alert("El teléfono no es un número");
        return false;
    }
    else if(comentario.length>200) {
        alert("El comentario debe estar más sintetizado"); 
        return false;
    } 
}