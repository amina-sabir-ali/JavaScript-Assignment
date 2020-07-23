// -------------- Chap-38 to Chap-42 --------------
// **** TASK 1 ****
function power(a,b){
          var i; 
          var p=1;
          for(i=1;i<=b;i++){
            p*=a;
          }   
          console.log(p);
}
// **** TASK 2 ****
function checkYear(year){
  if( year % 4 == 0){
    if( year % 100 == 0){
      if( year % 400 == 0){ 
        return true;
      }
      else{ 
        return false; 
      }}
      else{ 
        return true;  
      }
    }
    else{
      return false;
    }
  }    
var year = +prompt("Enter any year");
if(checkYear(year)){
  document.write("<br>" + year + " is leap year");
}
else{
  document.write("<br>" + year + " is not a leap year");
}
// **** TASK 3 ****
function sValue(a,b,c){
  return (a+b+c) / 2;
}
function area(a,b,c){
  var S = sValue(a,b,c);
  var area = S*(S - a)*(S - b)*(S - c);
  return area;
}
var a = +prompt("Enter side a of triangle");
var b = +prompt("Enter side b of triangle");
var c = +prompt("Enter side c of triangle");
var triangle_area = area(a,b,c);
document.write("<br><h3>Area of Triangle Of side ("+ a + "," + b + "," + c +") is "+ triangle_area + "</h3>");
// **** TASK 4 ****
function average(sub1,sub2,sub3){
  return (sub1+sub2+sub3)/3;
}
function percentage(sub1,sub2,sub3){
  return ((sub1+sub2+sub3)/300)*100;
}
function mainFunction(sub1,sub2,sub3){
  var avg = average(sub1,sub2,sub3);
  var per = percentage(sub1,sub2,sub3);
  document.write("<br><p><strong> Average </strong> : "+ avg + "<br>" );
  document.write("<br><p><strong> Percentage </strong> : "+ per + "%<br>" );
}
mainFunction(40,30,70);
// **** TASK 5 ****
var str = "Hello world, welcome to the universe.";
function index_Of(str,search_element){
for(var i = 0; i < str.length; i++){
    if (str[i] == search_element){
      console.log(i);
      return i;
    }
  }
}
document.write("<br> IndexOF " + " = " + index_Of(str,"w"));
// **** TASK 6 ****
var sentence = prompt("Enter any sentence?");
function delete_vowels(sentence){
  if(sentence.length > 25){
    alert("Senenctence is more than 25 character long");
  }
  else{
      var sen = sentence.replace(/a|e|i|o|u/gi,'');
      console.log(sen);
      return sen;
  }
}
document.write("<br> Without vowels: " + delete_vowels(sentence));
// **** TASK 7 ****
var str = prompt("Enter a string");
var found=0; 
var count = 0;
for(var i=0; i < str.length; i++){
  if(isVowel(str[i]))
  {
    found++;
  }
  else{
    found=0;
  }

  if( found == 2){
    console.log(str[i-1]+str[i]);
    found = 1;
    count++;
  }
}
function isVowel(ch){
  switch(ch)
  {
    case 'A':
    case 'a':
    case 'E':
    case 'e':
    case 'I':
    case 'i':
    case 'O':
    case 'o':
    case 'U':
    case 'u':
      return 1;
    default:
      return 0;
  }
}
// **** TASK 8 ****
var dis = +prompt("Enter the distance between 2 cities in km");
document.write("<br> Distance in km: " + dis);
function dis_in_meters(dis){
  return dis*1000;
}
function dis_in_feet(dis){
  return dis_in_meters(dis) * 3.28;
}
function dis_in_inches(dis){
  return dis_in_feet(dis) * 12;
}
function dis_in_centimeters(dis){
  return dis_in_inches(dis) * 30;
}
document.write("<br> Distance in meters: " + dis_in_meters(dis));
document.write("<br> Distance in feet: " + dis_in_feet(dis));
document.write("<br> Distance in inches: " + dis_in_inches(dis));
document.write("<br> Distance in centimeters: " + dis_in_centimeters(dis));
// **** TASK 9 ****
var count = 1; 
var working_hours; 
var over_time;
var over_time_pay;

while(count<=10)
{
    working_hours = +prompt("Enter the working hours of employee no :" + count);
    if(working_hours>40)
    {
        over_time = working_hours - 40;
        over_time_pay = over_time * 12.00;
        document.write("<br>Employee No " + count +" overtime pay is " + over_time_pay);
    }
    else{
        document.write("<br>Employee No "+ count +" You have to work for more than 40 hours to get over time pay");
    }
    count++;
}
// **** TASK 10 ****
var amount = +prompt("Input amount for withdraw");
document.write("<br>Required notes of Rs. 100 : " +  parseInt(amount / 100));
document.write("<br>Required notes of Rs. 50 : " + parseInt((amount % 100) / 50));
document.write("<br>Required notes of Rs. 10 : " + parseInt((((amount % 100) % 50) / 10)));
document.write("<br>Amount still remaining Rs. : " + parseInt((((amount % 100) % 50) % 10)));

