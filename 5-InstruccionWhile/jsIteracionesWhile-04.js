/*Ayax Fortunato
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;
	numero = prompt("ingrese el número entre 0 y 9");
	numero = parseInt(numero);

	while(isNaN(numero) || numero < 0 || numero > 10)
	{
		numero = prompt("Error, Ingrese un numero entre 0 y 9"),
		numero = parseInt(numero);
	}
	
}//FIN DE LA FUNCIÓN