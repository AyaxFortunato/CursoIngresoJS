function mostrar()
{
	let edad;
	let mensaje;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	if(edad > 17)
	{
		mensaje = "Es mayor de edad";
	}else{ 
		if(edad >=13 && <=17)
		{
			mensaje = "Es adolecente"
	}else{
		mensaje = "Es menor"
	}
}
	alert(mensaje);
}//FIN DE LA FUNCIÓN