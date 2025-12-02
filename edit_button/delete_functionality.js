import { sounds } from "../sounds_data/sounds.js";
import { deletedSounds } from "../sounds_data/sounds.js";
import { renderSounds } from "../sound_buttons/buttons_render.js";
import { soundButtonFunctionality } from "../sound_buttons/button_functionality.js";
import { renderArchivedSounds } from "../archived_buttons/archived_render.js";

const trueDeleteButton = document.getElementsByClassName("trueDeleteSound")

const deleteButton = document.getElementsByClassName("deleteSound")

const deleteFunctionality = () => {
  soundsWrapper.addEventListener("mousedown", (e) => {
    if (e.target.id.includes("delete")) {
      const [, id] = e.target.id.split("--")
      const index = sounds.findIndex((sound) => sound.id === Number(id))
      const newArchived = sounds.splice(index, 1)[0]
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
      console.log(deletedSounds)
    } else {
      console.log("notdelete")
    }
  })
};

export { deleteFunctionality }
