/*Ayax Fortunato
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	let mensaje;

	sexoIngresado = prompt("ingrese f para femenino ó m para masculino .");
	
	while(sexoIngresado != "f" && sexoIngresado != "F" && sexoIngresado != "m" && sexoIngresado != "M")
	{
		sexoIngresado = prompt("Error, ingrese f para femenino, m para masculino");
	}
	if (sexoIngresado == "f" || sexoIngresado =="F"){
		sexoIngresado = "Femenino";
	}else if (sexoIngresado == "m" || sexoIngresado == "M"){
		sexoIngresado = "Masculino"
	}
	mensaje = ("Su sexo es ") + sexoIngresado;
	document.getElementById("txtIdSexo").value = mensaje;


	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN