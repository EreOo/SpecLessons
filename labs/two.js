document.write("28.05.2016")

//node.js

//функции - методы
function foo(){
  return("Hello world.");
}

console.log(foo());



function ipoteka (s, p, n){

n = n * 12;
p = p / 12;
p = p/ 100;
a = s * p / (1 - Math.pow(1+p,-n))
  return("Month :" + Math.round(a)+"\n"+"Money :" + Math.round(a*n-s));

}


console.log(ipoteka(2200000, 12, 12));

function wr(str){
  console.log(str);
}

wr("Привет")

var count = 0;

function add(){
   return count += 23;
}

add();
add();
add();
add();
wr(count + 11);

//замыкание
var x = "global"

function zamikanie() {
  var x = "local"
  function g(){
    console.log(x);
  }
  return g;
}
var my = zamikanie();
my();

//второй пример
var h1 = show("h1");
h1("work")
function show(tag){

  function h(txt){
    document.write("<"+tag+">"+txt+"</"+tag+">")
  }

  return h;
}

console.log("При2вет" == "Привет");

//рекурсия
function factorial(n){
  if(n != 1)
  return n*factorial(n-1);
  else {
    return 1;
  }
}

console.log(factorial(3));

//вывод от 1 - 20
function writrNumbers(n){
  if(n >= 1){
     writrNumbers(n-1);
        wr(n);
  }
}
wr(writrNumbers(20));

//аргументс - что то типо арайлист
function sum(){
  // wr(arguments.length);
  // wr(arguments[5]);
  var s = 0;
  for(var i = 0; i < arguments.length; i++){
    s += arguments[i];
  }
  return s;
}

wr(sum(1,2,3,43,234,345,456,567,345))


function graph(){

  document.write('<div id="graph" class="graph horizontal">');
  for(var i = 0;arguments.lenght() > i; i++){
    document.write('<div class="item" style="width: '+ arguments[i] +'%">')
    document.write(arguments[i]);
    document.write('</div>');
  }
document.write('</div>');
}

graph(10,20)
