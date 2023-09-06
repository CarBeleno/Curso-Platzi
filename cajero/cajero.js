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

var historialTransacciones = [];

function agregarTransaccion(monto, saldo)
{
	var transaccion = {
		monto: monto,
		saldo: saldo
	};
	historialTransacciones.push(transaccion);
}

function entregarDinero()
{
	var t = document.getElementById("dinero");
	var dinero = parseInt(t.value);
	
	saldo -= dinero;	
	agregarTransaccion(dinero, saldo);

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

			entregado.push(new Billete (billete.denominacion, billete.valor, papeles));
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
		mostrarSaldo.innerHTML = "Saldo anterior: " + saldo;
	}
	else 
	{
		resultado.innerHTML = "Este cajero no puede darte esa cantidad";
	}	
	mostrarTransacciones();	
}


function mostrarTransacciones ()
{

	var tabla = document.querySelector("table");
	tabla.innerHTML = "<tr> <th>Transaccion No.</th> <th>Descripcion</th> <th>Monto a retirar</th> <th>Saldo</th> </tr>"

	for (var i = 0; i < historialTransacciones.length; i++) 
	{
		var transaccion = historialTransacciones[i];

		tabla.innerHTML += "<tr><td>"
							+ (i + 1) + "</td><td>"
							+ "Solicitud retiro" + "</td><td>"
							+ transaccion.monto + "</td><td>"
							+ transaccion.saldo
							+"</td></tr>";
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

var mostrarSaldo = document.getElementById("saldo");
mostrarSaldo.textContent = "Saldo: " + saldo;