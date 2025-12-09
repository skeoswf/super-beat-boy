import { sounds } from "../sounds_data/sounds.js";

const buttonKeydownHandler = (e) => {
  // Normalize input immediately
  const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;

  const sound = sounds.find((s) => s.buttonAssigned === key);
  if (!sound) return;

  const buttonKeyDowned = document.getElementById(
    `${sound.name}Button--${sound.id}`
  );
  if (!buttonKeyDowned) return;

  buttonKeyDowned.style.translate = "10px 10px";
  buttonKeyDowned.style.boxShadow = "0px 0px 0px";
  buttonKeyDowned.click();

  setTimeout(() => {
    buttonKeyDowned.style.translate = "0px 0px";
    buttonKeyDowned.style.boxShadow =
      "10px 10px 0px rgba(255, 36, 36, 0.76)";
  }, 100);
};

const buttonKeyDownFunctionality = () => {
  document.addEventListener("keydown", buttonKeydownHandler);
};

const disableButtonKeyDownFunctionality = () => {
  document.removeEventListener("keydown", buttonKeydownHandler);
};

export {
  buttonKeydownHandler,
  buttonKeyDownFunctionality,
  disableButtonKeyDownFunctionality,
};
