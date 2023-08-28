var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var cantidad = aleatorio(1, 4);

var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};


var fondo = {
	url: "tile.png",
	cargaOK: false,
}

var vaca = {
	url: "vaca.png",
	cargaOK: false
}

var pollo = {
	url: "pollo.png",
	cargaOK: false
}

var cerdo = {
	url: "cerdo.png",
	cargaOK: false
} 

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);


function cargarFondo()
{
	fondo.cargaOK = true;
	dibujar();
}

function cargarVacas()
{
	vaca.cargaOK = true;
	dibujar();
}

function cargarPollos()
{
	pollo.cargaOK = true;
	dibujar();
}

function cargarCerdos()
{
	cerdo.cargaOK = true;
	moverCerdo();
}

function dibujar()
{
	var movimiento = 5;


	/*Dibuja mapa fondo*/
	if(fondo.cargaOK)
	{
		papel.drawImage(fondo.imagen, 0, 0);
	}
	/*Dibujar vacas catidad aleatoria y pocision aleatoria*/
	if (vaca.cargaOK) 
	{
		for(var v = 0; v < cantidad; v++)
		{	
			var x = aleatorio(0, 5)*70;
			var y = aleatorio(0, 5)*70;
			papel.drawImage(vaca.imagen, x, y);
		}
	}

	/*Dibujar vacas catidad aleatoria y pocision aleatoria*/
	if(pollo.cargaOK)
	{
		for(var p = 0; p < cantidad; p++)
		{
			var x = aleatorio(0, 5)*80;
			var y = aleatorio(0, 5)*80;
			papel.drawImage(pollo.imagen, x, y);

		}
	}

	if (cerdo.cargaOK) 
	{
		var x = 5*80;
		var y = 5*80;

		

		function moverCerdo(evento)
		{		
			switch (evento.keyCode) 
			{
			case teclas.UP:
				papel.drawImage(cerdo.imagen, x, y - movimiento);
				y = y - movimiento;				
				break;
			case teclas.DOWN:
				papel.drawImage(cerdo.imagen, x, y + movimiento);
				y = y + movimiento;
				break;
			case teclas.LEFT:
				papel.drawImage(cerdo.imagen, x - movimiento, y);
				x = x - movimiento;
				break;
			case teclas.RIGHT:
				papel.drawImage(cerdo.imagen, x + movimiento, y);
				x = x + movimiento;
				break;
			default:
				
			}
		}

		document.addEventListener("keydown", moverCerdo);
	}
}

/*Dibujar cerdo que se mueve*/


/*var z = aleatorio(10 ,20);

for(var i=0; i<10; i++)

{
	z = aleatorio(10 , 20);
	document.write(z + ", ");
}
*/
function aleatorio(min, maxi)
{
	var resultado;
	resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
	return resultado;	
}