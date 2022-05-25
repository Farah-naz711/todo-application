var table = document.getElementById('table');

function addItem()
{
    var todo_item = document.getElementById('todo-item');
    // console.log(todo_item.value);

//     var tr = document.createElement('tr');
//     var td = document.createElement('td');
if(todo_item.value === '')
{
    return ;
}
   
else
{
var tr = table.insertRow();
var td1 = tr.insertCell()
var td2 = tr.insertCell()
var td3 = tr.insertCell();

// td1.appendChild(todo_item.value);
td1.innerHTML = todo_item.value;
var editBtn = document.createElement('button');
     editBtn.setAttribute('class','btn editbtns')
editBtn.appendChild(document.createTextNode("Edit"));

var deleteBtn = document.createElement('button');
deleteBtn.appendChild(document.createTextNode('Delete'));



td2.appendChild( editBtn);
td3.appendChild( deleteBtn);

table.appendChild(tr)

todo_item.value = "";


editBtn.setAttribute("onclick","editItem(this)");
deleteBtn.setAttribute("onclick","deleteItem(this)");

deleteBtn.setAttribute('class','btn deletebtns')


}

// td2.innerHTML = editBtn;
//     tr.appendChild(td);

// td.appendChild(button);
//     // tr.appendChild(td);

//     // td.appendChild(document.createTextNode(todo_item.value));
    
//   table.appendChild(tr); 
//     todo_item.value ="";

//    

// // var row = table.insertRow(1);
// var cell1 = tr.insertCell(0);
// var cell2 = tr.insertCell(1);

// cell1.innerHTML = " 1 ";
// cell2.innerHTML = " 2 "

}
function deleteItem(e)
{
    // tr.deleteRow()
//    var table =  document.getElementById('table').deleteRow();
// console.log(table.childNodes[0])
// console.log("Delete Function");
e.parentNode.parentNode.remove()
// console.log(e.parentNode.parentNode.remove());

// document.getElementById('table').deleteRow();
}
function editItem(e)
{
    // console.log("Edit Function")

    var edit = e.parentNode.parentNode.firstChild.innerHTML;
    // console.log();
    var updated = prompt("Edit ",edit);
    e.parentNode.parentNode.firstChild.innerHTML = updated;
}
function deleteAll()
{
    table.innerHTML= " ";
    // console.log(table);

}
