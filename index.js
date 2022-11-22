var itemList=document.getElementById('items');
var form=document.getElementById('addForm');
var filter=document.getElementById('filter');
form.addEventListener('submit',addItem);
filter.addEventListener('keyup',searchItem);
itemList.addEventListener('click',removeItem);
function addItem(e){
    e.preventDefault();
    var newItem=document.getElementById('item').value;
    var desc=document.getElementById('description').value;
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(' '));
    li.appendChild(document.createTextNode(desc));
    var delButton=document.createElement('button');
    var editButton=document.createElement('button');
    delButton.className='btn btn-danger btn-sm float-right delete';
    editButton.className='btn btn-sm float-right btnEdit';
    delButton.appendChild(document.createTextNode('X'));
    editButton.appendChild(document.createTextNode('EDIT'));
    li.appendChild(delButton);
    li.appendChild(editButton);
    itemList.appendChild(li);
}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are you sure?")){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
function searchItem(e){
    var text=e.target.value.toLowerCase();
    var searchItem=itemList.getElementsByTagName('li');
    Array.from(searchItem).forEach(item => {
        var itemName=item.firstChild.textContent;
        var desc=item.childNodes[2].textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1 || desc.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    });
}