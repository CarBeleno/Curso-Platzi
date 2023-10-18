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

//Cantidad de dinero en caja
var dinero =  0;

var entregado = [];

//Cantidad de billestes por denominación
var div = 0;

//Cantidad de billestes total
var papeles = 0;

//Obtener id boton
var boton = document.getElementById("extraer");


function entregarDinero() 
{
	//Obtener id de caja de texto
	var dineroInput = document.getElementById("dinero");
	//toma el valor de la caja de texto y lo covierte de texto a entero
	dinero = parseInt(dineroInput.value);

	    // Limpia el contenido existente en el resultado
    resultado.innerHTML = "";

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
		for(var e of entregado)	
		{
			if (e.cantidad > 0) 
			{
				divContenedor = document.createElement("div");
				divContenedor.className = "imagen_contenedor";

				var contenido = document.createTextNode(e.cantidad + " billetes de ");
				divContenedor.appendChild(contenido);

				var img = document.createElement("img");
				img.src = e.imagen.src;
				divContenedor.appendChild(img);

				
				resultado.appendChild(divContenedor);
			}
		}
	}

}

var resultado =  document.getElementById("resultado");
boton.addEventListener("click", entregarDinero);


/*
DESAFIO

En vex de mostrar en texto, mostrar imagenes de billetes
Caja sin recargar pagina se reste a la variable caja
Se muestre cuanto es el saldo y cuanto dinero se ha entregado en cada tansaccion
Hacer codigo mas compacto

*/