/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let descuentoingresado;
	let resultado;
	let descuento;

	porcentaje = -25;

	importe = document.getElementById("txtIdImporte").value;
	importe = parseFloat(importe);
	
	descuentoingresado = prompt("ingrese el descuento")
	descuentoingresado = parseInt(descuentoingresado)

	descuento = importe * porcentajeingresado/ 100;
	resultado = importe - descuento;

	document.getElementById("txtIdResultado").value = resultado;

}
