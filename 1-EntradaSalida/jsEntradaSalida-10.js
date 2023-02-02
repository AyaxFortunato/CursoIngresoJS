/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
let importe;
let porcentaje;
let resultado;
let descuento;

descuento = 25;

importe = document.getElementById("").value;
importe = parseFloat(importe);

porcentaje = importe * desceunto /100;
resultado = importe + porcentaje;

document.getElementById("").value = resultado;
	alert("ok");
}
