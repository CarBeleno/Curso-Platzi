class Billete
{
	constructor(d, v, c)
	{
		
		this.imagen = new Image();

		this.denominacion = d;
		this.valor = v;
		this.cantidad = c;

		this.imagen.src = imagenes[this.denominacion];
	}

	mostrar()
	{
		document.body.appendChild(this.imagen);
	}
}


function entregarDinero()
{
	var t = document.getElementById("dinero");
	dinero = parseInt(t.value);


	for(var bi of caja)
	{
		if (dinero > 0) 
		{
			div = Math.floor(dinero / bi.valor);
			if (div > bi.cantidad) 
			{
				papeles = bi.cantidad;
			}
			else
			{
				papeles = div;
			}

			entregado.push(new Billete (bi.denominacion, bi.valor, papeles));
			dinero = dinero - (bi.valor * papeles);
		}
	}

	if (dinero > 0) 
	{
		resultado.innerHTML = "Este cajero no puede darte esa cantidad";

	}
	else 
	{
		for(var e of entregado)
		{
			if (e.cantidad > 0) 
			{
				resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br/>";
				e.mostrar();
			}
		}
	}
}

var imagenes = [];

imagenes["Cien"] = "cien.png";
imagenes["Cincuenta"] = "cincuenta.png";
imagenes["Veinte"] = "veinte.png";
imagenes["Diez"] = "diez.png";
imagenes["Cinco"] = "cinco.png"


var caja = [];
var entregado = [];

/*caja.push(new Billete(100, 5));
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 30));
caja.push(new Billete(10, 10));
caja.push(new Billete(5 ,5));*/

caja.push(new Billete("Cien", 100, 5));
caja.push(new Billete("Cincuenta", 50, 10));
caja.push(new Billete("Veinte", 20, 30));
caja.push(new Billete("Diez", 10, 10));
caja.push(new Billete("Cinco", 5 ,5));

var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);