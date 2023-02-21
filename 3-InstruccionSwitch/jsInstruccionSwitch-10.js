//Ayax Fortunato
function mostrar()
{
	let destino;
	let estacionAnio;
	let mensaje;

	destino = document.getElementById("txtIdDestino").Value;
	estacionAnio = document.getElementById("txtIdEstacion").Value;
	
	switch(estacionAnio)
	{
		case "Invierno":
			if(destino == "Bariloche"){
				mensaje = "Se viaja";
			}else{
				mensaje = "No se viaja";
			}
			break;
		case "Verano":
			if(destino == "Mar del plata" || destino == "Catamarca"){
			mensaje = "Se viaja"
			}else{
			mensaje = "No se viaja";
			}
			break;
		case "Otoño":
			mensaje = "Se viaja";
			break;
		case "Primavera":
			if(destino == "Mar del plata" || destino == "Cataratas" || destino == "Cordoba"){
				mensaje = "Se viaja";
			}else{
				mensaje = "No se viaja";
			}	
			break;	}
alert(mensaje);
}//FIN DE LA FUNCIÓN