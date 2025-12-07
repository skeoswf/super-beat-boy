
import { renderSounds } from './sound_buttons/buttons_render.js'

import { soundButtonFunctionality } from './sound_buttons/sound_button_functionality.js'
import { buttonKeyDownFunctionality } from './sound_buttons/button_keydown.js'

import { deleteFunctionality } from './edit_button/delete_functionality.js'
import { editButtonClick } from './edit_button/edit_button_click.js'

import { renderArchivedSounds } from './archived_buttons/archived_render.js'
import { deleteArchivedFunctionality } from './archived_buttons/archived_delete.js'



renderSounds();

soundButtonFunctionality();
buttonKeyDownFunctionality();

deleteFunctionality();
editButtonClick();

renderArchivedSounds();
deleteArchivedFunctionality();
