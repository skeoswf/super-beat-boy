import { sounds } from "../sounds_data/sounds.js";

const soundButtonEditFunctionality = () => {

  const editForm = document.getElementById("changeBeatSettings");
  const renameBeatInput = document.getElementById("renameBeatField");
  const rebindBeatInput = document.getElementById("rebindBeatField")

  soundsWrapper.addEventListener("mousedown", (e) => {
    if (e.target.classListContains("editSound")) {
      const [, id] = e.target.id.split("--")
      const index = sounds.findIndex((sound) => sound.id === Number(id))
      const currentEditSound = sounds.splice(index, 1)[0]
    }
  })



  let editFormHTML = `
<form id="changeBeatSettings">
  <label for="renameBeatField">rename</label>
  <input type="text" name="beatName" id="renameBeatField" maxlength="12" />

  <label for="rebindBeatField">rebind</label>
  <input type="text" name="beatKeybind" id="rebindBeatField" />

  <button type="submit" id="acceptButton">accept</button>
</form>
`

  utilityWrapper.innerHTML += editFormHTML


  editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("rename's value", renameBeatInput.value)
    console.log("rebinds's value", rebindBeatInput.value)
  })

}

export { soundButtonEditFunctionality }
