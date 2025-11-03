import { sounds, deletedSounds } from './sounds.js'




for (let i = 0; i < sounds.length; i++) {
  console.log(sounds[i].name)
}


// do the one under for each one

const boomButton = document.getElementById("boomButton--1");

const boomAudio = new Audio('./sounds/boom.wav')

const boom = () => {
  console.log("the demon has called upon man's indignation");
  const boom = boomAudio.cloneNode();
  boom.play();
}

// when you keydown, it clicks it 
document.addEventListener('keydown', (e) => {
  if ((e.key) === 'Shift') {
    document.getElementById("boomButton--1").click();
  }
});

// when you click it (or because you keyed down, triggering click), it plays it
boomButton.addEventListener('click', (e) => {
  e.preventDefault;
  boom();
})

// do the one under for each one as well



// for each loop we need to:
//   make an audio const for each sounds[boomAudio]
//   make a function for that sound that clonesnodes and play
//   an event listener for each that pseudo click the button and also plays the sound
//   make an onclick as well

// make a 
