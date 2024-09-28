const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
const container = document.querySelector('.container');

class item {
    constructor(itemName) {
        this.createDiv(itemName);
    }

    createDiv(itemName) {
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = 'text';

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        // Create a select dropdown for status
        let statusSelect = document.createElement('select');
        statusSelect.classList.add('statusSelect');

        let pendingOption = document.createElement('option');
        pendingOption.value = 'Pending';
        pendingOption.text = 'Pending';

        let progressOption = document.createElement('option');
        progressOption.value = 'In Progress';
        progressOption.text = 'In Progress';

        let completedOption = document.createElement('option');
        completedOption.value = 'Completed';
        completedOption.text = 'Completed';

        statusSelect.add(pendingOption);
        statusSelect.add(progressOption);
        statusSelect.add(completedOption);

        statusSelect.value = '';

        let dueDateInput = document.createElement('input');
        dueDateInput.type = 'date';
        dueDateInput.classList.add('dueDateInput');
        dueDateInput.valueAsDate = new Date();

        let editButton = document.createElement('button');
        editButton.innerHTML = 'EDIT';
        editButton.classList.add('editButton');

        let removeButton = document.createElement('button');
        removeButton.innerHTML = 'REMOVE';
        removeButton.classList.add('removeButton');

        container.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(statusSelect);
        itemBox.appendChild(dueDateInput);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click', () => this.edit(input, editButton));
        removeButton.addEventListener('click', () => this.remove(itemBox));
        statusSelect.addEventListener('change', () => this.updateStatus(input, statusSelect));
    }

    edit(input, editButton) {
        if (input.disabled) {
            input.disabled = false;
            editButton.innerHTML = 'SAVE';
            input.focus();
        } else {
            input.disabled = true;
            editButton.innerHTML = 'EDIT';
        }
    }

    remove(item) {
        container.removeChild(item);
    }

    updateStatus(input, statusSelect) {
        if (statusSelect.value === 'Completed') {
            input.style.textDecoration = 'line-through';
        } else {
            input.style.textDecoration = 'none';
        }
    }
}

function check() {
    if (input.value != '') {
        new item(input.value);
        input.value = '';
    }
}

addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if (e.which == 13) {
        check();
    }
});