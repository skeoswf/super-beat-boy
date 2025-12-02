import { sounds } from "../sounds_data/sounds.js";

const buttonKeydownFunctionality = () => {
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
  })
}

export { buttonKeydownFunctionality }
