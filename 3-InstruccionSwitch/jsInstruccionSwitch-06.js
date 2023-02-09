function mostrar()
{
	//tomo la hora
	let hora;
	let mensaje;

	hora = document.getElementById("txtIdHora").value;
	if(hora >= 0 && hora <= 24){
		switch(hora)
		{
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
				mensaje = "Es de mañana"
				break;
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
				mensaje = "Es de tarde";
				break;
			default
				mensaje = "Es de noche";
		}
		}else{
			mensaje = "La hora no existe";
		}




	}
	console.log(mensaje);
}//FIN DE LA FUNCIÓN