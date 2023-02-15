/*Ayax Fortunato
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	
	let respuesta;
	let numeroIngresado;
	let sumaNegativos;
	let sumaPositivos;
	let contadorPositivos;
	let contadorNegativos;
	let contadorCeros;
	let contadorPares;
	let promedioPositivos;
	let promediosNegativos;
	let diferencia;	

	numeroIngresado = 0;
	sumaPositivos = 0;
	sumaNegativos = 0;
	contadorPositivos = 0;
	contadorNegativos = 0;
	contadorCeros = 0;
	contadorPares = 0;

	respuesta = "si";

	while(respuesta=="si")
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numeroIngresado)) //validacion
		{
			numeroIngresado = prompt("Error, Ingrese un numero")
			numeroIngresado = parseInt(numeroIngresado)
		}
		if(numeroIngresado < 0)
		{	//punto 1 y 4
			sumaNegativos = sumaNegativos + numeroIngresado;
			contadorNegativos = contadorNegativos + 1;
		}
		else if(numeroIngresado >= 0)
		{	//punto 2 y3
			sumaPositivos = sumaPositivos + numeroIngresado;
			contadorPositivos = contadorPositivos + 1;	
		}
		else
		{
			contadorCeros = contadorCeros +1;
		}
		if(numeroIngresado %2 == 0)
		{
			contadorPares = contadorPares + 1;

		}
		respuesta=prompt("desea continuar? Si/No");
	}//fin del while
	promedioPositivos = sumaPositivos / contadorPositivos;
	promediosNegativos = sumaNegativos / contadorNegativos;
	diferencia = sumaPositivos - sumaNegativos;

	document.write("la suma de negativos es :" + sumaNegativos + "<br>");
	document.write("la suma de positivos es :" + sumaPositivos + "<br>");
	document.write("la cantidad de positivos es :" + contadorPositivos + "<br>");
	document.write("la cantidad de negativos es :" + contadorNegativos + "<br>");
	document.write("la cantidad de ceros es :" + contadorCeros + "<br>");
	document.write("la cantidad de pares es :" + contadorPares + "<br>");
	document.write("el promedio positivo es :" + promedioPositivos + "<br>");
	document.write("el promedio negativo es :" + promediosNegativos + "<br>");
	document.write("el diferencia entre Post y Neg es :" + diferencia + "<br>");
	
}//FIN DE LA FUNCIÓN