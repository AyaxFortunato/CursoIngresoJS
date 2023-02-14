//Ayax Fortunato
function mostrar()
{
	//tomo el mes
	let mesDelAnio;
	let mensaje;

	mesDelAnio= document.getElementById("txtIdMes").value;

	switch(mesDelAnio)
	{
		case"Junio":
		    "Julio";
			"Agosto";
			"Septiembre";
			mensaje = "Invierno";
			break;

		case"Septiembre":
			"Octubre";
			"Noviembre";
			"Diciembre";
			mensaje = "Primavera";
			break;

		case"Diciembre":
			"Enero";
			"Febrero";
			"Marzo";
			mensaje = "Verano";
			break;

		case"Marzo":
			"Abril";
			"Mayo";
			"Junio";
			mensaje = "Otoño";
			break;
	}	//Termina Switch
			console.log(mensaje);




}//FIN DE LA FUNCIÓN