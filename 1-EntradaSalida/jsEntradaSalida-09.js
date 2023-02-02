/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let resultado;	
	let porcentaje;
	
	porcentaje 10;
	
	importe = document.getElementById("txtIdSueldo").value;
	resultado = document.getElementById("txtIdResultado").value;
	sueldo = parseInt(sueldo);
	resultado = parseInt(resultado);

	mensaje = "Resultado " + (sueldo * porcentaje);	

	alert(mensaje);
}
