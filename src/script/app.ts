import { $ } from "./../lib/kuery";
import fit_text from "textfit";

import button_actions from "./button";
import machine_actions from "./machine";

// re-control card`s font size
const cards = document.querySelectorAll(".card");
console.log(cards);
fit_text(cards);

// add click event
$("#button").add_click(() => {
    button_actions.execute(0);
    machine_actions.execute(0);
});

console.log("App was started!");
