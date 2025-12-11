import { sounds, deletedSounds } from "../sounds_data/sounds.js";
import { soundButtonFunctionality } from "../sound_buttons/sound_button_functionality.js";
import { renderSounds } from "../sound_buttons/buttons_render.js";
import { renderArchivedSounds } from "../archived_buttons/archived_render.js";

const trueDeleteButton = document.getElementsByClassName("trueDeleteSound")
const deleteButton = document.getElementsByClassName("deleteSound")

const deleteArchivedFunctionality = () => {
  archivedSoundsWrapper.addEventListener("mousedown", (e) => {
    if (e.target.classList.contains("trueDeleteSound")) {
      const [, id] = e.target.id.split("--")
      const index = deletedSounds.findIndex((deletedSound) => deletedSound.id === Number(id))
      deletedSounds.splice(index, 1)[0]

      if (deletedSounds.length >= 1) {

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

        renderSounds();
        renderArchivedSounds();

      }

    } else {
      console.log("error with deleting archived sounds")
    }
  })
};

export { deleteArchivedFunctionality }
