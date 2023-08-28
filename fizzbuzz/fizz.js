var numero = 100;
var divisible = false;


for (var i = 1; i <= 100; i++) 
{
/*	divisible = false;
*/	if(esDivisible(i,3))
	{
		document.write(i + " Fizz");
/*		divislible = true;
*/	}
	
	if (esDivisible(i,5)) {
		document.write(i + " Buzz");
/*		divislible = true;
*/	}

	if (!esDivisible(i,3) && !esDivisible(i,5)) {
		document.write(i);
	}

	document.write("<br/>");
}

function esDivisible(num, divisor)
{
	if (num % divisor == 0) 
	{
		return true;
	}
	else {
		return false;
	}
}