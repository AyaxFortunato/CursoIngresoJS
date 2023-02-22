function mostrar()
{
let numero;
let contDivisores = 0;

numero = parseInt(prompt("Ingrese un numero"));
while(isNaN(numero))
{
	numero = parseInt(prompt("Error, ingrese un numero"));
}
	for(let i = 2; i < numero; i++)
	{
		if(numero %1 == 0)
		{
			console.log(numero + "Es primo")
			break;
		}
	}
}//FIN DE LA FUNCIÓN