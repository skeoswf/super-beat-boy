import { sounds } from "../sounds_data/sounds.js"

const renderSounds = () => {

  let soundsWrapperContent = "";
  for (let i = 0; i < sounds.length; i++) {
    soundsWrapperContent +=
      `
    <button class="soundButton" id="${sounds[i].name}Button--${sounds[i].id}">
      <p class="sound">${sounds[i].name}!</p>
      <p class="soundHotkey" id="${sounds[i].buttonAssigned}Beat">${sounds[i].buttonAssigned === " " ? "SPACE" : sounds[i].buttonAssigned.toUpperCase()}</p>
      <span class="deleteSound" id="delete--${sounds[i].id}" hidden="true">➖</span>
    </button>
  
    `
    soundsWrapper.innerHTML = soundsWrapperContent;
  }
}

export { renderSounds }
