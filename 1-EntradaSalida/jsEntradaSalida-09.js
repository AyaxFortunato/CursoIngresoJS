/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldoTexto;
	let resultadoTexto;	
	let sueldo;
	let resultado;
	let mensaje;
	
	importe = document.getElementById("txtIdSueldo").value;
	resultado = document.getElementById("txtIdResultado").value;
	sueldo = parseInt(sueldoTexto);
	resultado = parseInt(resultadoTexto);

	mensaje = "Resultado " + (sueldo * 1.1);	

	alert(mensaje);
}
