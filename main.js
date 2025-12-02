import { sounds, deletedSounds } from './sounds_data/sounds.js'

import { renderSounds } from './sound_buttons/buttons_render.js'
import { soundButtonFunctionality } from './sound_buttons/button_functionality.js'
import { buttonKeydownFunctionality } from './sound_buttons/button_keydown.js'
import { deleteFunctionality } from './edit_button/delete_functionality.js'

const soundsWrapper = document.getElementById("soundsWrapper")
const inputDisplay = document.getElementById("inputDisplay")
const editButton = document.getElementById("editButton")
const overlay = document.getElementById("dimOverlay")
const deleteButton = document.getElementsByClassName("deleteSound")









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


const randomNumberZeroToTen = () => {
  let randomNumberZeroToTen = Math.floor(Math.random() * 10);
  return randomNumberZeroToTen;
}


switch (randomNumberZeroToTen()) {
  case (0):
    console.log("you got a 0");
    break;
  case (1):
    console.log("you got a 1 fucker");
    break;
  case (2):
    console.log("you got a 2 this time...")
    break;
  case (3):
    console.log("3. that's it. that's IT!!!")
    break;
}



renderSounds();
soundButtonFunctionality();
buttonKeydownFunctionality();
deleteFunctionality();
editButtonHover();
editButtonClick();
