const addItem = document.querySelector("#add_item");
const submit = document.querySelector("#submit_item");
const clearAll = document.querySelector("#reset_all");
const listBody = document.querySelector(".user_list");

addItem.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (!this.value) return;

    //add new item to list
    const newListItem = this.value;
    const newItem = document.createElement("li");
    newItem.innerHTML = `${newListItem} <i class="fas fa-trash delete_item"></i>`;
    listBody.appendChild(newItem);
    this.value = "";
  }
});

submit.addEventListener("click", function () {
  /* check to only submit if user input has a value */
  if (!addItem.value) return;
  const newListItem = addItem.value;
  const newItem = document.createElement("li");
  newItem.innerHTML = `${newListItem} <i class="fas fa-trash delete_item"></i>`;
  listBody.appendChild(newItem);
  addItem.value = "";
});

clearAll.addEventListener("click", function () {
  listBody.innerHTML = "";
});

//to get event listeners to work on dynamically created elements, must add event listener to the PARENT element and not directly to the element itself
listBody.addEventListener("click", function (event) {
  //first make sure to only run the code when clicking the trash icon
  if (event.target.className === "fas fa-trash delete_item") {
    //must remove() from the ParentNode, otherwise will only delete the trash icon itself and not the list
    event.target.parentNode.remove();
  }
});
