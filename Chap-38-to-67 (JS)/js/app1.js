// -------------- Chap-58 to Chap-67 --------------
// **** TASK 1 ****
// **** -----  TASK i  ----- ****
var main = document.getElementById("main-content");
// **** -----  TASK ii  ----- ****
console.log(main.children);
// **** -----  TASK iii  ----- ****
document.write("<br>All elemets of classs render");
var p1 =  main.childNodes[1].innerHTML;
document.write("<br>" + p1);
var p2 =  main.childNodes[3].innerHTML;
document.write("<br>" + p2);
var p3 =  main.childNodes[5].innerHTML;
document.write("<br>" + p3);
var p4 =  main.childNodes[7].innerHTML;
document.write("<br>" + p4);
var p5 =  main.childNodes[9].innerHTML;
document.write("<br>" + p5);
// **** -----  TASK iv  ----- ****
var fname = document.getElementById('first-name');
fname.value = "Alex";
// **** -----  TASK v  ----- ****
var lname = document.getElementById('last-name');
lname.value = "Bank";
var email = document.getElementById('email');
email.value = "alexbank@example.com";

// **** TASK 2 ****
// **** -----  TASK i  ----- ****
var fcontent = document.getElementById('form-content');
document.write("<br>Node Type : " + fcontent.nodeType);
// **** -----  TASK ii  ----- ****
document.write("<br>Node Type of Last Name: " + lname.nodeType);
// document.write("<br>Node Type of Last Name child: " + lname.value);
// **** -----  TASK iii  ----- ****
 lname.value = "George";
 document.write("<br>Updated Value of Last Name : " + lname.value);
// **** -----  TASK iv  ----- ****
var first_child =  main.firstChild;
document.write("<br>First child of id 'main-content' " + first_child);
var last_child =  main.lastChild;
document.write("<br>Last child of id 'main-content' " + last_child );
// **** -----  TASK v  ----- ****
console.log(lname.nextSibling);
console.log(lname.previousSibling);
// **** -----  TASK vi  ----- ****
console.log(email.parentElement);
console.log(email.nodeType)


