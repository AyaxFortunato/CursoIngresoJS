//Ayax Fortunato
//al seleccionar un mes informar.
//si es Enero: "que comiences bien el año!!!."
//si es Marzo: "a clases!!!."
//si es Julio: "se vienen las vacaciones!!!."
//si es Diciembre: "Felices fiesta!!!."

function mostrar()
{
	//tomo el mes
	let mesDelAnio;
	let mensaje;

	mesDelAnio= document.getElementById("txtIdMes").value;

	switch(mesDelAnio)
	{
		case "Enero":
			mensaje = "Que comienses bien el año";
			break;

		case "Marzo":
			mensaje = "A clases!!!";
			break;

		case "julio":
			mensaje = "Se vienen las vacaciones";
			break;

		case "Diciembre":
			mensaje = "Felices Fiestas!!!";
			break;

		default:
			mensaje = "Sos aburrido"
	}	//Termina Switch
			console.log(mensaje);


	//if(mesDelAño == "Enero")
	//	{
	//		mensaje ="Que comienses bien el año"
	//	}
	//	else{
	//		if(mesDelAño == "Marzo")
	//			{
	//				mensaje = "A clases!!!"
	//			}
	//			else{
	//				if(mesDelAño == "Julio")
	//				{
	//					mensaje = "Se vienen las vacaciones!!!"
	//				}
	//			else{
	//				if(mesDelAño == "Diciembre")
	//				{
	//					mensaje = "Felices Fiestas!!!"
	//				}
	//			}
	//		}
	//
	//		}
}//FIN DE LA FUNCIÓN