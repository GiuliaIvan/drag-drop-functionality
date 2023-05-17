const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
    const item = list_items[i];

    // This code is used to implement drag and drop functionality.
    // It sets up event listeners for the 'dragstart' and 'dragend' events on each item
    // in the list. When an item is dragged, it is set to 'none' so that it can be
    // dragged, and when the drag ends, it is set back to 'block' so that it can be seen again.
    item.addEventListener('dragstart', function() {
        draggedItem = item;
        setTimeout(function () {
            item.style.display = 'none';
        }, 0);
    });

    item.addEventListener('dragend', function () {
        setTimeout(function () {
            draggedItem.style.display = 'block';
            draggedItem = null;
        }, 0);
    });

    //This code is setting up event listeners for a list of elements. The 'dragover' event
    // listener prevents the default behavior when an item is dragged over the element.
    // The 'dragenter' event listener sets the background color of the element to a semi-transparent
    // black when an item is dragged over it. The 'dragleave' event listener sets the background
    // color back to a semi-transparent black when an item is dragged away from it.
    // Finally, the 'drop' event listener adds the dragged item to the list and sets the
    // background color back to a semi-transparent black.
    for (let j = 0; j < lists.length; j++) {
        const list = lists[j];

        list.addEventListener('dragover', function (e) {
            e.preventDefault();
        });

        list.addEventListener('dragenter', function (e) {
            e.preventDefault();
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        });

        list.addEventListener('dragleave', function (e) {
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        });
        
        list.addEventListener('drop', function (e) {
            this.append(draggedItem);
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        })
    }
}


// This code is used to create a drag and drop feature. It selects all list items with 
// the class 'list-item' and all lists with the class 'list'. It then adds event listeners 
// to each list item to allow them to be dragged and dropped into the lists. When an item
// is dragged, it is set as the 'draggedItem' variable and its display is set to 'none'.
// When an item is dropped, it is appended to the list and its display is set back to 'block'.