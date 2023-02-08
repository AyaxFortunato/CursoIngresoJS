function mostrar()
{
	let nota;
	let mensaje;

	nota = Math.floor(Math.random() * 10 + 1);

	if(nota >= 9)
		{
			mensaje = nota + "Exelente";
		}
		else{
			if(nota >=4)
			{
				mensaje = nota + "Aprobado";
			}
			else {
				mensaje = nota + "Desaprobado";
			}
		}
		alert(mensaje);
}