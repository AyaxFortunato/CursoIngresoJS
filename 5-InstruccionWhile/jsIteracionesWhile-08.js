/*Ayax Fortunato
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	let numeroIngresado;

	contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = "si";

	numeroIngresado = parseInt(prompt("Ingrese un numero"))
	while (respuesta == "Si" || respuesta == "Si" || respuesta == "Si" ||respuesta == "Si") 
	{
		respuesta = prompt("Desea ingresar otro numero?")
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
	
		If(numeroIngresado >= 0)
		{
		sumaPositivos = sumaPositivos + numeroIngresado,	
		}	
	

	}
	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN