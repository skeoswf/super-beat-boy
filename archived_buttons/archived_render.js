import { deletedSounds } from "../sounds_data/sounds.js";

const renderArchivedSounds = () => {
  let soundsWrapperContent = "";

  if (deletedSounds.length >= 1) {
    for (let i = 0; i < deletedSounds.length; i++) {
      soundsWrapperContent += `
        <button class="archivedSoundButton" id="${deletedSounds[i].name}Button--${deletedSounds[i].id}">
          <p class="sound">${deletedSounds[i].name}</p>
          <span class="trueDeleteSound" id="delete--${deletedSounds[i].id}" hidden>🗑️</span>
        </button>
      `;
    }
  } else {
    soundsWrapperContent = "aint nothin here fuckboy";
  }

  archivedSoundsWrapper.innerHTML = soundsWrapperContent;
};

export { renderArchivedSounds };
