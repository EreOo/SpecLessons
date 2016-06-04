
function Car(model, weight, speed, price){
  this.model = model;
  this.weight = weight;
  this.speed = speed;
  //this.price = price;

}

Car.prototype.show = function(){
  for(var p in this){
    console.log(p + " = " + this[p]);
  }
}

Car.prototype.price = 23000;

var car = new Car('vaz', 1230, 140,40000);
car.constructor.prototype.driver = "somebody";


//car.show();


Number.prototype.hex = function(){
  return this.toString(16);
}

var i = 4566;
//console.log( car.price.hex());


function TruckCar(power){
  this.power = power;
}

TruckCar.prototype = new Car('Kamaz',1e4,120);
//TruckCar.prototype.constructor = TruckCar;

var truck = new TruckCar(10000);
//truck.show();
console.log(truck);

TruckCar.prototype.show = function show() {
  console.log("KAMAZZZ!");
}


console.log(truck instanceof Car);
console.log(truck instanceof Object);
console.log(car instanceof TruckCar);

car.show();
truck.show();
