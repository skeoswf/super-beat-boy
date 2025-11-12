import { sounds, deletedSounds } from './sounds.js'

const soundsWrapper = document.getElementById("soundsWrapper")

const renderSounds = () => {

  let soundsWrapperContent = "";

  for (let i = 0; i < sounds.length; i++) {
    console.log(sounds[i].name);

    soundsWrapperContent +=
      `
    <button class="soundButton" id="${sounds[i].name}Button--${sounds[i].id}">
      <p class="sound">${sounds[i].name}!</p>
      <p class="soundHotkey" id="${sounds[i].buttonAssigned}Beat">${sounds[i].buttonAssigned.toUpperCase()}</p>
    </button>`

    soundsWrapper.innerHTML = soundsWrapperContent;

  }

  for (let i = 0; i < sounds.length; i++) {
    let soundsButtonId = document.getElementById(`${sounds[i].name}Button--${sounds[i].id}`)
    let soundsAudio = new Audio(sounds[i].location)

    let soundsPlay = () => {
      let soundsPlay = soundsAudio.cloneNode();
      soundsPlay.play();
    }

    document.addEventListener('keydown', (e) => {
      if ((e.key) === sounds[i].buttonAssigned) {
        document.getElementById(`${sounds[i].name}Button--${sounds[i].id}`).click();
      }
    })

    soundsButtonId.addEventListener('click', (e) => {
      e.preventDefault();
      soundsPlay();
    })

  }

  console.log(soundsButtonId)
  console.log(soundsAudio)
}

renderSounds()


// background
// ui stuff
// edge cases

// deleted sounds array
// neo brutalism library
