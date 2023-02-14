/*Ayax Fortunato
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let claveIngresada;
	claveIngresada = prompt("ingrese el número entre 0 y 9");
	claveIngresada = parseInt(claveIngresada);

	while(isNaN(claveIngresada) || claveIngresada < 0 || claveIngresada >10)
	{
		claveIngresada = prompt("Error, Ingrese un numero entre 0 y 9"),
		claveIngresada = parseInt(claveIngresada);
	}
	
}//FIN DE LA FUNCIÓN