/*Ayax Fortunato
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombreIngresado;
	let mensaje;

	//nombreIngresado = txtIdNombre.value; Esto funciona solo en google
//HTML	traeme el elemento del ID el valor
	nombreIngresado = document.getElementById("txtIdNombre").value;

	mensaje = "Vos te llamas " + nombreIngresado

	alert(mensaje);

}


