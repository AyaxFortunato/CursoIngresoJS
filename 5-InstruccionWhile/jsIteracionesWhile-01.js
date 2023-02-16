/*Ayax Fortunato
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
//y contar los numeros pares
function mostrar()
{
	//declaro variable
	//let numero;
	//let contadorNumPares;
	//let contadorNumImpares;
//	let acumuladorNumPares;
//	let acumuladorNumImpares;
//	let mayorNumImpar;
//	let mayorNum;
	//inicializar variable
//	numero = 11 ;
//	contadorNumPares = 0;
//	contadorNumImpares = 0;
//	acumuladorNumPares = 0;
//	acumuladorNumImpares = 0;
//	mayorNumImpar = 0;
//	mayorNum = 0;

//	while (numero < 126 && numero > 10)
//	{
//		if (numero %2 != 0)
//		{
//			contadorNumImpares = contadorNumImpares + 1;
//			if(numero > mayorNumImpar)
	//		{
	//			mayorNumImpar = numero;
	//		}
	//	}
	//	else
	//	{
	//		contadorNumPares = contadorNumPares + 1;
	//		acumuladorNumPares = acumuladorNumPares + numero;
	//	}
	//	if(numero > mayorNum)
	//	{

	//	}
		//modifica la condicion de uno en uno
	//	numero = numero + 1;
		//mostrar contador
	//	console.log(numero);
	//}
	//console.log("La cantidad de numeros Impares es: " + contadorNumImpares);
	//console.log("La cantidad de numeros Pares es: " + contadorNumPares);
	//console.log("El total de la suma de los numeros pares es " + acumuladorNumPares);
	//console.log("El total de la suma de los numeros impares es " + acumuladorNumImpares);
	//console.log("El mayor de los numeros impares es " + acumuladorNumImpares);




	let nombre;
	let edad;
	let edadmayor;
	let edadMenor;
	let bandera;
	let nombreMayor;
	let nombreMenor;
	let mensaje;
	
	respuesta = "Si";

	
	edad = parseInt(edad)

	while(respuesta == "Si"){
		nombre = prompt("Ingrese el nombre");
		edad = prompt("Ingrese una edad");
			while(isNaN(edad || edad < 0 || edad >123))
			{
			edad = prompt("Error, ingrese una edad con numeros")
			edad = parseInt(edad)
			}
		if(edad < true)	{
			edadmayor = edad;
			edadMenor = edad;
			bandera = true
		}
		else if (edadmayor < edad)
		{
			nombreMayor = nombre;
			edadmayor = edad;
		}
		else if(edadMenor > edad)
		{
			nombreMenor = nombre;
			edadMenor = edad;
		}
		respuesta = prompt("Desea ingresar otrs datos? Si/No")	
	}
	mensaje = "La persona menor es" + nombreMenor;
	mensaje += "La persona mayor es" + nombreMayor;
	document.write(mensaje);
}//FIN DE LA FUNCIÓN



