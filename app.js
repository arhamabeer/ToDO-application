
function add(){
var todo = document.getElementById('input');
var list = document.getElementById('list')


var li = document.createElement('li');
var text = document.createTextNode(todo.value)
li.setAttribute('class','list')
list.appendChild(li);
li.appendChild(text)



var del = document.createElement('button')
var del_text = document.createTextNode('Delete');
del.setAttribute('class','btn')
del.setAttribute('onclick',"deleteFun(this)")
del.appendChild(del_text)
li.appendChild(del);

var editBtn = document.createElement('button');
var editText = document.createTextNode('Edit')
editBtn.setAttribute('class', 'btn')
editBtn.setAttribute('onclick','edit(this)');
li.appendChild(editBtn);
editBtn.appendChild(editText)


todo.value = "";
}


function deleteFun(e){
    e.parentNode.remove();
}   

function edit(e){
    var val = e.parentNode.firstChild;
    var editText = prompt("Enter new Todo...", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = editText
    console.log(editText)
}

function delAll(){
    var list = document.getElementById('list')
    list.innerHTML = ""
}