// -------------- Chap-49 to Chap-52 --------------
// **** TASK 1 ****
function showInfo(){
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var email = document.getElementById('email');
    var password = document.getElementById('password').value;
    document.getElementById('showFname').innerHTML = "First Name : " + fname.value; 
    document.getElementById('showLname').innerHTML = "Last Name : " + lname.value;
    document.getElementById('showEmail').innerHTML = "Email  : " + email.value;
    document.getElementById('showPassword').innerHTML = "Password : " + password.value;
}
    // **** TASK 2 ****
    function showMore(){
    var p = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sit veritatis deserunt sint quae minima debitis autem ea deleniti culpa, blanditiis quis neque harum, tenetur exercitationem laudantium quos quas? Maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sit veritatis deserunt sint quae minima debitis autem ea deleniti culpa, blanditiis quis neque harum, tenetur exercitationem laudantium quos quas? Maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sit veritatis deserunt sint quae minima debitis autem ea deleniti culpa, blanditiis quis neque harum, tenetur exercitationem laudantium quos quas? Maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sit veritatis deserunt sint quae minima debitis autem ea deleniti culpa, blanditiis quis neque harum, tenetur exercitationem laudantium quos quas? Maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sit veritatis deserunt sint quae minima debitis autem ea deleniti culpa, blanditiis quis neque harum, tenetur exercitationem laudantium quos quas? Maxime?";
    document.getElementById('para').innerHTML = p;
    }
    // **** TASK 3 ****
    var stdName = document.getElementById('stdname').value;
    var stdClass = document.getElementById('cname').value;
    function addStdInfo(){
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2)
    cell1.innerHTML = stdName;
    cell2.innerHTML = stdClass;
    cell3.innerHTML = '<button type="button" class="btn btn-danger" onclick="deleteStdRecord(this);">Delete Row</button>';
    }
    function deleteStdRecord(r){
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i); 
    }
    