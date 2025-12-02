const editButton = document.getElementById("editButton")
const deleteButton = document.getElementsByClassName("deleteSound")
const trueDeleteButton = document.getElementsByClassName("trueDeleteSound")

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

      for (let trueBtn of trueDeleteButton) {
        trueBtn.hidden = false;
      }

    } else {
      editButton.classList.remove("editButtonTwo");
      editButton.innerHTML = "edit";

      for (let btn of deleteButton) {
        btn.hidden = true;
      }

      for (let trueBtn of trueDeleteButton) {
        trueBtn.hidden = true;
      }
    }
  }
}

export { editButtonClick }
