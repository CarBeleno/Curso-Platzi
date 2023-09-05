class Billete
{
	constructor(denominacion, valor, cantidad)
	{
		this.imagen = new Image();
		this.denominacion = denominacion;
		this.valor = valor;
		this.cantidad = cantidad;
		this.imagen.src = imagenes[this.denominacion];
	}
}

var imagenes = [];

imagenes["Cien"] = "cien.png";
imagenes["Cincuenta"] = "cincuenta.png";
imagenes["Veinte"] = "veinte.png";
imagenes["Diez"] = "diez.png";
imagenes["Cinco"] = "cinco.png";

var caja = [];

caja.push(new Billete("Cien", 100, 5));
caja.push(new Billete("Cincuenta", 50, 10));
caja.push(new Billete("Veinte", 20, 30));
caja.push(new Billete("Diez", 10, 10));
caja.push(new Billete("Cinco", 5 ,5));

var saldo = caja.reduce((total, billete) => total + billete.valor * billete.cantidad, 0);

function entregarDinero()
{
	var t = document.getElementById("dinero");
	var dinero = parseInt(t.value);

/*	saldo -= dinero;	
	if (saldo > 0) 
	{
		mostrarSaldo.innerHTML = "Saldo anterior: " + saldo;
		historialTransacciones.push(saldo);		
	} */

	

	var entregado = [];

	for(var billete of caja)
	{
		if (dinero > 0) 
		{
			cantidadEntergar = Math.floor(dinero / billete.valor);
			if (cantidadEntergar > billete.cantidad) 
			{
				papeles = billete.cantidad;
			}
			else
			{
				papeles = cantidadEntergar;
			}

			entregado.push(new Billete (billete.denominacion, billete.valor, papeles, saldo));
			dinero = dinero - (billete.valor * papeles);
		}
	}


	if (dinero <= saldo) 
	{

		for (var e of entregado) {
			if (e.cantidad > 0) {
				var divContenedor = document.createElement("div");
				divContenedor.className = "imagen_contenedor";

				var contenido = document.createTextNode(" cantidad " +  e.cantidad + " billetes de ");

				divContenedor.appendChild(contenido);

				var img = document.createElement("img");
				img.className = "lineacion-vertical";
				img.src = e.imagen.src;
				divContenedor.appendChild(img);

				resultado.appendChild(divContenedor);
			}
		}
		saldo -= dinero;
		historialTransacciones.push("$ " + saldo);
	}
	else 
	{
		historialTransacciones.push("insuficiente");
		resultado.innerHTML = "Este cajero no puede darte esa cantidad";
	}	
	mostrarTransacciones();
}

/*historial de transacciones*/
var historialTransacciones = [];

function mostrarTransacciones ()
{
	var historial = document.getElementById("historial");

	historial.innerHTML = '';

	var h3 = document.createElement('h3');
	h3.textContent = "Historial de transacciones";
	historial.appendChild(h3);


	for (var i = 0; i < historialTransacciones.length; i++) 
	{
		var valorTransaccion = historialTransacciones[i];


		var p = document.createElement('p');
		p.textContent = 'Transacción No. ' + (i + 1) + ': ' + "saldo " + valorTransaccion + " dinero que se extajo $" + dinero.value;
		historial.appendChild(p);
	}

}



var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

//Limpiar resultado para hacer otro extraer
var limpiar = document.getElementById("limpiar");
limpiar.addEventListener("click", () =>{
	resultado.textContent = '';
	dinero.value = '';
});

var mostrarSaldo = document.getElementById("mostrarSaldo");
mostrarSaldo.innerHTML = "Saldo: " + saldo;