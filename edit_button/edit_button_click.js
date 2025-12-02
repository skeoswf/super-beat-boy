const editButton = document.getElementById("editButton")
const deleteButton = document.getElementsByClassName("deleteSound")

const editButtonClick = () => {
  editButton.onclick = () => {
    const isEditing = editButton.classList.contains("editButtonTwo");


    editButton.classList.remove("editBlink");
    void editButton.offsetWidth;
    editButton.classList.add("editBlink");

    if (!isEditing) {
      editButton.classList.add("editButtonTwo");
      editButton.innerHTML = "done";

      for (let btn of deleteButton) {
        btn.hidden = false;
      }

    } else {
      editButton.classList.remove("editButtonTwo");
      editButton.innerHTML = "edit";

      for (let btn of deleteButton) {
        btn.hidden = true;
      }
    }
  }
}

export { editButtonClick }
