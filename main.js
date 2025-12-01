import { sounds, deletedSounds } from './sounds.js'

const soundsWrapper = document.getElementById("soundsWrapper")
const inputDisplay = document.getElementById("inputDisplay")
const editButton = document.getElementById("editButton")
const overlay = document.getElementById("dimOverlay")
const deleteButton = document.getElementsByClassName("deleteSound")


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

const soundButtonFunctionality = () => {
  for (let i = 0; i < sounds.length; i++) {
    let soundsButton = document.getElementById(`${sounds[i].name}Button--${sounds[i].id}`)
    let soundsAudio = new Audio(sounds[i].location)

    let soundsPlay = () => {
      let soundsPlay = soundsAudio.cloneNode();
      soundsPlay.play();
    }


    soundsButton.addEventListener('click', (e) => {
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

document.addEventListener('keydown', (e) => {
  const sound = sounds.find((s) => s.buttonAssigned === e.key);
  if (!sound) return;

  const buttonKeyDowned = document.getElementById(`${sound.name}Button--${sound.id}`);
  if (!buttonKeyDowned) return;

  buttonKeyDowned.style.translate = "10px 10px";
  buttonKeyDowned.style.boxShadow = "0px 0px 0px";
  buttonKeyDowned.click();

  setTimeout(() => {
    buttonKeyDowned.style.translate = "0px 0px";
    buttonKeyDowned.style.boxShadow = "10px 10px 0px rgba(255, 36, 36, 0.76)";
  }, 100);
});

soundsWrapper.addEventListener("mousedown", (e) => {
  if (e.target.id.includes("delete")) {
    const [, id] = e.target.id.split("--")
    const index = sounds.findIndex((sound) => sound.id === Number(id))
    const newArchived = sounds.splice(index, 1)[0]
    newArchived.active = false;
    deletedSounds.push(newArchived)
    renderSounds();
    soundButtonFunctionality();
    console.log(deletedSounds)
  } else {
    console.log("notdelete")
  }
})


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

const editButtonClick = () => {
  editButton.onclick = () => {
    const isEditing = editButton.classList.contains("editButtonTwo");


    editButton.classList.remove("editBlink");
    void editButton.offsetWidth;
    editButton.classList.add("editBlink");

    if (!isEditing) {
      editButton.classList.add("editButtonTwo");
      editButton.innerHTML = "done";

      for (let btn of deleteButton) {
        btn.hidden = false;
      }
    } else {
      editButton.classList.remove("editButtonTwo");
      editButton.innerHTML = "edit";

      for (let btn of deleteButton) {
        btn.hidden = true;
      }
    }
  }
}


const randomNumberZeroToTen = () => {
  let randomNumberZeroToTen = Math.floor(Math.random() * 10);
  return randomNumberZeroToTen;
}


switch (randomNumberZeroToTen()) {
  case (0):
    console.log("you got a 0");
    break;
  case (1):
    console.log("you got a 1 fucker");
    break;
  case (2):
    console.log("you got a 2 this time...")
    break;
  case (3):
    console.log("3. that's it. that's IT!!!")
    break;
}



renderSounds();
soundButtonFunctionality();
editButtonHover();
editButtonClick();
