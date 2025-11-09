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


// edge case -- if key assigned is space, the innerhtml should read space instead of empty key

// what if you entered a youtube video and it auto selects timestamps to use as audio bits and assigns that --> repurpose from user selected audio to youtube video. adds to the easy and cool and unique no? 
