// -------- Chapter no 21 to 25 --------
// -- Task 1 --
// var first_name = prompt("Enter first name?");
// var last_name = prompt("Enter last name?");
// var fullName = first_name + last_name;
// document.write("Hello " + fullName + "!" + "<br>");
// -- Task 2 --
// var fav_mobile_model = prompt("Enter your favorite mobile phone model?");
// var length_of_mobile_model = fav_mobile_model.length;
// document.write("My favorite phone is: ", fav_mobile_model);
// document.write("<br>Length of String: ",length_of_mobile_model);
// -- Task 3 --
// var str  = "Pakistani";
// document.write("<br>String: " + str);
// document.write("<br>Index of 'n' is: ",str.indexOf('n'));
// -- Task 4 --
// var str  = "Hello World”";
// document.write("<br>String: " + str);
// document.write("<br>Index of 'l' is: ",str.lastIndexOf('l'));
// -- Task 5 --
// var str  = "Pakistani";
// document.write("<br>String: " + str);
// document.write("<br>Character at index 3: ",str.charAt(3));
// -- Task 6 --
// var first_name = prompt("Enter first name?");
// var last_name = prompt("Enter last name?");
// var fullName = first_name.concat(" "+ last_name);
// document.write("<br>Hello " + fullName + "!" + "<br>");
// -- Task 7 --
// var str  = "Hyderabad";
// document.write("<br>String: " + str);
// document.write("<br>After replacement: ",str.replace("Hydera","Islam"));
// -- Task 8 --
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var new_msg = message.replace(/and/g,'&');
// document.write("<br>" + new_msg);
// -- Task 9 --
// var value_in_str = "472";
// document.write("<br>Value: ",value_in_str,"<br>Type: ", typeof(value_in_str));
// var value_in_num = Number(value_in_str);
// document.write("<br>Value: ",value_in_num,"<br>Type: ", typeof(value_in_num));
// -- Task 10 --
// var usr_input = prompt("Enter user input:");
// document.write("<br>User input: ",usr_input);
// document.write("<br>Upper Case: ",usr_input.toUpperCase());
// -- Task 11 --
// var usr_input = prompt("Enter user input:");
// document.write("<br>User input: ",usr_input);
// var first_char = usr_input.charAt(0).toUpperCase();
// document.write("<br>Title Case: ",first_char + usr_input.slice(1));
// -- Task 12 --
// var num = 35.36 ;
// document.write("<br>Number: ",num);
// var new_str = (num.toString()).replace('.','');
// document.write("<br>Result: ",new_str);
// -- Task 13 --
// var username = prompt("Enter username: ");
// for(var i=0; i<username.length; i++){
//     if(username.charCodeAt(i) == 33 || username.charCodeAt(i) == 44 || username.charCodeAt(i) == 46 || username.charCodeAt(i) == 64){
//     alert("Please enter a valid username");
//     }
// }  
// -- Task 14 --
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var matchFound = "no";
// var user_srch = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// for(var i=0; i< A.length; i++){
//    if(user_srch.toLowerCase() == A[i].toLowerCase()){
//    document.write(A[i]," is <strong>avaliable</strong> at index ",i," in our backery");
//    matchFound = "yes";
//    }   
// }
// if(matchFound == "no"){
//    document.write("We are sorry. ",user_srch,"is <strong> not avaliable</strong> in our backery");
// }
// -- Task 15 --
var password = prompt("Enter your password");
document.write("<br>Enter password: ",password);
if(password.length > 6){
for(var i=0; i< password.length; i++){
    if ((password.charCodeAt(i) >= 33 && password.charCodeAt(i) <= 47) || (password.charCodeAt(i)>=58 && password.charCodeAt(i) <= 64) || (password.charCodeAt(i) >= 91 && password.charCodeAt(i)<= 96)){
        document.write("<br>Password should only contain alphabets and numbers");
    }
    else if(password.charAt(0) == '0' || password.charAt(0) == '1' || password.charAt(0) == '2'|| password.charAt(0) == '3' || password.charAt(0) == '4' || password.charAt(0) == '5' || password.charAt(0) == '6' || password.charAt(0) == '7' || password.charAt(0) == '8' || password.charAt(0) == '9'){
        document.write("<br>Password cannot begin with a number");
    }
}}
else{
    document.write("<br>Password must be atleast 6 character long");    
}
// -- Task 16 --
// var university = "University of Karachi";
// var arr_str = university.split("");
// document.write("<br>");
// for(var i=0; i< arr_str.length; i++){
//     document.write(arr_str[i],"<br>");
// }
// -- Task 17 --
// var user_input = prompt("Enter user input");
// document.write("<br>User Input: ",user_input);
// document.write("<br>Last character of input: ",user_input.charAt(user_input.length-1));
// -- Task 18 --
// var text = "The quick brown fox jumps over the lazy dog";
// document.write("<br>Text: ",text);
// var word_to_check = 'amn';
// text = text.split(" ");
// var count = 0;
// console.log(count);
// for(var i=0; i < text.length ; i++){
//     if ( text[i].toLowerCase() === word_to_check){
//         count += 1;
//         console.log(count);
//     }
// }
// document.write("<br>There are ",count," occurrence(s) of the word '",word_to_check,"'");



// -------- Chapter no 26 to 30 --------
// -- Task 1 --
// var positive_num = +prompt("Enter a positive integer?");
// if(positive_num<0){
//     document.write("Please enter a positive integer?");
// }
// // -------a-------
// document.write("<br>Number: ",positive_num);
// // -------b-------
// document.write("<br>round off value: ",Math.round(positive_num));
// // -------c-------
// document.write("<br>floor value: ",Math.floor(positive_num));
// // -------d-------
// document.write("<br>ceil value: ",Math.ceil(positive_num));
// -- Task 2 --
// var negative_num = +prompt("Enter a negative floating point number?");
// // -------a-------
// document.write("<br>Number: ",negative_num);
// // -------b-------
// document.write("<br>round off value: ",Math.round(negative_num));
// // -------c-------
// document.write("<br>floor value: ",Math.floor(negative_num));
// // -------d-------
// document.write("<br>ceil value: ",Math.ceil(negative_num));
// -- Task 3 --
// var num = +prompt("Enter a num?");
// document.write("<br>The absolute value of ",num," is ",Math.abs(num));
// -- Task 4 --
// var dice = Math.floor((Math.random() * 10) + 1);
// document.write("<br>random dice value: ",dice);
// -- Task 5 --
// var coin_value = Math.round((Math.random() * 2));
// document.write("<br>",coin_value);
// if(coin_value == 1){
//     document.write("<br>random coin value: Heads");
// }
// else{
//     document.write("<br>random coin value: Tails");
// }
// -- Task 6 --
// var num = Math.floor((Math.random() * 100));
// document.write("<br>random number between 1 and 100: ",num);
// -- Task 7 --
// var usr_weight = parseFloat(prompt("Enter your weight in kilograms?"));
// document.write("<br>The weight of user is : ",usr_weight," kilograms");
// -- Task 8 --
// var secret_num = Math.floor(Math.random() * 10);
// var guess_num = +prompt("Enter a number between 1 to 10");
// if (guess_num === secret_num ){
//     document.write("<br><h3>Congratulation you win</h3>");
// }
// else{
//     document.write("<br>You make a wrong guess.<strong>Try Again</strong>");
// }



// -------- Chapter no 31 to 34 --------
// -- Task 1 --
var current_Date = new Date();
document.write("<br>",current_Date);
// -- Task 2 --
Months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var current_Month = current_Date.getMonth();
document.write("<br>Current month: ",Months[current_Month]);
// -- Task 3 --
var current_Day = current_Date.getDay();
Day = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.write("<br>Today is ",Day[current_Day].slice(0,3));
// -- Task 4 --
if(current_Day===0 || current_Day===6){
    alert("It’s Fun day")
}
// -- Task 5 --
var month_date = current_Date.getDate();
if(month_date < 16){
    document.write("<br>First fifteen days of the month");
}
else{
    document.write("<br>Last days of the month");
}
// -- Task 6 --
document.write("<br>Current Date: ",current_Date);
document.write("<br>Elapsed Milliseconds since January 1, 1970: ",current_Date.getTime());
document.write("<br>Elapsed minutes since January 1, 1970: ",((current_Date.getTime())/1000*60));
// -- Task 7 --  
var curr_Hours = current_Date.getHours();
if(curr_Hours > 12 && curr_Hours <= 23){
   document.write("<br><h3>It's PM</h3>");
}
else{
    document.write("<br><h3>It's AM</h3>");
}
// -- Task 8 --
var laterDate = new Date("Dec 31,2020");
document.write("<br>Later Day: ",laterDate);
// -- Task 9 --
var firstRamadan = new Date("Apr 24, 2020");
var msDiff = current_Date.getTime() - firstRamadan.getTime();
var dDiff = Math.floor(msDiff/(1000*60*60*24));
document.write("<br>",dDiff," days have passed since 1st Ramadan, 2020");
// -- Task 10 -- 
var reference_date = new Date("Dec 05, 2015 22:50:16");
document.write("<br>On reference date: ",reference_date);
var beg_date = new Date("Jan 01,2015")
// var secDiff = current_Date.getSeconds() - reference_date.getSeconds();
var secDiff = reference_date.getSeconds() - beg_date.getSeconds();
document.write("<br>",secDiff," second has passed since begining of 2015");
// -- Task 11 --
// var current_Date = new Date();
// document.write("<br>Current Date: ",current_Date);
// var hour = current_Date.getHours();
// var hour_ahead = hour - 1;
// var hour = current_Date.setHours(hour_ahead);
// document.write("<br>1 hour ago,it was ",current_Date);
// -- Task 12 --
// var current_Date = new Date();
// document.write("<br>Current Date: ",current_Date);
// var year = current_Date.getFullYear();
// var year_back = year - 100;
// var year = current_Date.setFullYear(year_back);
// document.write("<br>100 years back, it was ",current_Date);
// -- Task 13 --
// var age = +prompt("Enter your age?");
// var current_Date = new Date();
// var year = current_Date.getFullYear();
// var birth_year =  year - age;
// document.write("<br>Your age is: ",age);
// document.write("<br>Your birth year is: ",birth_year);
// -- Task 14 --
// var customerName = "ABC Customer";
// document.write("<br>Customer Name: <strong>",customerName,"</strong>");
// var currentMonth = "February";
// document.write("<br>Current Month: <strong>",currentMonth,"</strong>");
// var numberOfUnits = 410;
// document.write("<br>Number of units: <strong>",numberOfUnits,"</strong>");
// var chargesPerUnit = 16;
// document.write("<br>Charges per unit: <strong>",chargesPerUnit,"</strong>");
// var netAmountPayable = numberOfUnits * chargesPerUnit;
// document.write("<br>Net Amount Payable (within Due Date): <strong>",netAmountPayable,"</strong>");
// var latePaymentSurcharge = 350;
// document.write("<br>Late Payment Surcharge: <strong>",latePaymentSurcharge,"</strong>");
// var grossAmountPayable = netAmountPayable + latePaymentSurcharge;
// document.write("<br>Gross Amount Payable (after Due Date): <strong>",grossAmountPayable,"</strong>");




// -------- Chapter no 35 to 38 --------
// -- Task 1 --
// function current_date_day(){
//     var c_time = new Date();
//     document.write("<br><strong>",c_time,"</strong>"); 
// }
// current_date_day();
// -- Task 2 --
// function greet(fname,lname){
//     var full_name = fname + " " + lname;
//     document.write("<br>Hello, ",full_name);
// }
// greet("John","Smith");
// // -- Task 3 --
// function add(num1,num2){
//     return num1 + num2;
// }
// var sum = add(20,6);
// document.write("<br><strong>Sum: ",sum,"</strong>");
 // -- Task 4 --
//  function calculator(num1,num2,op){
//      if(op === '+'){
//       return num1 + num2;
//      }
//      else if(op === '-'){
//          return num1 - num2;
//      } 
//      else if(op === 'x'){
//         return num1 * num2;
//     } 
//     else if(op === '/'){
//         return num1 / num2;
//     } 
//     else{
//         alert("Invalid operator");
//     }
//  }
// var val1 = +prompt("Enter first value");
// var val2 = +prompt("Enter second value");
// var op = prompt("Enter operation to perform");
// var result = calculator(val1,val2,op);
// document.write("<br><strong>",result,"</strong>");
// -- Task 5 --
// function square(num){
//     return num * num;
// }
// document.write("<br>Square : ",square(4));
// -- Task 6 --
// var fact = 1;
// function factorial(num){
//     if(num === 0){
//         fact = 1;
//     }
//     else{
//         for(var i=1; i <= num; i++){
//             fact = fact *  i;
//         }
//     }
//      return fact;
// }
// var f = +prompt("Enter a number to calculate it's factorial?");
// document.write("<br><strong>Factorial: ",factorial(f),"</strong>");
// -- Task 7 --
// function displayCounting(start,end){
//     for(var i=start; i<=end; i++){
//         document.write("<br>Counting: ",i);
//     }
// }

// var start = +prompt("Enter start number?");
// var end = +prompt("Enter the end number?");
// displayCounting(start,end)
// -- Task 8 --
// function calculateHypotenuse(base,perpendicular){
//    function calculateSquare(num){
//         return (num*num);
//     }
//    hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
//    return Math.floor(hypotenuse);
// }
// document.write("<br>Hypotenuse of triangle = ",calculateHypotenuse(30,44));
// -- Task 9 --
// function cal_rectangle_area(width,height){
//     return width * height;
// }
// // ----i----
// document.write("<br>Area of Rectangle: ",cal_rectangle_area(22,44));
// // ----ii----
// var width = 50;
// var height = 22;
// document.write("<br>Area of Rectangle: ",cal_rectangle_area(width,height));
// -- Task 10 --
// function isPalindrome(str){
//     // remove special character or symbol from string
//     str = str.replace(/\W/g,'');
//     str = str.toLowerCase();
//     for(var i=0; i<str.length; i++){
//         if(str[i] !== str[str.length-1-i]){
//          return false;
//         }
//     }
//     return true;
// }
// var check_str = isPalindrome("madam");
// if(check_str === true){
//     document.write("<br><strong>Given string is a palindrome.</strong>");
// }
// else{
//     document.write("<br><strong>Given string is not a palindrome.</strong>");
// }

// -- Task 11 --
// function capitalizeString(str){
//     return str[0].toUpperCase() + str.slice(1).toLowerCase();
// }
// function capitalizeWord(str){
//     return str.split(' ').map(capitalizeString).join(' ');
// }
// var str1 = "the quick brown fox";
// document.write("<br>EXAMPLE STRING: ",str1);
// document.write("<br>OUTPUT STRING: ",capitalizeWord(str1));
// -- Task 12 --
// function longestWord(str){
//     var str = str.split(' ');
//     var long_word = str[0];
//     for(var i=0; i<str.length; i++){
//         if(str[i].length > long_word.length){
//             long_word = str[i];
//         }
//     }
//     return long_word;
// }
// var str2 = "Web Development Tutorial";
// document.write("<br>EXAMPLE STRING: ",str2);
// document.write("<br>OUTPUT STRING: ",longestWord(str2));
// -- Task 13 --
// function countchar(str,char){
//     var count = 0;
//     for(var i=0; i<str.length; i++){
//       if (str[i].toLowerCase()=== char.toLowerCase()){
//           count +=1
//       }
//     }
//     return count;
// }
// var str3 = 'JSResourceS.com';
// var check_char = 'o'
// document.write("<br>char ",check_char," appear in string '",str3," ' ",countchar(str3,check_char)," times");
// -- Task 14 --
// function calcCircumference(radius){
//     var circumference = 2*3.1416*radius;
//     document.write("<br>The circumference is ",circumference); 
// }
// function calcArea(radius){
//     var area = 3.1416*radius*radius;
//     document.write("<br>The are is: ",area);
// }
// calcCircumference(26);
// calcArea(26);
































































































































