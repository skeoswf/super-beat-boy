import { sounds, deletedSounds } from "../sounds_data/sounds.js";

import { renderSounds } from "../sound_buttons/buttons_render.js";
import { renderArchivedSounds } from "../archived_buttons/archived_render.js";

import { soundButtonFunctionality } from "../sound_buttons/button_functionality.js";


const trueDeleteButton = document.getElementsByClassName("trueDeleteSound")
const deleteButton = document.getElementsByClassName("deleteSound")

const deleteFunctionality = () => {
  soundsWrapper.addEventListener("mousedown", (e) => {
    if (e.target.id.includes("delete")) {
      const [, id] = e.target.id.split("--")
      const index = sounds.findIndex((sound) => sound.id === Number(id))
      const newArchived = sounds.splice(index, 1)[0]

      if (sounds.length >= 1) {
        newArchived.active = false;
        deletedSounds.push(newArchived)
        renderSounds();
        renderArchivedSounds();


        // keeps the delete after each rerender 
        for (let btn of deleteButton) {
          btn.hidden = false;
        }

        for (let trueBtn of trueDeleteButton) {
          trueBtn.hidden = false;
        }

        soundButtonFunctionality();
      } else {
        soundsWrapper.innerHTML = "WHAT SOUNDS YOU TRYNA PLAY PLAYA!!"
      }
      console.log("archived sounds AFTER deletion", deletedSounds)
      console.log("sounds available AFTER deletion", sounds)
    } else {
      console.log("notdelete")
    }
  })
};

export { deleteFunctionality }
