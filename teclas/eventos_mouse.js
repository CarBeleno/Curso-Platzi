var color = document.getElementById("selecion_color");
var anchoLinea = document.getElementById("ancho_linea")
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var dibujando = false;


function empezarDibujo(evento)
{
    dibujando = true;

    papel.beginPath();
    papel.strokeStyle = color.value;
    papel.lineWidth = anchoLinea.value;    
    papel.moveTo(evento.clientX - cuadrito.offsetLeft,  evento.clientY - cuadrito.offsetTop);
}

function dibujar(evento)
{
    if (!dibujando) return;

    papel.lineTo(evento.clientX - cuadrito.offsetLeft,  evento.clientY - cuadrito.offsetTop);
    papel.stroke();
}

function detenerDibujo()
{
    dibujando = false;
}

document.addEventListener("mousedown", empezarDibujo);
document.addEventListener("mousemove", dibujar);
document.addEventListener("mouseup", detenerDibujo);