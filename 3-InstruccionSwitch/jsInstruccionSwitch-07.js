//Ayax Fortunato
function mostrar()
{
	let ciudad;
	let mensaje;

	ciudad = document.getElementById("txtIdDestino").value;

	switch(ciudad){
		case "bariloche":
		case "Ushuaia":
			mensaje ="Usted esta en el Oeste"
				break
		case "Catamarca":
			mensaje = "Usted esta en el Sur"
				break
		case "Mar del Plata":
			mensaje = "Usted esta en el Norte"
				break	
	}
		alert(mensaje);
}//FIN DE LA FUNCIÓN