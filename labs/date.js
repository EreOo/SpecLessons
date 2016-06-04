var data = new Date();
console.log(data);


console.log((new Date(0) - new Date(2016,5,1)));//1970
console.log((new Date(0) - new Date(2016,6,1)));
console.log(new Date().getDay());//6 - суббота




//КАЛЕНДАРЬ ЛОГИКА
function calendar(year,month){
  var i, j, WEEK = 6, DAYS = 7, table, k = 1;
  month--;
  var d = Date.UTC(year, month+1) - Date.UTC(year, month) ;
d /= 1000*60*60*24;//days in month

index = ((new Date(year,month)).getDay()+6) % 7;

WEEK = Math.ceil((index + d)/7);
k = 1 - index;

var m = [ "Январь","Февраль","Март","Апрель","Май","Июнь",
	"Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ];

  table = "<table>";
  table += "<caption>" + m[month]+" " + year + "</caption>";
  for(i = 0; i < WEEK; i++){
    table += "<tr>";
    for(j = 0; j < DAYS; j ++){
      table +="<td>";
      if(k > 0 && k <= d)
      table += k;
      k++;
    }
  }
  table += "</table>";
  document.write(table);
}


calendar(2016, 6);
