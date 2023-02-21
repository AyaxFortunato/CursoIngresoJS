//Ayax Fortunato
function mostrar()
{
	let estacionIngresada;
	let destino;
	let mensaje;
	let porcentaje;
	let precio;
	let precioFinal;

	precio = 15000

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacionIngresada){
		case "Invierno":
			switch(destino){
				case"Bariloche":
				porcentaje = 20;
				break;
			case "Cataratas":
			case "Cordoba":
				porcentaje = -10;
				break;
			case "Mar del plata":
				porcentaje = -20;
				break;
			}
			break;
		case "Verano":
			switch(destino){
				case "Bariloche":
					porcentaje = -20;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = 10;
					break;
				case "Mar del plata":
					porcentaje = 20;
					break;
			}
			break;
			case "Otoño":
			case "Primavera":
				switch(destino){
					case "Bariloche":
					case "Cataratas":
					case "Mar del plata":
						porcentaje = 10;
						break;
					case "Cordoba":
						porcentaje = 0;
						break
				}
				break;
	}		
	precioFinal = precio + (precio* porcentaje / 100);
	mensaje = "El precio del viaje es de" + precioFinal;
	alert(mensaje);

}//FIN DE LA FUNCIÓN