function addItem() {
    const input = document.getElementById('newItemText').value;
    const li=document.createElement('li');
    li.textContent=input;
    const list = document.getElementById('items');
    list.appendChild(li);

}