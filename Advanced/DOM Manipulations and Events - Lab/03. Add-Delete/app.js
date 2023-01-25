const list = document.getElementById('items');
list.addEventListener('click', onDelete)
function onDelete(event) {
  if(event.target.tagName == 'A'){
    event.target.parentElement.remove();
  }
}

function addItem() {
    // read input value
  let input = document.getElementById("newItemText").value;
  // create new <li>
  const li = document.createElement("li");
  li.textContent = input;
  const deleteBtn = document.createElement('a');
  deleteBtn.href= '#';
  deleteBtn.textContent='[Delete]';
  li.appendChild(deleteBtn);
 input = 's';

  //deleteBtn.addEventListener('click',()=>li.remove())
  // obtain reference to list element
  const list = document.getElementById("items");
  // add new <li> to list
  list.appendChild(li);
  
}
