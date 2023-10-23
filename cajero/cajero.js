class Billete
{
	constructor(denominacion, valor, cantidad)
	{
		this.imagen = new Image();
		this.valor =  valor;
		this.cantidad = cantidad;
		this.denominacion = denominacion;		
		this.imagen.src = imagenes[this.denominacion];
	}
}

var imagenes = [];

imagenes["cien"] = "cien.png";
imagenes["cincuenta"] = "cincuenta.png";
imagenes["veinte"] = "veinte.png";
imagenes["diez"] = "diez.png";
imagenes["cinco"] = "cinco.png";

var caja = [];

caja.push(new Billete("cien", 100, 5));
caja.push(new Billete("cincuenta", 50, 10));
caja.push(new Billete("veinte", 20, 5));
caja.push(new Billete("diez", 10, 10));
caja.push(new Billete("cinco", 5, 5));

var dinero =  0;
var entregado = [];
var saldo = 0;
var div = 0;
var papeles = 0;
var saldoInicial = 0;
var historial = [];

var boton = document.getElementById("extraer");
var resultado =  document.getElementById("resultado");
var mostrarSaldo = document.getElementById("mostrarSaldo");

//Operación para saldo inicial
for(var i = 0; i < caja.length; i++)
{
	saldoInicial += caja[i].valor * caja[i].cantidad;
}

mostrarSaldo.innerHTML = "El saldo del cajero es: " + saldoInicial;

boton.addEventListener("click", entregarDinero);


function entregarDinero() 
{
	//Obtener valor a extraer de caja de texto	
	var dineroInput = document.getElementById("dinero");
	dinero = parseInt(dineroInput.value);

	//agregar transaccino al historial
	historial.push({monto: dinero});

	//Saldo final
	saldo -= dinero;
	mostrarSaldo.innerHTML = "Saldo del cajero es: " + saldo;

	//Recorre c/elemento que hay en caja es decir c/billete
	for (var billetes of caja)
	{
		if(dinero > 0)
		{
			div = Math.floor(dinero / billetes.valor);
			if (div > billetes.cantidad) 
			{
				papeles = billetes.cantidad;
			}
			else
			{
				papeles = div;
			}

			entregado.push(new Billete(billetes.denominacion, billetes.valor, papeles));
			dinero = dinero - (billetes.valor * papeles);
		}
	}

	if (dinero > 0) 
	{
		resultado.innerHTML = "Este cajero tiene fondos insuficientes, para el dinero solicitado.";
	}
	else
	{
		// Limpiar el div de resultado antes de mostrar los nuevos resultados
		resultado.innerHTML = "";

		for(var e of entregado)	
		{
			if (e.cantidad > 0) 
			{
				//se crea un conenedor en un div para que alinea imagen de billete con texto
				divContenedor = document.createElement("div");
				divContenedor.className = "imagen_contenedor";
				//Se agrega a contenedor contenido en texto
				var contenidoTexto = document.createTextNode(e.cantidad + " billetes de ");
				divContenedor.appendChild(contenidoTexto);
				//Se agrega imagen
				divContenedor.appendChild(e.imagen);
				//Se agrega contenedor a resultado
				resultado.appendChild(divContenedor);
			}
		}
        // Limpiar la caja de dinero
		dineroInput.value = "";
        // Limpiar arreglo de billetes entregados
		entregado = [];
	}
	mostrarhistorial();
}

for (var total of caja)
{
	saldo += total.valor * total.cantidad;
}

var registrosMostrados = [];

function mostrarhistorial()
{
	var historialMostrar = document.getElementById("historialMostrar");
	historialMostrar.innerHTML += "";


	for(var i = 0; i < historial.length; i++)
	{
		if (registrosMostrados.indexOf(i) === -1) 
		{
			historialMostrar.innerHTML +=
			"Transacción No. " + (i + 1) + ": Retiro de $" + historial[i].monto + "<br><br>";

			registrosMostrados.push(i);
		}

	}	
}


/*
DESAFIO

-En vex de mostrar en texto, mostrar imagenes de billetes.
-Caja sin recargar pagina se reste a la variable caja.
-Se muestre cuanto es el saldo y cuanto dinero se ha entregado en cada tansaccion.
-Hacer codigo mas compacto.

*/