/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
(32 °F − 32)
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
(0 °C × 9/5)
*/
function FahrenheitCentigrados () 
{
    let fahrenheit;
    let centigrados;
    
    fahrenheit = document.getElementById("txtIdTemperatura").value;
    fahrenheit = parseFloat(fahrenheit)
    
    centigrados = (fahrenheit - 32) * 5/9

    alert(fahrenheit + " Fahrenheit son: " + centigrados);
}

function CentigradosFahrenheit () 
{
	let centigrados;
    let fahrenheit;
    
    centigrados = document.getElementById("txtIdTemperatura").value;
    centigrados = parseFloat(centigrados)
    
    fahrenheit = (centigrados * 9/5) + 32

    alert(centigrados + " Centigrados son: " + fahrenheit);
}
