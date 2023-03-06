//Ayax Fortunato
//Division B
/* "Concierto"
Realizar el algoritmo que permita ingresar una cantidad indeterminada de tickets : 
recital
tipo("POP", "ROCK", " REGETTON"),
cantidad de entradas,(no mas de 20)  
precio de cada entrada, 
lugar("REX, "LUNA PARK", "TRASTIENDA"
// a)La cantidad de entradas pares vendidas. 
// b)A que tipo de recital la gente fue mas.  
// c)El precio de la entrada más barata, el tipo de musica y a donde era el recital
*/

function mostrar() {
	let recitalIngresado;
	let tipoIngresado;
	let cantidadEntradasIngresadas;
	let precioIngresado;
	let lugarIngresado;
	let recitalAlQueFueMasGente;
	let precioMasBarato;
	let tipoMasBarato;
	let lugarMasBarato;

	let banderaMasBarata = true;
	let respuesta = 'si';
	let acumuladorPop = 0;
	let acumuladorRock = 0;
	let acumuladorRegetton = 0;
	let contadorEntradasPares = 0;


	while (respuesta == 'si') {
		recitalIngresado = prompt('Ingresar el recital al que vas');
		while (!isNaN(recitalIngresado)) {
			recitalIngresado = prompt('Error. Ingresar nombre de recital válido');
		}

		tipoIngresado = prompt('Ingresar tipo de recital ("POP", "ROCK" o "REGETTON")');
		while (tipoIngresado != "POP" && tipoIngresado != "ROCK" && tipoIngresado != "REGETTON") {
			tipoIngresado = prompt('Error. Ingresar tipo de recital válido. Recuerde usar mayúsculas: ("POP", "ROCK" o "REGETTON")');
		}

		cantidadEntradasIngresadas = parseInt(prompt('Ingresar cantidad de entradas (Máximo 20)'));
		while (isNaN(cantidadEntradasIngresadas) || cantidadEntradasIngresadas < 1 || cantidadEntradasIngresadas > 20) {
			cantidadEntradasIngresadas = parseInt(prompt('Ingrese una cantidad de entradas válida (Entre 1 y 20)'));
		}

		precioIngresado = parseFloat(prompt('Ingresar precio de la entrada'));
		while (isNaN(precioIngresado) || precioIngresado < 1 || precioIngresado > 500000) {
			precioIngresado = parseFloat(prompt('Ingrese un precio válido (Entre 1 y 500000)'));
		}

		lugarIngresado = prompt('Ingresar lugar del recital ("REX, "LUNA PARK", "TRASTIENDA")');
		while (lugarIngresado != "REX" && lugarIngresado != "LUNA PARK" && lugarIngresado != "TRASTIENDA") {
			lugarIngresado = prompt('Error. Ingresar un lugar del recital válido. Recuerde usar mayúsculas: ("REX, "LUNA PARK", "TRASTIENDA")');
		}

		if (cantidadEntradasIngresadas % 2 == 0) {
			contadorEntradasPares = contadorEntradasPares + 1;
		}

		switch (tipoIngresado) {
			case "POP":
				acumuladorPop = acumuladorPop + cantidadEntradasIngresadas;
				break;
			case "ROCK":
				acumuladorRock = acumuladorRock + cantidadEntradasIngresadas;
				break;
			case "REGETTON":
				acumuladorRegetton = acumuladorRegetton + cantidadEntradasIngresadas;
				break;
		}

		if (banderaMasBarata == true || precioMasBarato > precioIngresado) {
			precioMasBarato = precioIngresado;
			tipoMasBarato = tipoIngresado;
			lugarMasBarato = lugarIngresado;
			banderaMasBarata = false;
		}

		respuesta = prompt('¿Desea seguir ingresando datos? si/no');

	}
	if (acumuladorPop > acumuladorRock && acumuladorPop > acumuladorRegetton) {
		recitalAlQueFueMasGente = "POP";

	}
	else if (acumuladorRock > acumuladorRegetton) {
		recitalAlQueFueMasGente = "ROCK";

	}
	else {
		recitalAlQueFueMasGente = "REGETTON";
	}
	if (contadorEntradasPares != 0) {
		console.log('La cantidad de entradas pares vendidas es ' + contadorEntradasPares);

	}
	else {
		('No se ingresaron entradas pares')
	}
	console.log('El tipo de recital al que la gente fue mas es ' + recitalAlQueFueMasGente);
	console.log('El precio de la entrada más barata es $' + precioMasBarato + ', su tipo es ' + tipoMasBarato + ' y el recital era en el ' + lugarMasBarato);

}
