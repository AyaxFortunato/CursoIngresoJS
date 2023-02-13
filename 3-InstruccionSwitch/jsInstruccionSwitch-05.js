function mostrar()
{
	//tomo la hora
	let hora;
	let mensaje;

	hora = document.getElementById("txtIdHora").value;

	switch(hora){
		case (hora >= 7 && <= 11 )
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		break;
		default:
		mensaje = "Es de mañana"
	}
	
	alert(mensaje)



}//FIN DE LA FUNCIÓN