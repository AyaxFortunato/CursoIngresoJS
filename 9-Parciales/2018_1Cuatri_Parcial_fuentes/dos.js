/*Ayax Fortunato
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion,
 hasta que el cliente quiera:
while similar a sexo 
Tipo validad("arena";"cal";"cemento")
 > 0 < 1000
Cantidad de bolsas,
>0 < 100000
Precio por bolsa (más de cero ),
if, variable cantidad y variable de descuento
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.

a) El importe total a pagar , bruto sin descuento y...
if >10 o <30 hay descuento
b) el importe total a pagar con descuento(solo si corresponde)
contador(switch)
d) Informar el tipo con mas cantidad de bolsas.
bandera,if
f) El tipo mas caro
*/
/*function mostrar()
{
    let cantidadBolsas;
    let acumuladorCal;
    let acumuladorCemento;
    let acumuladorArena;
    let tipoDeBolsa;
    let descuento;
    let precioBolsas;
    let importeTotalDescuento;
    let banderaDelMasCaro;
    let precioBolsaMasCara;
    let tipoMasCaro;
    let respuesta;
    let acumuladorDeBolsas;
    let acumuladorPrecio;
    let mensaje;
    let mayorTipoDeBolsa;

    acumuladorDeBolsas = 0;
    banderaDelMasCaro = true;
    respuesta = "si";
    acumuladorCal = 0;
    acumuladorCemento = 0;
    acumuladorArena = 0;
    cantidadBolsas = 0;
    descuento = 0;
    precioBolsas = 1;


    while (respuesta == "si") {
        tipoDeBolsa = prompt("ingrese tipo de bolsa: 'cal', 'arena', 'cemento'");
        while (tipoDeBolsa != "cal" && tipoDeBolsa != "arena" && tipoDeBolsa != "cemento") {
            tipoDeBolsa = prompt("error, ingrese tipo de bolsa valido: 'cal', 'arena', 'cemento'");
        }
        precioBolsas = parseFloat(prompt("Ingrese precio de las bolsas, entre 0 y 10000 "));
        while (isNaN(precioBolsas) || precioBolsas < 0 || precioBolsas > 10000) {
            precioBolsas = parseFloat(prompt("Error, ingrese el precio de las bolsas, entre 0 y 10000 "));
        }
        cantidadBolsas = parseInt(prompt("Ingrese cantidad de bolsas"));
        while (isNaN(cantidadBolsas) || cantidadBolsas < 0 || cantidadBolsas > 1000) {
            cantidadBolsas = parseInt(prompt("Error, Ingrese ingrese cantidad de bolsas "));
        }

        acumuladorPrecio = acumuladorPrecio + (precioBolsas * cantidadBolsas);
        acumuladorDeBolsas = acumuladorDeBolsas + cantidadBolsas;

        switch (tipoDeBolsa) {
            case "cal":
                acumuladorCal = acumuladorCal + cantidadBolsas;
                break;
            case "arena":
                acumuladorArena = acumuladorArena + cantidadBolsas;
                break;
            case "cemento":
                acumuladorCemento = acumuladorCemento + cantidadBolsas;
                break;
        }
        if (banderaDelMasCaro == true || precioBolsaMasCara < precioBolsas) {
            precioBolsaMasCara = precioBolsas;
            tipoMasCaro = tipoDeBolsa;
            banderaDelMasCaro = false;
        }

        respuesta = prompt("¿Desea seguir? Ingrese: 'si'");
    }//fin del while
    if (cantidadBolsas > 29) {
        descuento = -25;

    }
    else if (cantidadBolsas > 9) {
        descuento = -15;
    }
    else {
        descuento = 0;
    }
    if (acumuladorCal > acumuladorArena && acumuladorCal > acumuladorCemento) {
        mayorTipoDeBolsa = "cal";
    }
    else if (acumuladorArena > acumuladorCal && acumuladorArena >= acumuladorCemento) {
        mayorTipoDeBolsa = "arena";
    }
    else {
        mayorTipoDeBolsa = "cemento";
    }
    if (descuento != 0) {
        importeTotalDescuento = acumuladorPrecio + (acumuladorPrecio * descuento / 100);
        mensaje = "el importe con descuento es: " + importeTotalDescuento;
    }
    else {
        mensaje = "no se aplico el descuento";
    }
    console.log("el importe total a pagar es: " + acumuladorPrecio);
    console.log(mensaje);
    console.log("el tipo con mas cantidad de bolsas es: " + mayorTipoDeBolsa);
    console.log("el tipo mas caro es: " + tipoMasCaro + "con $ " + precioBolsaMasCara);
}


/*Ayax Fortunato
//Division B
/* Inmoviliaria: Nos piden armar un programa para ingresar los siguientes datos de los inquilinos de los inmuebles: 
nombre,
lugar(CABA, Conurbano, Interior) 
tipo( dpto, casa, quinta) en CABA solo se alquilan dptos y casas
cantidad de habitantes (1-3 p/ dpto, 1-7 p/casa, 1-15 p/ quinta)
alquiler
INFORMAR: 
// a) Cantidad de casa alquiladas en CABA
// b) El inquilino con alquiler más caro //nombre de
// c) Del interior del país, la quinta más cara */ // toFixed.2

function mostrar() {
    let nombreIngresado;
    let lugarIngresado;
    let tipoIngresado;
    let cantidadIngresada;
    let alquilerIngresado;
    let quintaMasCaraInterior;
    let alquilerMasCaro;
    let nombreInquilinoConAlquilerMasCaro;

    let respuesta = 'si';
    let contadorCasasCABA = 0;
    let banderaAlquilerMasCaro = true;
    let banderaQuintaInterior = true;

    while (respuesta == 'si') {
        nombreIngresado = prompt('Ingresar nombre');
        while (!isNaN(nombreIngresado)) {
            nombreIngresado = prompt('Error. Ingresar nombre válido');
        }

        lugarIngresado = prompt('Ingresar zona en donde alquila ("CABA", "Conurbano" o "Interior")');
        while (lugarIngresado != "CABA" && lugarIngresado != "Conurbano" && lugarIngresado != "Interior") {
            lugarIngresado = prompt('Error. Ingresar una zona en donde alquila válida ("CABA", "Conurbano" o "Interior")');
        }

        tipoIngresado = prompt('Ingresar su tipo de alquiler  ("dpto", "casa" o "quinta")');
        while (tipoIngresado != "dpto" && tipoIngresado != "casa" && tipoIngresado != "quinta") {
            tipoIngresado = prompt('Error. Ingresar una tipo de alquiler válido ("dpto", "casa" o "quinta")');
        }

        cantidadIngresada = parseInt(prompt('Ingresar cantidad de habitantes (1-3 p/ dpto, 1-7 p/casa, 1-15 p/ quinta)'));
        while (isNaN(cantidadIngresada) || cantidadIngresada < 1 || (tipoIngresado == "dpto" && cantidadIngresada > 3) || (tipoIngresado == "casa" && cantidadIngresada > 7) || (tipoIngresado == "quinta" && cantidadIngresada > 15)) {
            cantidadIngresada = parseInt(prompt('Error. Ingrese una cantidad de habitantes válida(1-3 p/ dpto, 1-7 p/casa, 1-15 p/ quinta)'));
        }

        alquilerIngresado = parseFloat(prompt('Ingresar precio'));
        while (isNaN(alquilerIngresado) || alquilerIngresado < 1 || alquilerIngresado > 1000000) {
            alquilerIngresado = parseFloat(prompt('Ingrese una precio válido. Entre 1 y 1 millón'));
        }
        switch (lugarIngresado) {
            case "CABA":
                if (tipoIngresado == "casa") {
                    contadorCasasCABA = contadorCasasCABA + 1;
                }
                break;
            case "Interior":
                if (tipoIngresado == "quinta" && (banderaQuintaInterior == true || quintaMasCaraInterior < alquilerIngresado)) {
                    quintaMasCaraInterior = alquilerIngresado;
                    banderaQuintaInterior = false;
                }
                break;
        }
        if (banderaAlquilerMasCaro == true || alquilerMasCaro < alquilerIngresado) {
            nombreInquilinoConAlquilerMasCaro = nombreIngresado;
            alquilerMasCaro = alquilerIngresado;
            banderaAlquilerMasCaro = false;
        }

        respuesta = prompt('¿Desea seguir ingresando datos? si/no');
    }
    if (contadorCasasCABA != 0) {
        console.log('La cantidad de casa alquiladas en CABA es ' + contadorCasasCABA);
    } else {
        console.log('No se ingresaron casas alquiladas en CABA');
    }
    console.log('El inquilino con alquiler más caro es ' + nombreInquilinoConAlquilerMasCaro);

    if (banderaQuintaInterior == false) {
        console.log('Del interior del país, la quinta más cara tiene un precio de $' + quintaMasCaraInterior + ' de alquiler');
    } else {
        console.log('No se ingresaron quintas alquiladas en el interior del país');
    }
}