//Ayax Fortunato
function mostrar()
{
let destino;
let mensaje;

destino = document.getElementById("txtIdDestino").value;

switch(destino){
	case "Bariñoche":
	case "Ushuaia":
		mensaje = "En este lugar hace frio";
		break
	case "Catamarca":
	case "Mar del Plata":
		mensaje = "En este lugar hace calor";
		break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN