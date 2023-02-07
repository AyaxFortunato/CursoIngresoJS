//Ayax Fortunato
//Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
function mostrar()
{
	let edad;
	let mensaje;

	//tomo la edad  
	edad= document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	if(edad >= 18)//edad > 17
	{
		mensaje = "Es mayor de edad"
	}else{
		mensaje = "Es menor de edad"
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN