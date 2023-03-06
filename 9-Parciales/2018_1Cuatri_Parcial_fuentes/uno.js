//Ayax Fortunato
//function mostrar()
//{
//    let tipoProducto;
//	let precioProducto;
//	let unidadesProducto;
//	let marcaProducto;
//	let fabricanteProducto;
//	let contadorAlcohol;
//	let contadorBarbijo;
//	let contadorJabon;
//	let acumuladorAlcohol;
//	let acumuladorBarbijo;
//	let acumuladorJabon;
//	let unidadesCantidadMasBaratoAlcohol;
//	let fabricanteMasBaratoAlcochol;
//	let precioMasBaratoAlcohol;
//	let flagAlcohol;
//	let flagTipoConMasUnidades;
//	let promedioCompra;
//	let mayorTipo; 
//
//	flagAlcohol = 0;
//	flagTipoConMasUnidades = 0;
//
//	contadorAlcohol = 0;
//	contadorBarbijo = 0;
//	contadorJabon = 0;
//	acumuladorAlcohol = 0;
//	acumuladorBarbijo = 0;
//	acumuladorJabon = 0;
//
//	for (let i = 0; i < 5; i++) {
//		tipoProducto = prompt("Ingrese el nombre del producto: barbijo, jabon o alcohol");
//		while (tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol") {
//			tipoProducto = prompt("Error- Ingrese el nombre del producto: barbijo, jabon o alcohol");
//		}
//
//		precioProducto = parseFloat(prompt("Ingrese el precio del producto unitario: "));
//		while (isNaN(precioProducto) || precioProducto < 100 || precioProducto > 300) {
//			precioProducto = parseFloat(prompt("Error- Ingrese el precio del producto: "));
//		}
//
//		unidadesProducto = parseInt(prompt("ingrese la cantidad de unidades del producto: "));
//		while (isNaN(unidadesProducto) || unidadesProducto < 1 || unidadesProducto > 1000) {
//			unidadesProducto = parseInt(prompt("Error- ingrese la cantidad de unidades del producto: "));
//		}
//
//		marcaProducto = prompt("Ingrse la marca del producto: ");
//		fabricanteProducto = prompt("ingrese el fabricante del producto: ");
//
//		switch (tipoProducto) {
//			case "alcohol":
//				if (flagAlcohol == 0 || precioProducto < precioMasBaratoAlcohol) {
//					fabricanteMasBaratoAlcochol = fabricanteProducto;
//					unidadesCantidadMasBaratoAlcohol = unidadesProducto;
//					precioMasBaratoAlcohol = precioProducto;
//					flagAlcohol = 1;
//				} 
//				contadorAlcohol = contadorAlcohol + 1;
//				acumuladorAlcohol = unidadesProducto + acumuladorAlcohol;
//				break;
//			case "barbijo":
//				contadorBarbijo = contadorBarbijo + 1;
//				acumuladorBarbijo = acumuladorBarbijo + unidadesProducto;
//				break;
//			case "jabon":
//				contadorJabon = contadorJabon + 1 ;
//				acumuladorJabon = acumuladorJabon + unidadesProducto;
//				break;
//		}
//	}
//  
//	if(acumuladorAlcohol > acumuladorJabon){
//		mayorTipo = "el alcohol"; 
//		promedioCompra = acumuladorAlcohol / contadorAlcohol;
//	}else if(acumuladorJabon > acumuladorBarbijo){
//		promedioCompra = acumuladorJabon / contadorJabon;
//		mayorTipo = " el jabon"; 
//	}else{
//		promedioCompra = acumuladorBarbijo / contadorBarbijo;
//		mayorTipo = " el barbijo"; 
//	}
//
//	console.log("Cantidad de unidades del mas barato de los alcohol: " + unidadesCantidadMasBaratoAlcohol + ". Su fabricante es: " + fabricanteMasBaratoAlcochol);
//	console.log("Unidades totales de jabon: " + acumuladorJabon);
//	console.log("El tipo con mas unidades es: " + mayorTipo);
//	console.log("El promedio de compra del tipo con mas unidades es: " + promedioCompra);
// }

//Ayax Fortunato
//Division B
/*Reclutando IT" Un recruiter nos contrató para armale un programa para el ingreso indeterminado de candidatos. Se solicitan los siguientes datos:   
nombre,
edad,   
sexo(feminino, masculino, no binario)
Informar:
a)El promedio de edad de los que estudian Python.
b)La cantidad de mujeres que estudian C#
c)El promedio de personas que aprendieron a programar en la Universidad. universitarios / total = promedio
*/

function mostrar ()
{
	let nombreIngresado;
	let edadIngresada;
	let sexoIngresado;
	let lenguajeIngresado;
	let lugarIngresado;
	let promedioUniversitarios;
	let promedioEdadPython;
	
	let respuesta = 'si';
	let acumuladorEdadPython = 0;
	let contadorPython = 0;
	let contadorMujeresCSharp = 0;
	let contadorUniversitarios = 0;
	let contadorTotal = 0;


	while (respuesta == 'si') {
		nombreIngresado = prompt('Ingresar nombre');
		while (!isNaN(nombreIngresado)) {
			nombreIngresado = prompt('Error. Ingresar nombre válido');
		}

		edadIngresada = parseInt(prompt('Ingresar edad'));
		    while (isNaN(edadIngresada) || edadIngresada < 16 || edadIngresada > 90) {
			    edadIngresada = parseInt(prompt('Ingrese una edad válida: (Entre 16 y 90)'));
		}

		sexoIngresado = prompt('Ingresar sexo: femenino / masculino / nobinario)');
		    while (sexoIngresado != "femenino" && sexoIngresado != "masculino" && sexoIngresado != "nobinario") {
			    sexoIngresado = prompt('Error. Ingresar un sexo válido: femenino / masculino / nobinario)');
		}

		lenguajeIngresado = prompt('Ingrese el lenguaje que sabe ("Python", "C#" o "Javascript")');
		    while (lenguajeIngresado != "Python" && lenguajeIngresado != "C#" && lenguajeIngresado != "Javascript") {
			    lenguajeIngresado = prompt('Error. Ingresar opciones válidas ("Python", "C#" o "Javascript")');
		}

		lugarIngresado = prompt('Ingresar donde aprendó a programar ("universitario", "terciario" o "curso")');
		    while (lugarIngresado != "universitario" && lugarIngresado != "terciario" && lugarIngresado != "curso") {
			    lugarIngresado = prompt('Error. Ingresar opciones válidas ("universitario", "terciario" o "curso")');
		}

		switch (lenguajeIngresado) {
			case "Python":
				acumuladorEdadPython = acumuladorEdadPython + edadIngresada;
				contadorPython = contadorPython + 1;
				break;
			case "C#":
				if (sexoIngresado == "femenino") {
					contadorMujeresCSharp = contadorMujeresCSharp + 1;
				}
				break;
		}

		if (lugarIngresado == "universitario") {
			contadorUniversitarios = contadorUniversitarios + 1;
		}

		contadorTotal = contadorTotal + 1;

		respuesta = prompt('¿Desea seguir ingresando datos? si/no');
	}
	if (contadorPython != 0) {
		promedioEdadPython = acumuladorEdadPython / contadorPython;
		console.log('El promedio de edad de los que estudian Python es ' + promedioEdadPython);
	} else {
		console.log('No se ingresaron candidatos de Python.');
	}
	if (contadorMujeresCSharp != 0) {
		console.log('La cantidad de mujeres que estudian C# es ' + contadorMujeresCSharp);
	} else {
		console.log('No se ingresaron mujeres que estudien C#');
	}
	if (contadorUniversitarios != 0) {
		promedioUniversitarios = contadorUniversitarios / contadorTotal;
		console.log('El promedio de personas que aprendieron a programar en la Universidad es ' + promedioUniversitarios.toFixed(2));
	} else {
		console.log('No se ingresaron personas que aprendieron a programar en la Universidad');
	}
}
