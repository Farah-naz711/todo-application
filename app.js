var table = document.getElementById('table');
var taskCount = document.getElementById('countTask')
var count =0
function addItem()
{
    var todo_item = document.getElementById('todo-item');

if(todo_item.value === '')
{
    return ;
}
   
else
{
    count++;
taskCount.innerHTML = count; 


var tr = table.insertRow();
var td1 = tr.insertCell()
var td2 = tr.insertCell()
var td3 = tr.insertCell();

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



for(var i = 2 ; i<table.childNodes.length; i++)
{
    if(i %2 ==0)
    {
        table.childNodes[i].style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    }
}


}


}



function deleteItem(e)
{
    count--;
    taskCount.innerHTML = count;
e.parentNode.parentNode.remove()
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
    count = 0;
    taskCount.innerHTML = count;
    table.innerHTML= " ";

}
