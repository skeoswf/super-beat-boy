import { sounds, deletedSounds } from './sounds.js'

const soundsWrapper = document.getElementById("soundsWrapper")
const inputDisplay = document.getElementById("inputDisplay")
const editButton = document.getElementById("editButton")
const overlay = document.getElementById("dimOverlay")


const renderSounds = () => {

  let soundsWrapperContent = "";
  for (let i = 0; i < sounds.length; i++) {
    soundsWrapperContent +=
      `
    <button class="soundButton" id="${sounds[i].name}Button--${sounds[i].id}">
      <p class="sound">${sounds[i].name}!</p>
      <p class="soundHotkey" id="${sounds[i].buttonAssigned}Beat">${sounds[i].buttonAssigned === " " ? "SPACE" : sounds[i].buttonAssigned.toUpperCase()}</p>
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

      const span = document.createElement('span');
      span.classList.add('inputDisplayText');
      span.textContent = ` ${sounds[i].name} `;

      const br = document.createElement('br');
      inputDisplay.appendChild(br);
      inputDisplay.appendChild(span);

      setTimeout(() => {
        span.remove();
        br.remove();
      }, 700);
    })

  }
}

const editButtonHover = () => {
  editButton.onmouseover = () => {
    overlay.classList.remove("dimOut")
    overlay.classList.add("dimIn");
  }

  editButton.onmouseout = () => {
    overlay.classList.remove("dimIn")
    overlay.classList.add("dimOut")
  }
}


renderSounds()
soundButtonFunctionality()
editButtonHover()

// wjat if display box had softer edges as you kept playing but when there's no audio it goes back sharp 
