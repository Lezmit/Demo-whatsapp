window.addEventListener("load", cargarPagina);
var ingreseMensaje = document.getElementById("mensajes");
var mostarMensaje = document.getElementById("conversacion");
var contentUser = document.getElementById("contentUser");
var escogerUsuario = document.getElementsByClassName("avatar");
var clickUsuarios = document.getElementsByClassName("w-recent-chats")[0];
	
function cargarPagina() {
    ingreseMensaje.addEventListener("keydown", imprimirTexto);
	clickUsuarios.addEventListener("click",listaUsuario);
}
function imprimirTexto(e) {
   	if (e.keyCode==13) {
	    var divcontenedor = document.createElement("div");
	    var divcontenido = document.createElement("div");
	    var ptexto = document.createElement("p");
	    var divHora = document.createElement("div");
	    ptexto.textContent=ingreseMensaje.value;
	    divcontenido.classList.add("w-message-text");
	    divcontenido.appendChild(ptexto);
	    var fecha = new Date();//modificar a hora
		var fechaActual = fecha.getHours() +":"+ fecha.getMinutes();
	    divHora.textContent=fechaActual;
	    divHora.classList.add("time");
	    divcontenido.appendChild(divHora);
	    divcontenedor.appendChild(divcontenido);
	    divcontenedor.classList.add("w-message-out","w-message");
	    mostarMensaje.appendChild(divcontenedor);
	    ingreseMensaje.value=" ";
		}
} 

 function listaUsuario(){ 
	 for (var i = 0; i < escogerUsuario.length; i++) {
		var title = document.getElementsByClassName("w-contact-name")[i];
		var imagenChat = document.getElementsByTagName("img")[i];
		
	 }

}

