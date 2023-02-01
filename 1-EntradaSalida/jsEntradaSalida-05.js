/*Ayax Fortunato
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombrePersona;
	let años;
	let mensaje;

	nombrePersona = document.getElementById("txtIdNombre").value;

	años = document.getElementById("txtIdEdad").value;

	mensaje = "Su nombre es " + nombrePersona + " y tiene " + años + " años";

	alert(mensaje);
}

