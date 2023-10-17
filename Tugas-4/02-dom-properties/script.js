let output;

// Get all forms
output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].action;

// Add item to the list
const addItemForm = document.getElementById("item-form");
const itemList = document.getElementById("item-list");
const clearAllButton = document.getElementById("clear");
const filterInput = document.getElementById("filter");

addItemForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const itemInput = document.getElementById("item-input");
  const newItemText = itemInput.value;

  if (newItemText.trim() !== "") {
    const newItem = document.createElement("li");
    newItem.textContent = newItemText;

    const removeButton = document.createElement("button");
    removeButton.className = "remove-item btn-link text-red";
    removeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    removeButton.addEventListener("click", function () {
      itemList.removeChild(newItem);
    });

    newItem.appendChild(removeButton);
    itemList.appendChild(newItem);

    itemInput.value = "";
  }
});

// Clear all items
clearAllButton.addEventListener("click", function () {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
});

// Filter items
filterInput.addEventListener("input", function () {
  const filterText = filterInput.value.toLowerCase();
  const items = itemList.getElementsByTagName("li");

  Array.from(items).forEach(function (item) {
    const itemName = item.textContent.toLowerCase();
    if (itemName.includes(filterText)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

console.log(output);
