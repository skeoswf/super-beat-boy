import { deletedSounds } from "../sounds_data/sounds.js"

const renderArchivedSounds = () => {

  let soundsWrapperContent = "";
  for (let i = 0; i < deletedSounds.length; i++) {
    soundsWrapperContent +=
      `
    <button class="archivedSoundButton" id="${deletedSounds[i].name}Button--${deletedSounds[i].id}">
      <p class="sound">${deletedSounds[i].name}</p>
      <span class="trueDeleteSound" id="delete--${deletedSounds[i].id}" hidden="true">🗑️</span>
    </button>
  
    `
    archivedSoundsWrapper.innerHTML = soundsWrapperContent;
  }
}

export { renderArchivedSounds }
