let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");

// form submit event
form.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
filter.addEventListener("keyup", filterItem);

// add item
function addItem(e) {
    e.preventDefault();
    let newItem = document.getElementById("Input").value;
    // Create new li element
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(newItem));
    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger float-end btn-sm ms-auto delete";
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);

    let addItemsTo = document.getElementById("items");
    addItemsTo.appendChild(li);
}

// Remove a Item from the list

function removeItem(e) {
    if (e.target.classList.contains("delete")) {
        if (confirm("Are You sure!")) {
            let lis = e.target.parentElement;
            itemList.removeChild(lis);
        }
    }
}

// filter the item

function filterItem(e) {
    let text = e.target.value.toLowerCase();
    let lists = itemList.getElementsByTagName("li");
    Array.from(lists).forEach(function(i) {
        let itemName = i.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            i.style.display = "block";
        } else {
            i.style.display = "none";
        }
    });
}