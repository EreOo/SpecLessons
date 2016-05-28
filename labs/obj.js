// var user = {};
// user.name = "Jhon";
// user.salary = 500000;
// user.lastname = "Reit";
//
// user.say = function(txt){
//   console.log("Jhon: " + txt );
// }
//
// document.write(user.name);
//
//
//
// var user2 = {
//   name : "Jane",
//   salary : 540000,
//   say : function(txt){
//     console.log("Jane: " + txt );
//   }
// }
//
// console.log(user2);
// if("lastname" in user){
//   console.log(user.lastname);
// }
//
// user.say("hi");
// user2.say("hello")


var car = {
  name : "Zigguli",
  speed : 130,
  mass : 1240,
  show : function() {
    console.log("Это " + this.name +
     "\nразвивает скорость: " + this.speed +
     "\nмасса : " + car.mass);

  },
  drist : drist
}

var car2 = {
  name : "Lolga",
  speed : 140,
  mass : 1789,
  show : function() {
    console.log("Это боярска " + this.name +
    " \nразвивает скорость: " + this.speed +
     "\nмасса : " + this.mass);
  },
drist : drist
}

var car3 = car;


car.show();
car2.show();
car.drist();
car2.drist();
car3.show();

function drist(){
  console.log(this.name + " наваливает угла");
}

console.log(this);

function add(n){
  this.speed += n;
}

add.call(car, 40);
console.log(car);
add.namee = "method";
console.log(add.namee);
