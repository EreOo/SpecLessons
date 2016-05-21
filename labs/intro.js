console.log("Hello, World")

//Math.PI

var V = 0,
h = 15.5,
r = 5.2;

V = h * r * r * Math.PI / 3;

console.log("V = " + V );
console.log("Random = " + (Math.random() * 8));

var S = 1e7, //kredit
n = 20, //time year
p = 10, //% year
A = 0; //month


n = n * 12;
p = p / 12;
p = p / 100;

A = S * p / (1 - Math.pow(1+p,-n));
console.log("Платить в месяц = " + A);



//console.log(S / (n*12));


//yearPlus = S / 100 * 10;
//console.log(S);
//allplus = yearPlus * n;
//A = ((S + allplus) / (n*12));
//.log("Платить в месяц = " + A);





var salary = 3e4;
if(salary < 120000){
	console.log("Учиться...")
}
else{
	console.log("Красава!")
}


//товар 1 21 ...
//товара 2-4 22-24
//товаров 5 - 20 25 -30

var word1 = "товар", word2 = "товара", word3 = "товаров",
item = 1111;
console.log(item);
if( item % 100 == 11){
	console.log(word3);

}
else
if((item % 10) == 1 ){
	console.log(word1);
}
else
if((item % 10) == 2
||(item % 10) == 3
||(item % 10) == 4)
{
	console.log(word2);
}
else
if((item % 10) == 5
|| (item % 10) == 6
|| (item % 10) == 7
|| (item % 10) == 8
||(item % 10) == 9
||(item % 10) == 0
 ){
	console.log(word3);
}



var day = 7, menu = " ";
switch (day) {
	case 1: menu = "tvorog"; break;
	case 2: menu = "kurica"; break;
		case 3: menu = "protein"; break;
		case 4: menu = "ovsianka"; break;
			case 5: menu = "salat"; break;
				case 6: menu = "kartophan"; break;
					case 7: menu = "kefir"; break;

	default: menu ="week end";
}

console.log(day + " " + menu);


var i = 1;

// while( i <= 20)
// {
// // от 1 до 20
// 	console.log(i);
//
// //нечетные
//    if(i%2 != 0){
// 		 console.log("Нечетнеы " + i);
// 	 }
// //квадраты
// 	 console.log("Sqrt " + Math.sqrt(i));
//
// 	i++;
// }


var y = 1;
while (y != 11){
	console.log(8 * y);
	y++;
}


//выпадающий список
document.write("<select name =d>");
for (var i = 1; i < 21; i++)
	document.write("<option value =" +i+ ">" + i);
	document.write("</select>");

//таблица
  var COLS = 10, ROWS = 10, i, j;
	document.write("<table border = 1>");
	for (i = 1 ; i < ROWS; i++){
		document.write("<tr>");
		for(j = 1; j < COLS; j++){
		if((i*j)%2)
		document.write("<td style = 'background: #ff9'>");
		else
		document.write("<td>");
		document.write(i*j);
			document.write("</td>");
	}
}
	//document.write("</table>");


	//do while - цикл - если надо, что бы хоть один раз сделать что - то

	// rgb(10,130,76);
	// rgb(230,230,76);

	//за 10 шагов построить переход от одного цвета к другому

//r1 + i * ((r2 - r1) / s)

  var  r1 = 10, g1 = 130, b1 = 76;
  var r2 = 230, g2 = 230, b2 =76;
	var s = 10, i = 0, rgb = "", r, g, b;

	for (i = 0; i <=s; i++ ) {
		r = Math.round(r1 + i * (r2 - r1) / s);
		g = Math.round(g1 + i * (g2 - g1) / s);
		b = Math.round(b1 + i * (b2 - b1) / s);
		rgb = "rgb(" + r + "," + g + "," + b + ")";
		document.write("<div style='height:10px; background:" + rgb + "'></div>");
	}
