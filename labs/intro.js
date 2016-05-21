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

while( i <= 20)
{
// от 1 до 20
	console.log(i);

//нечетные
   if(i%2 != 0){
		 console.log("Нечетнеы " + i);
	 }
//квадраты
	 console.log("Sqrt " + Math.sqrt(i));

	i++;
}
