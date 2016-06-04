//Codepen.io

var rex = /^m/ //регулярное выражеие

var re1 = /\d\d-\d\d-\d\d\d\d/;
var re2 = /\d?\d-\d?\d-\d{4}/;
var re = /^(0?[1-9]|[12]\d|3[01])-\d?\d-\d{4}$/

console.log(re.test("10-02-2018"));
console.log(re.test("7-07-2007"));
console.log(re.test("443-2-2008"));
