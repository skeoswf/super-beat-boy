import { sounds } from "../sounds_data/sounds.js"
import { randomSupaBeatBoy } from "./random_beatboy.js";

const soundButtonFunctionality = () => {
  for (let i = 0; i < sounds.length; i++) {
    let soundsButton = document.getElementById(`${sounds[i].name}Button--${sounds[i].id}`);
    let soundsAudio = new Audio(sounds[i].location);

    // cloneNode allows the sound to repeat over itself
    let soundsPlay = () => {
      let soundsPlay = soundsAudio.cloneNode();
      randomSupaBeatBoy();
      soundsPlay.play();
    };

    // on click, plays sound, then creates a span and br
    soundsButton.addEventListener('click', (e) => {
      if (sounds.length >= 1) {
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
      } else {
        soundsWrapper.innerHTML = "what the fuck are you doing";
      }
    });
  }
};


export { soundButtonFunctionality }
