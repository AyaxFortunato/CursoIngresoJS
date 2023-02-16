//Ayax Fortunato
function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let i;
	let promedio;

	i = 0;
	contador = 0;
	acumulador = 0;	

	while(i < 5)
	{
		i = i +1;

		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);		

		while(isNaN(numeroIngresado))
		{	
		numeroIngresado = prompt("Error, ingrese un numero")
		numeroIngresado = parseInt(numeroIngresado)
		}		
	}
	
	contador = contador + 1;
	acumulador = acumulador + numeroIngresado;
	
	promedio = acumulador / contador;
		
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/5;
}//FIN DE LA FUNCIÓN