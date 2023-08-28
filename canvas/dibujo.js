var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var mitad_ancho = ancho/2;
var alto = d.height;
var mitad_alto = alto/2;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, yinicial); //ubicacion para iniciar el dibujo
	lienzo.lineTo(xfinal, yfinal); //trazo de linea hasta este punto
	lienzo.stroke(); //levanto el lapiz
	lienzo.closePath(); // me alisto para realizar otra parte del dibujo
}

function dibujoPorClick()
{
	var lineas = parseInt(texto.value);
	var l = 0;
/*	var yi, xf;
*/	var yi1, xf1;
	var yi2, xf2;
	var yi3, xf3;
	var colorlinea1 = "#71FF33";
	var colorlinea2 = "#33FFDA";
	var colorlinea3 = "#334CFF";
	var colorlinea4 = "#FFBE33";
	var espacio = mitad_ancho / lineas;

	for (l = 0; l < lineas; l++) 
	{
	/*	yi = espacio * l;
		xf = espacio * (l + 1);*/

		yi1 = espacio * l;
		xf1 = espacio * (l + 1);

		yi2 = mitad_alto - (yi1);
		xf2 = mitad_ancho + xf1;

		yi3 = mitad_alto + yi1;
		xf3 = mitad_ancho - (xf1);
		
		/*dibujarLinea(colorlinea, 0, yi, xf, ancho);*/
		dibujarLinea(colorlinea1, mitad_ancho-1, yi1, xf1, 1);
		dibujarLinea(colorlinea2, mitad_ancho-1, yi2, xf2, 1);
		dibujarLinea(colorlinea3, mitad_ancho-1, yi3, xf3, alto);
		dibujarLinea(colorlinea4, mitad_ancho-1, yi3, xf2, alto);

		console.log("Linea " + l);			
	}

	dibujarLinea(colorlinea1, 1, 1, mitad_ancho-1, 1);
	dibujarLinea(colorlinea1, 1, 1, 1, mitad_alto-1);
	dibujarLinea(colorlinea1, 1, mitad_alto-1, mitad_ancho-1, mitad_alto-1);

	dibujarLinea(colorlinea2, mitad_ancho-1, 1, ancho-1, 1);
	dibujarLinea(colorlinea2, ancho-1, 1, ancho-1, mitad_alto-1);
	dibujarLinea(colorlinea2, ancho-1, mitad_alto-1, mitad_ancho-1, mitad_alto-1);

	dibujarLinea(colorlinea3, 1, mitad_alto-1, 1, alto-1);
	dibujarLinea(colorlinea3, 1, ancho-1, mitad_ancho-1, alto-1);

	dibujarLinea(colorlinea4, mitad_ancho-1, mitad_alto-1, mitad_ancho-1, alto-1);
	dibujarLinea(colorlinea4, mitad_ancho-1, alto-1, ancho-1, alto-1);
	dibujarLinea(colorlinea4, ancho-1, alto-1, ancho-1, mitad_alto-1);
}