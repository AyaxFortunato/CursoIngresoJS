/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioUnoTexto;
    let precioDosTexto;
    let precioTresTexto;

    let precioUnoNumero;
    let precioDosNumero;
    let precioTresNumero;

    let sumaPrecios;
    
    let precioUno;
    let precioDos;
    let precioTres;
//asignando a mis variables lo que ingreso el usuario por teclado
    precioUnoTexto = document.getElementById("txtIdPrecioUno").value;
    precioDosTexto = document.getElementById("txtIdPrecioDos").value;
    precioTresTexto = document.getElementById("txtIdPrecioTres").value;

//parseo de texto a numero
    precioUnoNumero = parseInt(precioUnoTexto);
    precioDosNumero = parseInt(precioDosTexto);
    precioTresNumero = parseInt(precioTresTexto);

    sumaPrecios = precioUnoNumero + precioDosNumero + precioTresNumero;

    console.log("El total es " + sumaPrecios)

//uso la misma variable y piso el valor
//precioUno = documento.getElementById("txtIdPrecioUno").value;
//precioUno = parseInt(precioUno)

//solo es una linea de codigo pido el numero y lo parseo
//precioUno = parseInt(document.getElementById("txtIdPrecioUno").value)
}
function Promedio () 
{
//promedio = suma total de los ingresos, dividido la cantidad de veces ingresado
    let precioUnoTexto;
    let precioDosTexto;
    let precioTresTexto;

    let precioUnoNumero;
    let precioDosNumero;
    let precioTresNumero;

    let sumaPrecios;
    let promedio;

    let precioUno;
    let precioDos;
    let precioTres;

    precioUnoTexto = document.getElementById("txtIdPrecioUno").value;
    precioDosTexto = document.getElementById("txtIdPrecioDos").value;
    precioTresTexto = document.getElementById("txtIdPrecioTres").value;

    precioUnoNumero = parseInt(precioUnoTexto);
    precioDosNumero = parseInt(precioDosTexto);
    precioTresNumero = parseInt(precioTresTexto);

sumaPrecios = precioUnoNumero + precioDosNumero + precioTresNumero;

promedio = sumaPrecios /3;

alert("El promedio es: " + promedio)
console.log("El promedio es: " + promedio)
}
function PrecioFinal () 
{
//1 ingresar los precios hecho
//2  parsear los precios hecho
//3 sumar los 3 precios hecho
//4 agregar el 21% 

    let precioUnoTexto;
    let precioDosTexto;
    let precioTresTexto;

    let precioUnoNumero;
    let precioDosNumero;
    let precioTresNumero;

    let sumaPrecios;
    let precioFinal;
    let iva;

    iva = 21;

    precioUnoTexto = document.getElementById("txtIdPrecioUno").value;
    precioDosTexto = document.getElementById("txtIdPrecioDos").value;
    precioTresTexto = document.getElementById("txtIdPrecioTres").value;

    precioUnoNumero = parseInt(precioUnoTexto);
    precioDosNumero = parseInt(precioDosTexto);
    precioTresNumero = parseInt(precioTresTexto);

    sumaPrecios = precioUnoNumero + precioDosNumero + precioTresNumero;
    
//forma larga
//precioIva = sumaPrecio * Iva /100; 
//precioFianl = sumaPrecios + precioIva
//            30 + (30*21/100)
// otra forma;
// precioFinal = sumaPrecios *(1 + Iva/100);
    precioFinal = sumaPrecios + sumaPrecios * iva / 100;

    alert("El precio final con IVA es: " + precioFinal)
    console.log("El precio final es: " + precioFinal)





}