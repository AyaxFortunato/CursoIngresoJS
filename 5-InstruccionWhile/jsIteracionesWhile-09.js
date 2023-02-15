/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	
	//iniciar variables
	banderaDelPrimero = true;
	respuesta = "Si";

	while(respuesta == "Si")
	{
		numeroIngresado = prompt("Ingrese un numero")
		numeroIngresado = parseInt(numeroIngresado)
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = prompt("Error, Ingrese un numero")
			numeroIngresado = parseInt(numeroIngresado)
		}
		if(banderaDelPrimero == true)
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = false;
		}
		else if(numeroMaximo < numeroIngresado)
		{
			numeroMaximo = numeroIngresado;
		}
		else if(numeroMinimo > numeroIngresado)
		{
			numeroMinimo = numeroIngresado
		}
	}
	respuesta=prompt("desea continuar?");
	
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimmo").value = numeroMinimo;
}//FIN DE LA FUNCIÓN