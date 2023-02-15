//Ayax Fortunato
function mostrar()
{
	//tomo el mes
	let mesDelAño;
	let mensaje;

	mesDelAño = document.getElementById("").value;
	switch(mesDelAño){
		case "Febrero":
			mensaje = "Si teiene 28 dias"
			break

		case "Enero":
			mensaje = "Si tiene 31 dias"	
			break

		case "Marzo":
			mensaje = "Si tiene 31 dias"
			break

		case "Abril":
			mensaje = "Si tiene 30 dias"
			break

		case "Mayo":
			mensaje = "Si tiene 31 dias"
			break

		case "Junio":
			mensaje = "Si tiene 30 dias"
			break

		case "Julio":
			mensaje = "Si tiene 31 dias"
			break

		case "Agosto":
			mensaje = "Si tiene 31 dias"
			break

		case "Septiembre":
			mensaje = "si tiene 30 dias"
			break

		case "Octubre":
			mensaje = "Si tiene 31 dias"
			break

		case "Noviembre":
			mensaje = "Si tiene 30 dias"
			break

		case "Diciembre":
			mensaje = "Si tiene 31 dias"
			break
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN