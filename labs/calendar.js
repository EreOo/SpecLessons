//КАЛЕНДАРЬ ЛОГИКА
function calendar(year,month){
  var i, j, WEEK = 6, DAYS = 7, table, k = 1;
  month--;

  var d = Date.UTC(year, month+1) - Date.UTC(year, month) ;
d /= 1000*60*60*24;//days in month

index = ((new Date(year,month)).getDay()+6) % 7;

WEEK = Math.ceil((index + d)/7);
k = 1 - index;


  table = "<table>";
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

calendar(2016, 5);
