const editButton = document.getElementById("editButton")
const deleteButton = document.getElementsByClassName("deleteSound")
const trueDeleteButton = document.getElementsByClassName("trueDeleteSound")

const editButtonClick = () => {
  editButton.onclick = () => {
    const isEditing = editButton.classList.contains("editButtonTwo");

    dimOverlay.hidden = false
    dimOverlay.classList.remove("dimOut");
    dimOverlay.classList.add("dimIn");

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

      dimOverlay.classList.remove("dimIn");
      dimOverlay.classList.add("dimOut");

      const handleAnimEnd = (e) => {
        if (e.animationName === "blinkOut") {
          dimOverlay.hidden = true;
          dimOverlay.classList.remove("dimOut");
          dimOverlay.removeEventListener("animationend", handleAnimEnd);
        }
      };

      dimOverlay.addEventListener("animationend", handleAnimEnd);

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
