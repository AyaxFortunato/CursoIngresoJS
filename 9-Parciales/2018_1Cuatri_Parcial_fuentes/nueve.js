//Ayax Fortunato
//A)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
//validando los datos ingresados:
//nombre del titular ,
//lugar ( “Puerto Madryn”, “Villa Gessel” o “Córdoba”),
//temporada(“alta”, “baja”),
//cantidad de días que durará el viaje.
//importe del viaje
//altura del pasajero
//peso del pasajero
//sexo pasajero (F o M o NB)
//Viaja con equipaje de mano?
//paga con mercado , tarjeta o efectivo
//1 
//a- cantidad de personas que viajan en cada temporada
//b- el peso acumulado de todos los que viajan a villa gessel
//c- el lugar con la mayor cantidad de días acumulados
//d- la suma de todos los importes
//2
//e-el nombre del más pesado de los pasajeros y el del más liviano
//f-el lugar donde se pagó el mayor importe
//g-el nombre de la mujer más alta
//3
//h- Cuál fue la forma de pago más utilizada
//i- en qué temporada se viajó más
//j- qué lugar tuvo más pasajeros
//4
//k- qué porcentaje usa equipaje de mano
//l- que porcentaje hay de cada sexo
//5-solo para alumnos que crean sus propios desafíos
//m- inventate uno
//n- se creativo en este
//o- uno facil 
//p- uno dificil

function mostrar()
{
    let duracionViaje;
    let alturaPasajero;
    let pesoPasajero;
    let pago;
    
    while (respuesta == "1"){
        let nombre = prompt("Ingresar nombre: ")

        let lugar = prompt("Ingresar destino: ")
        while (lugar != "Puerto Madryn" && lugar !="Villa Gessel" && lugar != "Cordoba"){
            lugar = prompt("Error, ingrese bien el lugar: ")
        }
        let temporada = prompt("Ingresar temporada: ")
        while(lugar == "Puerto Madryn" && lugar == "Villa Gessel" && lugar == "Cordoba"){
            temporada = prompt("Temporada Alta o Baja?: ")
        }
        
        let duracionViaje = parseInt(prompt("Ingrese la duracion del viaje: "));
        while(duracionViaje = duracionViaje + 1 ){
        }

        let costodelViaje = prompt("Ingresar el valor del viaje: ")

        if(tipoDePropiedad == "casa" && lugar == "CABA"){
            cantidadDeCasasAlquiladasCABA = cantidadDeCasasAlquiladasCABA + 1;
        }
      
        if(alquilerMasAlto < precioDelAlquiler){
            alquilerMasAlto = precioDelAlquiler;
            nombreInquilinoConAlquilerMasCaro = nombre;
        }
}