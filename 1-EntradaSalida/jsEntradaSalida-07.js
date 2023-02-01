/*Ayax Fortunato
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numUnoTexto;
	let numDosTexto;
	let numUno;
	let numDos;
	let mensaje;	

	numUnoTexto = document.getElementById("txtIdNumeroUno").value;
	numDosTexto = document.getElementById("txtIdNumeroDos").value;

	numUno = parseInt(numUnoTexto);
	numDos = parseInt(numDosTexto);
	mensaje = "El suma es " + (numUno + numDos);

	alert(mensaje);
}

function restar()
{
	let numUnoTexto;
	let numDosTexto;
	let numUno;
	let numDos;
	let mensaje;

	numUnoTexto = document.getElementById("txtIdNumeroUno").value;
	numDosTexto = document.getElementById("txtIdNumeroDos").value;

	numUno = parseInt(numUnoTexto);
	numDos = parseInt(numDosTexto);
	mensaje = "Le resta es " + (numUno - numDos);

	alert(mensaje);
}

function multiplicar()
{ 
	let numUnoTexto;
	let numDosTexto;
	let	numUno;
	let	numDos;
	let mensaje;
	
	numUnoTexto = document.getElementById("txtIdNumeroUno").value;
	numDosTexto = document.getElementById("txtIdNumeroDos").value;

numUno = parseInt(numUnoTexto);
numDos = parseInt(numDosTexto);
mensaje = "El multiplicacion es " + numUno * numDos;

alert(mensaje);
}

function dividir()
{
	let numUnoTexto;
	let numDosTexto;
	let	numUno;
	let	numDos;
	let mensaje;
	
	numUnoTexto = document.getElementById("txtIdNumeroUno").value;
	numDosTexto = document.getElementById("txtIdNumeroDos").value;

numUno = parseInt(numUnoTexto);
numDos = parseInt(numDosTexto);
mensaje = "El divicion es " + numUno / numDos;

alert(mensaje);
}

