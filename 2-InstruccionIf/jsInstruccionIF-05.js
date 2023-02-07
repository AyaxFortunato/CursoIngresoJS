//Ayax Fortunato
// Al ingresar una edad solo debemos informar si la persona NO es adolescente.
function mostrar()
{
	let edad;
	let mensaje;
	edad = parseInt(document.getElementById("txtIdEdad").value);
	if(edad >= 13 || edad <= 17);
	{ 
		mensaje = "No es adolecente"
		alert(mensaje);
	}

}//FIN DE LA FUNCIÓN