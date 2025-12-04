

const superBeatBoyWrappa = document.getElementById("supaBeatBoyWrappa")

const randomSupaBeatBoy = () => {
  let roll = Math.floor(Math.random() * 10);

  switch (roll) {
    case (0):
      superBeatBoyWrappa.src = "./images/supabeatboy_topright.png"
      break;
    case (1):
      superBeatBoyWrappa.src = "./images/supabeatboy_topmiddle.png"
      break;
    case (2):
      superBeatBoyWrappa.src = "./images/supabeatboy_topleft.png"
      break;
    case (3):
      superBeatBoyWrappa.src = "./images/supabeatboy_middleright.png"
      break;
    case (4):
      superBeatBoyWrappa.src = "./images/supabeatboy_middlemiddle.png"
      break;
    case (5):
      superBeatBoyWrappa.src = "./images/supabeatboy_middleleft.png"
      break;
    case (6):
      superBeatBoyWrappa.src = "./images/supabeatboy_bottomright.png"
      break;
    case (7):
      superBeatBoyWrappa.src = "./images/supabeatboy_bottommiddle.png"
      break;
    case (8):
      superBeatBoyWrappa.src = "./images/supabeatboy_bottomleft.png"
      break;
    case (9):
      superBeatBoyWrappa.src = "./images/supabeatboy.png"
      break;
  };

}

export { randomSupaBeatBoy }
