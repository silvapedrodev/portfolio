import { navBar } from "./mobile-navbar.js";
import { addWhiteMode } from "./white-mode.js";
import { sendingMessage } from "./sendForm.js";

const mobileNavBar = navBar
const whiteMode = addWhiteMode
const sendMessageForm = sendingMessage

mobileNavBar()
whiteMode()
sendMessageForm()

// ---- Coloca o ano atual no footer ----- 

const currentYear = new Date().getFullYear();
document.querySelector("#currentYear").textContent = currentYear;
