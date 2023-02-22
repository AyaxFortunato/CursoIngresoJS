//Ayax Fortunato
//al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados.
function mostrar()
{
 let numero;
 let divisores;
 let cantDivisores;
 
 divisores = 0;
 cantDivisores = 0;
 numero = parseInt(prompt("Ingresar un numero"));

 for(let i = 0; i < numero; i ++)
 {
	if(numero %i == 0)
	{
		cantDivisores = cantDivisores + 1;
	}	
 }

 document.write("La cantidad de divisores de " + numero + "es" + cantDivisores);
}//FIN DE LA FUNCIÓN