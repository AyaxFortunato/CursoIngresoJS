/*Ayax Fortunato
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numero;
	var contador;
	var acumulador;
	var respuesta;
	let promedio;


	contador = 0;
	acumulador = 0;
	respuesta = "si";

	while(respuesta == "Si" || respuesta == "Si" || respuesta == "Si")
	{
		numero = prompt("Ingresar un numero");
		numero = parseInt(numero);
		while(isNaN(numero))
		{
			numero = prompt("Error, Ingresar un numero");
			numero = parseInt(numero);
		}		
		acumulador = acumulador	+ numero;
		contador = contador +1;
		respuesta = prompt("Quiere ingresar otro numero?");
	}
	promedio = acumulador / contador;


	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN