var list_item = document.getElementById('list-item')
function addTodo(){
   var todo_item = document.getElementById('todo-item');
   // Create li tag with text node
   var li = document.createElement('li');
   var Text = document.createTextNode(todo_item.value);
   li.setAttribute("class","todo_item");
   li.appendChild(Text);

   // Edit Button
   var editBtn = document.createElement('button');
   var editText = document.createTextNode("Edit");
   editBtn.appendChild(editText);
   
   editBtn.setAttribute("class","editbtn");
   editBtn.setAttribute("class","btn btn-dark ml-4");
   editBtn.setAttribute("onclick","editItem(this);");
   li.appendChild(editBtn);
   
   // Delete Button
   var delBtn = document.createElement('button');
   var delText = document.createTextNode('Delete');
   delBtn.appendChild(delText);

   delBtn.setAttribute("class","delbtn");
   delBtn.setAttribute("class","btn btn-dark ml-1");
   delBtn.setAttribute("onclick","deleteItem(this)")
   li.appendChild(delBtn);
  

   list_item.appendChild(li);
   console.log(list_item);
   todo_item.value = "";
}


function deleteItem(e){
   e.parentNode.remove();
}

function editItem(e){
   var editValue = prompt("Enter edit value",e.parentNode.firstChild.nodeValue);
   // console.log(e.parentNode.childNodes[0]);
   // console.log(e.parentNode.firstChild);
   console.log(editValue);
   e.parentNode.firstChild.nodeValue = editValue;
}

function deleteAll(){
   list_item.innerHTML = "";
}