const overlay = document.getElementById("dimOverlay")

const editButtonHover = () => {
  editButton.onmouseover = () => {
    overlay.classList.remove("dimOut")
    overlay.classList.add("dimIn");
  }

  editButton.onmouseout = () => {
    overlay.classList.remove("dimIn")
    overlay.classList.add("dimOut")
  }
}

export { editButtonHover }
