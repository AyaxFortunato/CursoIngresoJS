/*Ayax Fortunato
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	let numeroIngresado;
	let respuesta;
	let contador;
	let acumulador;
	let promedio;

	contador = 0;	
	acumulador = 0;
	respuesta = "Si";

	while(respuesta == "Si"){
		numeroIngresado = parseInt(numeroIngresado);
		numeroIngresado = prompt("Ingrese un numero");
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = parseInt(numeroIngresado);
			numeroIngresado = prompt("Error, Ingrese un numero");
		}
		if(numeroIngresado > 10 && numeroIngresado < 20)
		{
			contador = contador + 1;
			acumulador = acumulador + numeroIngresado;
		}
		respuesta = prompt ("Quiere ingresar otro numero? Si/No")
	}
	promedio = acumulador / contador;

	document.write("El promedio de los numeros mayores a 10 y menores a 20 es " + promedio);
}//FIN DE LA FUNCIÓN