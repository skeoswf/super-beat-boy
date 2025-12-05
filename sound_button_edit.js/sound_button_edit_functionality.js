import { sounds } from "../sounds_data/sounds.js";

let editInputs =

  `
<div class="changeBeatSettings">
  <label for="renameBeatField">rename</label>
  <input type="text" name="beatName" id="renameBeatField" maxlength="12" />

  <label for="rebindBeatField">rebind</label>
  <input type="text" name="beatKeybind" id="rebindBeatField" />

  <button type="submit">accept</button>
</div>
`

const editFunctionality = () => {
  soundsWrapper.addEventListener("mousedown", (e) => {
    if (e.target.classlist.contains("editSound") {

    })
})
}
