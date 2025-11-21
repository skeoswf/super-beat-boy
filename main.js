import { sounds, deletedSounds } from './sounds.js'

const soundsWrapper = document.getElementById("soundsWrapper")
const inputDisplay = document.getElementById("inputDisplay")

const renderSounds = () => {


  const renderSoundbuttons = () => {

    let soundsWrapperContent = "";
    for (let i = 0; i < sounds.length; i++) {

      soundsWrapperContent +=
        `
    <button class="soundButton" id="${sounds[i].name}Button--${sounds[i].id}">
      <p class="sound">${sounds[i].name}!</p>
      <p class="soundHotkey" id="${sounds[i].buttonAssigned}Beat">${sounds[i].buttonAssigned.toUpperCase()}</p>
    </button>
  
    `

      soundsWrapper.innerHTML = soundsWrapperContent;

    }
  }

  const soundButtonFunctionality = () => {

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

        inputDisplay.innerHTML += `<br> <span class="inputDisplayText"> ${sounds[i].name} </span> `

      })

    }
  }

  renderSoundbuttons()
  soundButtonFunctionality()
}

renderSounds()

// lowk kinda wanna break this down into like 3 parts

// background
// ui stuff
// edge cases

// deleted sounds array
// neo brutalism library

// display box showing what you just played??
