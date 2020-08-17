var list_item = document.getElementById('list-item');

function addTodo(){
    var todo_item = document.getElementById('todo_input');
    // Create li tag with text node
    var li = document.createElement('li');
    // var Text = document.createTextNode(todo_item.value);
    // li.appendChild(Text);

    // create div element group
    var divElement = document.createElement('div');
    divElement.setAttribute('class','input-group mt-2');
    li.appendChild(divElement);

    //create input in div class input-group
    var output = document.createElement('input');
    output.setAttribute("type","text");
    output.setAttribute("class","form-control");
    output.setAttribute("aria-describedby","button-addon4");
    output.value = todo_item.value;
    output.setAttribute("readonly","true");
    divElement.appendChild(output);
     
    //create div element with class input-group-append
    var btnGroupDiv = document.createElement('div');
    btnGroupDiv.setAttribute('class','input-group-append');
    btnGroupDiv.setAttribute('id','button-addon4');
    divElement.appendChild(btnGroupDiv); 
    
    // create check button
    var checkBtn = document.createElement('button');
    checkBtn.setAttribute("class","btn btn-dark");
    var checkText = document.createElement('i');
    checkText.setAttribute("class","fas fa-check");
    checkBtn.appendChild(checkText);
    btnGroupDiv.appendChild(checkBtn);

    // create edit button
    var editBtn = document.createElement('button');
    editBtn.setAttribute("class","btn btn-dark");
    var editText = document.createElement('i');
    editText.setAttribute("class","fas fa-pen");
    editBtn.appendChild(editText);
    btnGroupDiv.appendChild(editBtn);

    // create delete button
    var delBtn = document.createElement('button');
    delBtn.setAttribute("class","btn btn-dark");
    var delText = document.createElement('i');
    delText.setAttribute("class","fas fa-trash");
    delBtn.appendChild(delText);
    btnGroupDiv.appendChild(delBtn);

    li.appendChild(divElement)
    console.log(li);
    // // create delete button
    // var delBtn = document.createElement('button');
    // delBtn.setAttribute("class","btn btn-dark mt-2 mr-1");
    // var delText = document.createElement('i');
    // delText.setAttribute("class","fas fa-trash");
    // delBtn.appendChild(delText);

    checkBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.setAttribute("onclick","deleteItem(this)")
    // li.appendChild(delBtn);

    // // create delete button
    // var editBtn = document.createElement('button');
    // editBtn.setAttribute("class","btn btn-dark mt-2");
    // var editText = document.createElement('i');
    // editText.setAttribute("class","fas fa-pen");
    
    editBtn.setAttribute("onclick","editItem(this)");    
    // editBtn.appendChild(editText);

    // li.appendChild(editBtn);

    list_item.appendChild(li);
    todo_item.value = "";
}

function deleteItem(e){
//    e.parentNode.remove();
      e.parentNode.parentNode.parentNode.remove();
}

function editItem(e){
    // var readonlyValue = e.parentNode.parentNode.firstChild.getAttribute('readonly');
    var newValue = prompt("Edit the todo list",e.parentNode.parentNode.firstChild.value);
    e.parentNode.parentNode.firstChild.value = newValue;
    // var newValue = prompt("Edit the todo list",e.parentNode.firstChild.nodeValue);
    // e.parentNode.firstChild.nodeValue = newValue;
}

function deleteAll(){
    list_item.innerHTML = "";
}