function addItem() {
    const itemInput = document.getElementById('itemInput');
    const itemValue = itemInput.value.trim();
    if (itemValue) {
        const list = document.getElementById('list');
        const listItem = document.createElement('li');
        listItem.innerHTML = `${itemValue} <span onclick="removeItem(this)">✖</span>`;
        list.appendChild(listItem);
        itemInput.value = '';
    }
}

function removeItem(element) {
    const listItem = element.parentNode;
    listItem.parentNode.removeChild(listItem);
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        addItem();
    }
}

function resetList() {
    const list = document.getElementById('list');
    list.innerHTML = '';
}
