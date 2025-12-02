
import { renderSounds } from './sound_buttons/buttons_render.js'
import { soundButtonFunctionality } from './sound_buttons/button_functionality.js'
import { buttonKeydownFunctionality } from './sound_buttons/button_keydown.js'
import { deleteFunctionality } from './edit_button/delete_functionality.js'
import { editButtonHover } from './edit_button/edit_button_hover.js'
import { editButtonClick } from './edit_button/edit_button_click.js'


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
buttonKeydownFunctionality();
deleteFunctionality();
editButtonHover();
editButtonClick();
