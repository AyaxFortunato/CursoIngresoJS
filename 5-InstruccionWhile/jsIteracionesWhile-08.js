/*Ayax Fortunato
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let numeroIngresado;

	contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = "si";

	numeroIngresado = parseInt(prompt("Ingrese un numero"))
	while (respuesta == "Si") 
	{
		contador = contador + 1;
		respuesta = prompt("Desea ingresar otro numero?");
		numeroIngresado = parseInt(numeroIngresado);
		while(isNaN(numeroIngresado))
		{
		respuesta = prompt("Error,desea ingresar otro numero?");
		numeroIngresado = parseInt(numeroIngresado);
		}
	
		If(numeroIngresado >= 0)
		{
		sumaPositivos = sumaPositivos + numeroIngresado;	
		}
		multiplicacionNegativos = numeroIngresado * multiplicacionNegativos;
		respuesta = prompt("Ingrese Si si quiere continuar");	
	}
	document.getElementById("txtIdSuma").value=sumaPositivos;
	document.getElementById("txtIdProducto").value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN