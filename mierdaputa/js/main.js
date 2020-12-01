//BBDD USUARIOS
listaUsuarios =
        [
            //nombre, apellido, contraseña, email, universidad, carrera
            ["Javier", "Martinez Prieto", "javiermartinez", "jmartinez@alumnos.uai.cl", "Universidad Adolfo Ibáñez", "Derecho"],
            ["Francisca", "Álvarez Sanhueza", "franciscaalvarez","franalvarez@alumnos.uchile.cl", "Universidad de Chile", "Medicina"],
        ];

//LOG IN

$("#btnIniciarSesion").click(function(){
    let email = "";
    let contrasena = "";
    let acceso = false;

    email = $("#emailInput")[0].value;
    contrasena = $("#contrasenaInput")[0].value;
    acceso =validarCredenciales(email, contrasena);

    validarAcceso(acceso);
})

function validarAcceso(acceso) {
    if(acceso == false){
        alert("Email y/o contraseña inválido. Intente nuevamente.");
    }
    else{
        window.location = "inicio.html";
    }
}

function validarCredenciales(email, contrasena) {
    let acceso = false;

    for(let i = 0; i < listaUsuarios.length; i++) {
        if(email == listaUsuarios[i][3] && contrasena == listaUsuarios[i][2]){
            acceso = true;
            localStorage.setItem("nombresActivo", listaUsuarios[i][0]);
            localStorage.setItem("apellidoActivo", listaUsuarios[i][1]);
            localStorage.setItem("universidadActivo", listaUsuarios[i][4]);
            localStorage.setItem("carreraActivo", listaUsuarios[i][5]);
        }
    }

    return acceso;
}

//REGISTRO
$("#registroBtn").click(function agregarRegistro(){
    let nombre =  $("#nombre")[0].value;
    let apellido = $("#apellido")[0].value;
    let email = $("#gmail")[0].value;
    let universidad = $("#universidad")[0].value;
    let carrera = $("#carrera")[0].value;
    let pass = $("#pass")[0].value;
    listaUsuarios.push([nombre,apellido,email,universidad,carrera,pass]);
    alert("Registro realizado con éxito.")
  });
//INFO ALUMNO
function escribirInfoAlumno(){
    var nombres = localStorage.getItem("nombresActivo");
    var apellidos = localStorage.getItem("apellidoActivo");
    var universidad = localStorage.getItem("universidadActivo");
    var carrera = localStorage.getItem("carreraActivo");

    var foto = document.createElement("img");
    foto.setAttribute("src", "media/alumnos/"+ nombres +".jpg");
    foto.setAttribute("width", "300");
    document.getElementById("infoAlumno").appendChild(foto);

    var parrafo = document.createElement("p");
    parrafo.innerHTML =
    "<br>" +
    "<strong>Nombre:</strong> "+ nombres + " " + apellidos + "<br>" + 
    "<strong>Universidad:</strong> " + universidad + "<br>" +
    "<strong>Carrera:</strong> " + carrera + "<br>"
    document.getElementById("infoAlumno").appendChild(parrafo)};

    function cerrarSesion(){
        window.location = "index.html"
    };