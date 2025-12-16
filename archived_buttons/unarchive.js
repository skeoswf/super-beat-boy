import { sounds, deletedSounds } from "../sounds_data/sounds.js";
import { soundButtonFunctionality } from "../sound_buttons/sound_button_functionality.js";
import { renderSounds } from "../sound_buttons/buttons_render.js";
import { renderArchivedSounds } from "../archived_buttons/archived_render.js";

const trueDeleteButton = document.getElementsByClassName("trueDeleteSound");
const deleteButton = document.getElementsByClassName("deleteSound");

const unArchiveFunctionality = () => {
  archivedSoundsWrapper.addEventListener("mousedown", (e) => {
    if (!e.target.classList.contains("unarchiveSound")) {
      renderSounds();
      renderArchivedSounds();
      return;
    }

    const [, id] = e.target.id.split("--");
    const index = deletedSounds.findIndex(
      (unarchived) => unarchived.id === Number(id)
    );
    const unarchivedSound = deletedSounds.splice(index, 1)[0]

    if (sounds.length >= 1) {
      unarchivedSound.active = true;
      sounds.push(unarchivedSound);

      renderSounds();
      renderArchivedSounds();

      // keep delete buttons visible after rerender
      for (let btn of deleteButton) btn.hidden = false;
      for (let trueBtn of trueDeleteButton) trueBtn.hidden = false;

      soundButtonFunctionality();
    } else {
      soundsWrapper.innerHTML = "WHAT SOUNDS YOU TRYNA PLAY PLAYA!!";
    }
  });
};

export { unArchiveFunctionality };
