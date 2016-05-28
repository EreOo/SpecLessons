function wr(text) {
  console.log(text);
}

var m = [23,34,234, ,123123];
wr(m);

m = [23, function(){wr("Я функция")}, 666];
wr(m[1]()); //вызываем функцию из массива

for(i in m) //что то на уровне фор ич
{
  wr(m[i]);
}

console.clear();

// var fib = [], N = 50,o = 0; s = 1;
//
// for(var t = 0; t <= 25; t++)
// {
// var o = s+" ";
// fib[i] = o;
// var s = o + s;
// fib[i+1]= s + " ";
//
// };
//
// wr(fib);

var a = [345, 234, 23425555,123, -123];
document.write(a.join(" - "))

document.write(a.slice(1,3));//выхватываем число из массива по индексу
document.write(a.reverse());// реверс

//сортировка пузырьком
a.sort(sortN);
wr(a);

function sortN(x, y){
  return x - y;
}

a.pop();
wr(a);

a.shift();
wr(a);

a.unshift(777);
wr(a);
