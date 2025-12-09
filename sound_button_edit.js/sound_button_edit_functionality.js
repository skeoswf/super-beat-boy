import { sounds } from "../sounds_data/sounds.js";
import { renderSounds } from "../sound_buttons/buttons_render.js";
import { renderArchivedSounds } from "../archived_buttons/archived_render.js";
import { soundButtonFunctionality } from "../sound_buttons/sound_button_functionality.js";

const soundsWrapper = document.getElementById("soundsWrapper");
const formDisplay = document.getElementById("formDisplay");

const soundButtonEditFunctionality = () => {
  soundsWrapper.addEventListener("mousedown", (e) => {
    if (e.target.classList.contains("editSound")) {
      let editFormHTML = `
        <form id="changeBeatSettings">
          <label for="renameBeatField">rename</label>
          <input type="text" name="beatName" id="renameBeatField" maxlength="12" />

          <label for="rebindBeatField">rebind</label>
          <input type="text" name="beatKeybind" id="rebindBeatField" />

          <button type="submit" id="acceptButton">accept</button>
        </form>
      `;

      formDisplay.style.pointerEvents = "auto";
      formDisplay.innerHTML = editFormHTML;
      formDisplay.hidden = false;

      const editForm = document.getElementById("changeBeatSettings");

      const renameBeatInput = document.getElementById("renameBeatField");
      const rebindBeatInput = document.getElementById("rebindBeatField");

      // get which sound we're editing (from the clicked edit button)
      const [, id] = e.target.id.split("--");
      let currentEditSound = sounds.find((sound) => sound.id === Number(id));

      // handle keybinding input
      rebindBeatInput.addEventListener("keydown", (event) => {
        event.preventDefault();

        if (event.key.length === 1) {
          rebindBeatInput.value = event.key.toLowerCase();
        } else {
          rebindBeatInput.value = event.code;
        }
      });

      // handle form submit
      editForm.addEventListener("submit", (event) => {
        event.preventDefault();
        formDisplay.innerHTML = "";
        formDisplay.hidden = true;
        formDisplay.style.pointerEvents = "none";

        currentEditSound.name = renameBeatInput.value;
        currentEditSound.buttonAssigned = rebindBeatInput.value;

        renderSounds();
        renderArchivedSounds();
        soundButtonFunctionality();

        console.log("this is the sounds after you clicked edit", sounds);
      });
    }
  });
};

export { soundButtonEditFunctionality };
