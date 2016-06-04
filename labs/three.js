//шаблонф проектирования - паттерны
//регулярные выражения  V
//объект с какой буквы?

//перевод в дыоичную систему
var n = 543
console.log(n.toString(2));
var n = n.toString(2);
console.log(parseInt(n,2));


//работа со строками
var s = "Just simple test";
console.log(s.length);
console.log(s.charAt(2));
var x = String.fromCharCode(1075);
console.log(x);

var str = "Одна голова хорошо, а две - луше"
console.log(str.slice(5,8));//Гол
console.log(str.slice(10,8))//empty (substring перевернет сам - 8.10)
console.log(str.slice(-1));//e
console.log(str.slice(str.length-1));//e
console.log(str.substring(8, 5)); //перевернет индексы и напишет гол

//считаем колво слов
var s = 'могли быть видны звезды, о чем свидетельствует Фукидид формирует звукосниматель быть.'

console.log(s);
var word = "быть", i = 0, p = 0;

while(s.indexOf(word, p) != -1){
  p = s.indexOf(word, p);
  p++;
  i++;
}
console.log(word + i);


//lab
var s1 = 'Мы знаем, что монохромный цвет – это градации серого';
var txt= 'серо';
var word1;

var arr = s1.split(" ");
console.log(arr);
for(var i = 0; i < arr.length; i ++){
  if(arr[i].indexOf(txt) != -1)
  {
    word1 = arr[i]
    console.log(txt + " найден в " + word1);
  }
  else {
    //nothing to do here
  }
}


//lab2

function substrCount(input,needle,offset,mlength){

input = input.slice(offset,mlength);
return input.split(needle).length - 1;


}

console.log(substrCount('Good Golly Miss Molly', 'll', 7, 10)); //lly 
