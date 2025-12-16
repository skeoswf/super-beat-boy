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
          <input type="text" name="beatName" id="renameBeatField" maxlength="12" required/>

          <label for="rebindBeatField">rebind</label>
          <input type="text" name="beatKeybind" id="rebindBeatField" required/>

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

        const newName = renameBeatInput.value.trim();
        const newBind = rebindBeatInput.value.trim();

        // checks for conflict -- go through the sound array, and look for objects that don't match the id of what you clicked, and has the same name or bind of what is in the input
        const conflict = sounds.some((s) =>
          s.id !== currentEditSound.id &&
          (s.name === newName || s.buttonAssigned === newBind)
        );

        if (conflict) {
          acceptButton.innerHTML = "not allowed; duplicate name and/or rebind";
          return;
        }

        formDisplay.innerHTML = "";
        formDisplay.hidden = true;
        formDisplay.style.pointerEvents = "none";

        currentEditSound.name = newName;
        currentEditSound.buttonAssigned = newBind;

        renderSounds();
        renderArchivedSounds();
        soundButtonFunctionality();

        console.log("this is the sounds after you clicked edit", sounds);
      });
    }
  });
};

export { soundButtonEditFunctionality };
